import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './spacer';

import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, navText, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>{navText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);