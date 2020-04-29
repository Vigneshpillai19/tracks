import React, { useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Input, Button, StyleSheet } from 'react-native-elements';
import Spacer from './spacer';

import {Context as LocationContext } from '../context/LocationContext';

import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);

    // console.log(locations.length);
    const [saveTrack] = useSaveTrack();

    return (
        <Spacer>
            {/* <KeyboardAvoidingView> */}
                    
                <Input onChangeText={changeName} value={name} placeholder="Enter Name" />
                <Spacer>
                    { recording ?
                        <Button
                            title="Stop"
                            onPress={stopRecording}
                        /> :
                        <Button
                            title="Start Recording"
                            onPress={startRecording}
                        />
                    }
                </Spacer>
                <Spacer>
                    {!recording && locations.length ? 
                        <Button title="Save Recording" onPress={saveTrack} /> : null
                    }
                </Spacer>
            {/* </KeyboardAvoidingView> */}
        </Spacer>
    );
}

// const styles = StyleSheet.create({});

export default TrackForm;