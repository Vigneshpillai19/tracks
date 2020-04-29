import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';

import { navigate } from '../navigationRef';

const authReducer = (state, actions) => {
    switch(actions.type){
        case 'remove_error':
            return {...state, errorMsg: ''};
        case 'add_error':
            return {...state, errorMsg: actions.payload};
        case 'signup':
            // console.log('signup Error');
            return {errorMsg: '', token: actions.payload};
        case 'signin':
            return {errorMsg: '', token: actions.payload};
        case 'signout':
            return {token: ''};
        default:
            return state;
    }
};

const remove_error = (dispatch) => {
    return () => {
        dispatch({ type: 'remove_error' });
    }
}

const autoSignin = (dispatch) => {
    return () => {
        const token = AsyncStorage.getItem('token');
        if (token){
            dispatch({ type:'signin', payload: token });
            navigate('TrackList');
        }else{
            navigate('loginFlow');
        }
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try{
            const response = await trackerApi.post('/signin', { email, password });
            const token = response.data.token;
            
            await AsyncStorage.setItem('token', token);
            dispatch({ type: 'signin', payload: token });
            
            // console.log('Navigate Start');
            navigate('TrackList');
            // console.log('Navigate End');
        }catch(err){
            console.log(err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with SignIn' });
        }
    };
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            // console.log({email, password});
            const response = await trackerApi.post('/signup', { email, password });
            // console.log('request end');
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'singup', payload: response.data.token });
            
            // console.log('navigate start');
            navigate('TrackList');
            // console.log('navigate end');
            
        } catch(err){
            console.log(err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with SignUp' });
        }
    };
};

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type:'signout' });
        navigate('loginFlow');
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, remove_error, autoSignin },
    { isSignedIn: false }
);