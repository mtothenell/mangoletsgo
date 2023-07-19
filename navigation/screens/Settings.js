import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import TextInputField from "../../components/TextInputField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

export default function Settings({navigation}) {

    const [storedFirstName, setStoredFirstName] = useState('');
    const [storedLastName, setStoredLastName] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('firstName').then((value) => {
            setStoredFirstName(value);

        })
        AsyncStorage.getItem('lastName').then((value) => {
            setStoredLastName(value);

        }).catch((error) => {
            console.error('Error reading data from AsyncStorage', error);
        })

    }, []);

    return (


        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Ändra dina inställningar</Text>


            <TextInputField placeholder={storedFirstName} textInput={'Förnamn'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={storedLastName} textInput={'Efternamn'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={'Ändra ditt alias..'} textInput={'Alias'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={'Ändra ditt favoritslag..'} textInput={'Favoritslag'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={'Ändra din hemmahall..'} textInput={'Hemmahall'} bgColor={'#B5C99A'}/>

        </View>
    );
}
