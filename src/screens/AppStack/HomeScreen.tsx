import React, { useEffect, useMemo, useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { PrivateNavigationProp } from '../../navigation/types'
import { PrivateRoutes } from '../../navigation/routes'
import { useReduxDispatch, useReduxSelector } from '../../store'
import { getUser, signOut } from '../../store/reducers/user'
import { GetTranslation, TranslationKey } from '../../utils/helpers/TranslateHelper'
import PostItem from '../../components/post/PostItem'
import { View } from '../../components/base/Themed'
import IconLogout from "../../components/IconLogout";
import Api from '../../store/services/Api'
import { hideHud, showHud } from '../../components/hud/HudHelper'

type HomeScreenProps = { navigation: PrivateNavigationProp<PrivateRoutes.Home> }

const HomeScreen = ({ navigation }: HomeScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const logoutHandler = () => dispatch(signOut())
    const user = useReduxSelector(getUser)
    const [postList, setPostList] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        showHud()
        Api.getPosts(user.id).then((response) => {
            var list = response.data.map((item) => { return { id: item.id, title: item.title } })
            setPostList(list)
        }).finally(hideHud)
    }

    const welcomeText = useMemo(() => {
        return `${GetTranslation(TranslationKey.Hi)} ${user?.name}!`
    }, [user])

    const postListView = useMemo(() => {
        return postList.map((item, index) => <PostItem navigation={navigation} key={index} item={item} />)
    }, [postList])

    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.welcome}>{welcomeText}</Text>
                <IconLogout onPress={() => logoutHandler()} />
            </View>
            {postListView}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 18,
        fontWeight: '700'
    }
})

export default HomeScreen
