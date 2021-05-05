import React, { useEffect, useMemo, useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import ApiService from '../../store/services/ApiService'
import { ShowDefaultMessage } from "../../utils/AlertHelper";
import { GetTranslation, TranslationKey } from '../../utils/TranslateHelper'
import CommentItem from '../../components/post/CommentItem'
import { LoadingScroll } from '../../components/base/LoadingHOC'
import Header from "../../components/Header";
import { View } from '../../components/base/Themed'

const PostDetailScreen = ({ navigation, route }): React.ReactElement => {

    var postId = route?.params.data
    const [user, setUser] = useState(null)
    const [post, setPost] = useState(null)
    const [commentList, setCommentList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        Promise.all([getPost(), getComments()])
            .finally(() => setLoading(false))
    }, [])


    const getUser = async (userId) => {
        new ApiService().getUser(userId).then(response => {
            if (response && Array.isArray(response) && response.length > 0)
                setUser(response[0])
        })
    }

    const getPost = async () => {
        var response = await new ApiService().getPost(postId)
        if (response && Array.isArray(response) && response.length > 0) {
            console.log(response[0])
            setPost(response[0])
            await getUser(response[0].userId)
        }
        else {
            ShowDefaultMessage({ message: GetTranslation(TranslationKey.Error.NotFound), onPress: () => navigation.goBack() })
        }
    }

    const getComments = async () => {
        await new ApiService().getComments(postId).then(response => {
            if (response && Array.isArray(response))
                setCommentList(response)
            else
                ShowDefaultMessage({ message: GetTranslation(TranslationKey.Error.NotFound), onPress: () => navigation.goBack() })
        })
    }

    const header = useMemo(() => {
        return GetTranslation(TranslationKey.Header.PostDetail)
    }, [post])

    const postInfo = useMemo(() => {
        if (!post)
            return null
        return (
            <View>
                <Text style={styles.title}>{post.title}</Text>
                <Text>{post.body}</Text>
            </View>
        )
    }, [post])

    const commentView = useMemo(() => {
        return commentList.map((item, index) => <CommentItem key={index} item={item} />)
    }, [commentList])

    return (
        <>
            <Header navigation={navigation} title={header} />
            <LoadingScroll loading={loading} style={styles.container}>
                {user && <Text style={styles.username}>{user?.username}</Text>}
                {postInfo}
                <Text>{GetTranslation(TranslationKey.CommentCount)} : {commentList.length}`</Text>
                {commentView}
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
    username: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})

export default PostDetailScreen
