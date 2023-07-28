import {StyleSheet, Text, TextInput, View} from "react-native";
import * as React from "react";
import {useState} from "react";

export default function TextInputField({placeholder, textInput, bgColor, inputText, setInputText, isEditable}) {

    const handleInputChange = (text) => {
        setInputText(text);
    }

    return (
        <>
            <View>
                <Text style={styles.text}>{textInput}</Text>
                <TextInput cursorColor="grey" value={inputText} onChangeText={handleInputChange}
                           style={[styles.textInput, {textAlign: 'left', backgroundColor: bgColor}]}
                           placeholder={placeholder} editable={isEditable}></TextInput>
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
