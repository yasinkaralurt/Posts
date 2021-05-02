import { createStackNavigator } from '@react-navigation/stack'

export enum MainRoutes {
    Public = 'Public',
    Private = 'Private',
}

export enum PublicRoutes {
    Splash = 'Splash',
    SignIn = 'SignIn',
    AppLoading = 'AppLoading',
}

export enum PrivateRoutes {
    Home = 'HomeScreen',
    PostDetail = 'PostDetailScreen',
}

export type MainStackParamList = {
    // Init Stack
    [MainRoutes.Public]: undefined
    [MainRoutes.Private]: undefined
}

export type PublicStackParamList = {
    [PublicRoutes.Splash]: undefined
    [PublicRoutes.SignIn]: undefined
    [PublicRoutes.AppLoading]: undefined
}

export type PrivateStackParamList = {
    [PrivateRoutes.Home]: undefined
    [PrivateRoutes.PostDetail]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
export const PublicStack = createStackNavigator<PublicStackParamList>()
export const PrivateStack = createStackNavigator<PrivateStackParamList>()
