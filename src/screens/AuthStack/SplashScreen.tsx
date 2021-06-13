import React, { useCallback } from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { PublicNavigationProp } from '../../navigation/types'
import { MainRoutes, PublicRoutes } from '../../navigation/routes'

type SplashScreenProps = {
    navigation: PublicNavigationProp<PublicRoutes.Splash>
}

const SplashScreen = ({ navigation }: SplashScreenProps): React.ReactElement => {

    const navigate = useCallback(() => navigation.replace(PublicRoutes.SignIn), [navigation])

    useFocusEffect(

        useCallback(() => {
            const navigationTimer = setTimeout(() => {
                navigate()
            }, 200)

            return (): void => clearTimeout(navigationTimer)
        }, [navigate]),
    )

    return (
        <TouchableWithoutFeedback>
            <View style={styles.page}>
                <Text>Splash Screen</Text>
            </View>
        </TouchableWithoutFeedback>
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

export default SplashScreen
