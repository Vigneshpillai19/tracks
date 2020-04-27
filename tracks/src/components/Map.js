import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentlocation } } = useContext(LocationContext);

    if(!currentlocation){
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentlocation.coords,
                longitudeDelta:0.01,
                latitudeDelta:0.01
            }}
            region={{
                ...currentlocation.coords,
                longitudeDelta:0.01,
                latitudeDelta:0.01
            }}
        >
            <Circle
                center={currentlocation.coords}
                radius={30}
                strokeColor="rgba(158, 158, 255, 1.0)"
                fillColor="rgba(158, 158, 255, 0.3)"
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;