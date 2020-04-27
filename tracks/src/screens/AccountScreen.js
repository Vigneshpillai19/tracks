import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/spacer';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={() => signout()}
                />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;