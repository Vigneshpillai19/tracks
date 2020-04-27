import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{fontSize: 48}}>TrackListScreen</Text>
            <Button
                title="Go to Track Detail Screen"
                onPress={() => {
                    navigation.navigate('TrackDetail');
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;