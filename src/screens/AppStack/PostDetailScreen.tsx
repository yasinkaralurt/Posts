import React, { useEffect, useMemo, useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { ShowDefaultMessage } from "../../utils/helpers/AlertHelper";
import { GetTranslation, TranslationKey } from '../../utils/helpers/TranslateHelper'
import CommentItem from '../../components/post/CommentItem'
import Header from "../../components/Header";
import { View } from '../../components/base/Themed'
import Api from '../../store/services/Api';
import { hideHud, showHud } from '../../components/hud/HudHelper';

const PostDetailScreen = ({ navigation, route }): React.ReactElement => {

    var postId = route?.params.data
    const [user, setUser] = useState(null)
    const [post, setPost] = useState(null)
    const [commentList, setCommentList] = useState([])

    useEffect(() => {
        showHud()
        Promise.all([getPost(), getComments()])
            .finally(hideHud)
    }, [])


    const getUser = async (userId) => {
        Api.getUser(userId).then(response => {
            if (response && Array.isArray(response) && response.length > 0)
                setUser(response[0])
        })
    }

    const getPost = async () => {
        var response = await Api.getPost(postId)
        var data = response.data
        if (Array.isArray(data) && data.length > 0) {
            setPost(data[0])
            await getUser(data[0].userId)
        }
        else {
            ShowDefaultMessage({ message: GetTranslation(TranslationKey.Error.NotFound), onPress: () => navigation.goBack() })
        }
    }

    const getComments = async () => {
        Api.getComments(postId).then(response => {
            var data = response.data
            if (Array.isArray(data))
                setCommentList(data)
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
            <ScrollView style={styles.container}>
                {user && <Text style={styles.username}>{user?.username}</Text>}
                {postInfo}
                <Text>{GetTranslation(TranslationKey.CommentCount)} : {commentList.length}`</Text>
                {commentView}
            </ScrollView>
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
