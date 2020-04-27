import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import resolveDefaultScreen from './src/screens/resolveDefaultScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    resolveScreen: resolveDefaultScreen,
    mainFlow: createBottomTabNavigator({
        trackListFow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen,
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
}, {
    initialRouteName: 'resolveScreen'
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <LocationProvider>
            <AuthProvider>
                <App ref={(navigator) => setNavigator(navigator)} />
            </AuthProvider>
        </LocationProvider>
    )
}