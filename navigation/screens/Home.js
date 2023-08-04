import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../../styles/globalStyles";
import ButtonForInput from "../../components/ButtonForInput";

export default function Home({navigation}) {

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const mangoM = 'https://mangox3.s3.eu-north-1.amazonaws.com/mlogosmall.png';

    useEffect(() => {
        AsyncStorage.getItem('email').then(data => {
            const email = JSON.parse(data);
            setEmail(email)
        })
        AsyncStorage.getItem('firstname').then(data2 => {
            const firstname = JSON.parse(data2);
            setFirstname(firstname)
        })
    }, []);

    return (
        <View style={[styles.container]}>
            <Text style={globalStyles.text}>Mango Mango Mango</Text>
            <Text style={globalStyles.text}>En community för padelälskare!</Text>
            <Text style={globalStyles.textSmall}>
                Vamos {firstname && true ? firstname + "!" : ""}
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
