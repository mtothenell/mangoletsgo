import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import * as React from "react";
import * as Api from "../api/Api";

export default function ButtonForInput({Text_, onPress}) {
    return (
        <>
            <View style={styles.button}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text>{Text_}</Text>
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
        width: 130,
        borderWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
