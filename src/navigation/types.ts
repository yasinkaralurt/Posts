import { StackNavigationProp } from '@react-navigation/stack'
import { MainRoutes, MainStackParamList, PublicStackParamList, PrivateStackParamList, PublicRoutes, PrivateRoutes } from './routes'

export type MainNavigationProp<RouteName extends keyof MainStackParamList = MainRoutes> = StackNavigationProp<MainStackParamList, RouteName>

export type PrivateNavigationProp<RouteName extends keyof PrivateStackParamList = PrivateRoutes> = StackNavigationProp<PrivateStackParamList, RouteName>

export type PublicNavigationProp<RouteName extends keyof PublicStackParamList = PublicRoutes> = StackNavigationProp<PublicStackParamList, RouteName>
