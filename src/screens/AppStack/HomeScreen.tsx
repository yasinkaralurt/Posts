import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, Button } from 'react-native'
import { PrivateNavigationProp } from '../../navigation/types'
import { PrivateRoutes } from '../../navigation/routes'
import { useReduxDispatch, useReduxSelector } from '../../store'
import { getUser, signOut } from '../../store/reducers/user'
import { GetTranslation, TranslationKey } from '../../utils/TranslateHelper'
import ApiService from '../../store/services/ApiService'
import PostItem from '../../components/post/PostItem'
import { LoadingScroll } from '../../components/base/LoadingHOC'
import { View } from '../../components/base/Themed'
import IconLogout from "../../components/IconLogout";

type HomeScreenProps = { navigation: PrivateNavigationProp<PrivateRoutes.Home> }

const HomeScreen = ({ navigation }: HomeScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const logoutHandler = () => dispatch(signOut())
    const user = useReduxSelector(getUser)
    const [loading, setLoading] = useState(false)
    const [postList, setPostList] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        setLoading(true)
        new ApiService().getPosts(user.id).then(response => {
            var list = response.map((item) => { return { id: item.id, title: item.title } })
            setPostList(list)
        }).finally(() => setLoading(false))
    }

    return (
        <LoadingScroll loading={loading} style={styles.container}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{GetTranslation(TranslationKey.Hi)} {user?.name}!</Text>
                <IconLogout onPress={() => logoutHandler()} />
            </View>
            {postList.map((item, index) => <PostItem navigation={navigation} key={index} item={item} />)}
        </LoadingScroll>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default HomeScreen
