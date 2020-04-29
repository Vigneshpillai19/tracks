import createDataContext from './createDataContext';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

const locationReducer = (state, actions) => {
    switch (actions.type){
        case 'add_current_location':
            return { ...state, currentlocation: actions.payload };
        case 'start_recording':
            // console.log(state.locations.length);
            return { ...state, recording: true, locations: [] };
        case 'stop_recording':
            // console.log(state.locations.length);
            return { ...state, recording: false };
        case 'add_location':
            return { ...state, locations: [...state.locations, actions.payload] }
        case 'change_name':
            return { ...state, name: actions.payload };
        case 'reset':
            return { ...state, name: '', locations: [] };
        default:
            return state;
    }
};

const changeName = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name });
};
const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording' });
};
const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording' });
};
const reset = dispatch => () => {
    dispatch({ type: 'reset' });
}
const addLocation = dispatch => (location, recording) => {
    // console.log('Tracking');
    dispatch({ type: 'add_current_location', payload: location });
    // console.log(recording);
    if (recording){
        dispatch({ type: 'add_location', payload: location });
    }
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName, reset },
    { name: '', recording: false, locations: [], currentlocation: null }
);