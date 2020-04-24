import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const { state, signin, remove_error } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                // onWillBlur={() => remove_error()} Will work
                onWillBlur = {remove_error}
                // onWillBlur = {() => remove_error} won't work
            />
            <AuthForm 
                headerText="Sign In to Your Account"
                submitButtonText="Sign In"
                onSubmit={({email, password}) => signin({ email, password })}
                errorMsg={state.errorMsg}
            />
            <NavLink
                navText="Not Registered? Sign Up"
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    }
});

export default SigninScreen;