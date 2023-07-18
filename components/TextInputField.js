import {StyleSheet, Text, TextInput, View} from "react-native";
import * as React from "react";

export default function TextInputField( {placeholder, textInput, bgColor}) {
    return (
        <>
            <View>
                <Text style={styles.text}>{textInput}</Text>
                <TextInput cursorColor="grey"
                           style={[styles.textInput, {textAlign: 'left', backgroundColor: bgColor}]}
                           placeholder={placeholder}></TextInput>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        width: 200,
        textAlign: 'center',
        shadowColor: 'grey', // Custom shadow color
        shadowOpacity: 0.7, // Custom shadow opacity
        shadowRadius: 8, // Custom shadow radius
        elevation: 10, // For Android elevation
        borderRadius: 7,
        paddingLeft: 7
    }
});
