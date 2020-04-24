import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return (
        <View style={styles.marginSpace}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    marginSpace: {
        margin:15
    }
});

export default Spacer;