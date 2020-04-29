import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ButtonSpacer = ({ children }) => {
    return (
        <View style={styles.marginSpace}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    marginSpace: {
        marginHorizontal: 80,
        marginTop: 20
    }
});

export default ButtonSpacer;