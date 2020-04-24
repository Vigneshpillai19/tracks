import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/spacer';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={() => signout()}
                />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;