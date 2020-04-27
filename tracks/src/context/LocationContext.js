import createDataContext from './createDataContext';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const locationReducer = (state, actions) => {
    switch (actions.type){
        case 'add_current_location':
            return { ...state, currentlocation: actions.payload };
        default:
            return state;
    }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => (location) => {
    console.log('Tracking');
    dispatch({ type: 'add_current_location', payload: location });
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentlocation: null }
);