import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

import Map from '../components/Map';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    // console.log('Outside: ',state.recording);
    
    const callback = useCallback((location) => {
        // console.log('Inside: ', state.recording);
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a Track Screen</Text>
            <Map />
            {err ? <Text>Please Enable Location Service</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Add Track',
        tabBarIcon: <FontAwesome name="plus" size={20} />
    }
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);