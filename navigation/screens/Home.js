import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../../styles/globalStyles";

export default function Home({navigation}) {

    const [storedUserData, setStoredUserData] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('email').then(data => {
            const email = JSON.parse(data);
            setStoredUserData(email)
        })
    }, []);

    return (
        <View style={[styles.container]}>
            <Text style={globalStyles.text}>Mango Mango Mango</Text>
            <Text style={globalStyles.text}>En community för padelälskare!</Text>
            <Text style={globalStyles.textSmall}>
                Vamos! {storedUserData && true ? storedUserData : ""}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF9C9',
    }
});
