import React, { useRef } from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { PublicStack, PrivateStack, MainRoutes, MainStack, PrivateRoutes, PublicRoutes } from './routes'

import SplashScreen from '../screens/AuthStack/SplashScreen'
import SignInScreen from '../screens/AuthStack/SignInScreen'
import HomeScreen from '../screens/AppStack/HomeScreen'
import PostDetailScreen from '../screens/AppStack/PostDetailScreen'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../store'

const Private = () => (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
        <PrivateStack.Screen name={PrivateRoutes.Home} component={HomeScreen} />
        <PrivateStack.Screen name={PrivateRoutes.PostDetail} component={PostDetailScreen} />
    </PrivateStack.Navigator>
)

const Public = () => (
    <PublicStack.Navigator screenOptions={{ headerShown: false }}>
        <PublicStack.Screen name={PublicRoutes.Splash} component={SplashScreen} />
        <PublicStack.Screen name={PublicRoutes.SignIn} component={SignInScreen} />
    </PublicStack.Navigator>
)



const MainNavigation = (): React.ReactElement => {

    const user = useSelector((state: ApplicationState) => state.auth.user)

    return (
        <NavigationContainer >
            <MainStack.Navigator headerMode="none">
                {
                    user
                        ? <MainStack.Screen name={MainRoutes.Private} component={Private} />
                        : <MainStack.Screen name={MainRoutes.Public} component={Public} />
                }

            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation
