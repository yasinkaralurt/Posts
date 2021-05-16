import React, { useEffect } from 'react';
import { StyleSheet, useColorScheme, } from 'react-native';
import { Provider } from 'react-redux';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import store from './src/store';
import MainNavigation from './src/navigation/MainNavigation';
import Api from './src/store/services/Api';
import HttpClient from "./src/store/services/HttpClient";

const App = () => {

    const colorScheme = useColorScheme();

    if (!Api.isSettedUp) {
        Api.setup(HttpClient.instance.axios);
    }
    
    var customTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
    const appTheme = { ...customTheme, colors: { ...customTheme.colors, background: '#fff' } }

    return (
        <Provider store={store}>
            {/* <SafeAreaProvider> */}
            <MainNavigation />
            {/* <StatusBar /> */}
            {/* </SafeAreaProvider> */}
        </Provider>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
