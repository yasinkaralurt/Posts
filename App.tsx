import React from 'react';
import { useColorScheme, } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigation from './src/navigation/MainNavigation';
import Api from './src/store/services/Api';
import HttpClient from "./src/store/services/HttpClient";
import Hud from "./src/components/hud";
import { hudRef } from "./src/components/hud/HudHelper";
const App = () => {

    if (!Api.isSet) {
        Api.setup(HttpClient.instance.axios);
    }

    return (
        <Provider store={store}>
            <MainNavigation />
            <Hud ref={hudRef} />
        </Provider>
    );

};


export default App;
