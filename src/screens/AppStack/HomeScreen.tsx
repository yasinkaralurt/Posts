import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { MainNavigationProp, PrivateNavigationProp } from '../../navigation/types'
import { PrivateRoutes } from '../../navigation/routes'
import { useReduxDispatch } from '../../store'
import { signOut } from '../../store/actions/user'

type HomeScreenProps = { navigation: PrivateNavigationProp<PrivateRoutes.Home> }

const HomeScreen = ({ navigation }: HomeScreenProps): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const logoutHandler = () => dispatch(signOut())

    return (
        <View style={styles.page}>
            <Text>HOME</Text>
            <Button title="logout" onPress={() => logoutHandler()} />
            <Button title="settings" onPress={() => navigation.navigate(PrivateRoutes.Settings)} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default HomeScreen
