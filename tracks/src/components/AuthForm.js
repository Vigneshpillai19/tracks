import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './spacer';

const AuthForm = ({ headerText, submitButtonText, onSubmit, errorMsg }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMsg ? <Text style={styles.errmsg}>{errorMsg}</Text>: null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errmsg: {
        color: 'red',
        marginLeft: 15,
        fontSize: 16,
        marginTop: 15
    }
});

export default AuthForm;