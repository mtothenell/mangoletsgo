import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({navigation}) {

    const [firstName, setFirstName] = useState('pp')

    useEffect(() => {
        AsyncStorage.getItem('firstName')
            .then((firstName) => {
                setFirstName(firstName);
                console.log(firstName);
            })
            .catch((error) => {
                console.log('Error retrieving firstname:', error);
            });
    }, []);

    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>Mango Mango Mango</Text>
            <Text style={styles.text}>En community för padelälskare!</Text>
            <Text>Hej {firstName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF9C9',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    },
});
