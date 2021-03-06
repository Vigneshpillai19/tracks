import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);

    const track = state.find(t => t._id === id );
    const initialcoords = track.locations[0].coords;
    
    return (
        <View>
            <Text style={{fontSize: 48}}>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion = {{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialcoords
                }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;