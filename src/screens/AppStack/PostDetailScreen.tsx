import React, { useCallback, useEffect, useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { PrivateNavigationProp } from '../../navigation/types'
import { PrivateRoutes } from '../../navigation/routes'
import ApiService from '../../store/services/ApiService'
import { ShowDefaultMessage } from "../../utils/AlertHelper";
import { GetTranslation, TranslationKey } from '../../utils/TranslateHelper'
import CommentItem from '../../components/post/CommentItem'
import { LoadingScroll } from '../../components/base/LoadingHOC'
import Header from "../../components/Header";

type PostDetailScreenProps = { navigation: PrivateNavigationProp<PrivateRoutes.PostDetail> }

const PostDetailScreen = ({ navigation, route }): React.ReactElement => {

    var postId = route?.params.data
    const [post, setPost] = useState(null)
    const [commentList, setCommentList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        Promise.all([getPost(), getComments()])
            .finally(() => setLoading(false))
    }, [])

    const getPost = async () => {
        await new ApiService().getPost(postId).then(response => {
            if (response && Array.isArray(response) && response.length > 0)
                setPost(response[0])
            else
                ShowDefaultMessage({ message: GetTranslation(TranslationKey.Error.NotFound), onPress: () => navigation.goBack() })
        })
    }

    const getComments = async () => {
        await new ApiService().getComments(postId).then(response => {
            if (response && Array.isArray(response))
                setCommentList(response)
            else
                ShowDefaultMessage({ message: GetTranslation(TranslationKey.Error.NotFound), onPress: () => navigation.goBack() })
        })
    }

    const getPostView = useCallback(() => {
        if (post)
            return (
                <Text style={{ marginVertical: 10 }}>{post.title}</Text>
            )
    }, [post])

    return (
        <>
            <Header navigation={navigation} title={GetTranslation(TranslationKey.Header.PostDetail)} />
            <LoadingScroll loading={loading} style={styles.container}>
                {getPostView()}
                {commentList.map((item, index) => <CommentItem key={index} item={item} />)}
            </LoadingScroll>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
})

export default PostDetailScreen
