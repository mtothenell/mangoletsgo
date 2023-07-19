import {Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUsers() {
    try {
        const response = await fetch('https://thsis456-2db1b1542ba9.herokuapp.com/api/getUserList');
        const json = await response.json();
        return json;

    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function login(handleLogin, username, password) {
    try {
        const response = await fetch('https://thsis456-2db1b1542ba9.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'firstName': username, 'password': password})
        });
        const json = await response.json();

        if (json.status === 500) {
            Alert.alert('Fel användarnamn eller lösenord!');
        } else {
            await AsyncStorage.setItem('firstName', json.firstName);
            handleLogin();
        }
        return json;

    } catch (error) {
        console.log('Error: ', error)
    }
}



