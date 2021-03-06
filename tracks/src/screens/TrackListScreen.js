import React, { useContext } from 'react';
import { Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
// import ButtonSpacer from '../components/ButtonSpacer';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            {/* <Text style={{fontSize: 48}}>TrackListScreen</Text> */}
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data = {state}
                keyExtractor = {item => item._id}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks',
    headerTitleAlign: 'center',
}

const styles = StyleSheet.create({});

export default TrackListScreen;