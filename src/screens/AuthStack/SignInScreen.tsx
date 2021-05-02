import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Keyboard, ActivityIndicator } from 'react-native'
import { useReduxDispatch, useReduxSelector } from '../../store'
import { getErrorMessage, getLoading, setError, signinAsync } from '../../store/actions/user'
import BaseTextInput from "../../components/base/BaseTextInput";
import BaseButton from "../../components/base/BaseButton";
import { GetTranslation, TranslationKey } from '../../utils/TranslateHelper'
import { useFocusEffect } from '@react-navigation/native'
import ConstantColors from '../../constants/ConstantColors';
import LoadingHOC from '../../components/LoadingHOC';
const LoadingView = LoadingHOC(View);


const SignInScreen = (): React.ReactElement => {

    const dispatch = useReduxDispatch()
    const errorMessage = useReduxSelector(getErrorMessage)
    const loading = useReduxSelector(getLoading)
    const [username, setUsername] = useState('Bret')

    const singInHandler = (): void => {
        Keyboard.dismiss()
        if (username)
            dispatch(signinAsync(username))
    }

    useFocusEffect(
        useCallback(() => {
            if (errorMessage) {
                alert(errorMessage)
                dispatch(setError())
            }
        }, [errorMessage]),
    )

    return (
        <LoadingView loading={loading} style={styles.container}>
            <BaseTextInput required value={username} onChangeText={setUsername} label={GetTranslation(TranslationKey.Username)} multiline={false} />
            <BaseButton onPress={singInHandler} label={TranslationKey.Button.SignIn} />
        </LoadingView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
})

export default SignInScreen
