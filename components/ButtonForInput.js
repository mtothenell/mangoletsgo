import {Button, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import * as React from "react";

export default function ButtonForInput() {
    return (
        <>
            <View style={styles.button}>
                <TouchableOpacity style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 10,
        width: 120,
        borderWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
