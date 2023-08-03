import {Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function createUser(email, password, firstname, lastname, mangocode, handleLogin) {

    try {

        if (email !== '' && firstname !== '' && lastname !== '' && password !== '') {

            let bool = false;
            if (mangocode === '1337') {
                bool = true;
            }

            const response = await fetch('https://thsis456-2db1b1542ba9.herokuapp.com/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': email,
                    'mangoMember': bool,
                    'password': password,
                    'firstName': firstname,
                    'lastName': lastname
                })
            });

            const json = await response.json();
            await AsyncStorage.setItem('email', JSON.stringify(json.email));

            handleLogin();
            return json;
        } else {
            return Alert.alert("Du måste fylla i alla fält!")
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}


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
            Alert.alert('Fel email eller lösenord!');
        } else {
            await AsyncStorage.setItem('email', JSON.stringify(json.email));
            await AsyncStorage.setItem('firstname', JSON.stringify(json.firstName));
            await AsyncStorage.setItem('lastname', JSON.stringify(json.lastName));
            handleLogin();
        }
        return json;

    } catch (error) {
        console.log('Error: ', error)
    }
}



