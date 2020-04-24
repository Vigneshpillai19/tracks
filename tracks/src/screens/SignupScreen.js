import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    
    const { state, signup, remove_error } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={() => remove_error()}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                submitButtonText="Sign Up"
                onSubmit={({email, password}) => signup({ email, password })}
                errorMsg={state.errorMsg}
            />
            <NavLink
                navText="Already have an account? Sign in instead"
                routeName="Signin"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false      
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    }
});

export default SignupScreen;