import {Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUsers() {
    try {
        const response = await fetch('https://thsis456-2db1b1542ba9.herokuapp.com/api/getUserList');
        return await response.json();

    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function getAUser(email) {
    try {
        const endPoint = 'https://thsis456-2db1b1542ba9.herokuapp.com/api/getUser/' + email
        const response = await fetch(endPoint);
        return await response.json();

    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function updateUser(email, nickname, favoriteShot, password) {
    try {
        const endPoint = 'https://thsis456-2db1b1542ba9.herokuapp.com/api/updateUser/' + email
        const response = await fetch(endPoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {'nickName': nickname, 'favoriteShot': favoriteShot, 'password': password})
        });

        return await response.json();

    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function login(handleLogin, email, password) {
    try {
        const response = await fetch('https://thsis456-2db1b1542ba9.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'email': email, 'password': password})
        });
        const json = await response.json();

        if (json.status === 500) {
            Alert.alert('Fel användarnamn eller lösenord!');
        } else {
            await AsyncStorage.setItem('email', JSON.stringify(json.email)); // Convert to JSON string before saving
            handleLogin();
        }
        return json;

    } catch (error) {
        console.log('Error: ', error)
    }
}



