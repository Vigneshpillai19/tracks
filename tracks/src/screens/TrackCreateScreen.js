import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import Map from '../components/Map';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    
    const [err] = useLocation(isFocused, addLocation);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a Track Screen</Text>
            <Map />
            {err ? <Text>Please Enable Location Service</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);