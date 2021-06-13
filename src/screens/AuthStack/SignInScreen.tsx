import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet, Keyboard, ScrollView, Text } from 'react-native'
import { useReduxDispatch, useReduxSelector } from '../../store'
import { getErrorMessage, getLoading, setError, signinAsync } from '../../store/reducers/user'
import { useFocusEffect } from '@react-navigation/native'
import { hideHud, showHud } from '../../components/hud/HudHelper';
import Api from '../../store/services/Api';


const SignInScreen = (): React.ReactElement => {

    const dispatch = useReduxDispatch()
    const errorMessage = useReduxSelector(getErrorMessage)
    const loading = useReduxSelector(getLoading)
    const [username, setUsername] = useState('Bret')

    const [users, setUsers] = useState([])

    const onSignIn = (user: string): void => {
        console.log(user);

        dispatch(signinAsync(user))
    }

    const getUsers = async () => {
        showHud()
        Api.getUsers().then((response) => {
            console.log(response);
            var list = response.data.map((item) => { return { name: item.name, username: item.username } })
            setUsers(list)
        }).finally(hideHud)
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        if (loading)
            showHud()
        else
            hideHud()
    }, [loading])

    useFocusEffect(
        useCallback(() => {
            if (errorMessage) {
                dispatch(setError())
            }
        }, [errorMessage]),
    )

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingTop: 20, justifyContent: 'center' }}>
                {users.map((item, index) => {
                    return <Text onPress={() => onSignIn(item.username)} style={{ borderRadius: 5, borderWidth: 0.5, padding: 10, marginVertical: 5 }} key={index}>{item.name}</Text>
                })}
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
})

export default SignInScreen
