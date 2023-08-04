import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import TextInputField from "../../components/TextInputField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import * as Api from "../../api/Api";
import ButtonForInput from "../../components/ButtonForInput";
import {useFocusEffect} from "@react-navigation/native";

export default function Settings({navigation, handleLogout}) {

    const [storedUserData, setStoredUserData] = useState('');
    const [nickname, setNickname] = useState('');
    const [favoriteShot, setFavoriteShot] = useState('');
    const [password, setPassword] = useState('');

    const fetchStoredUserData = async () => {
        try {
            AsyncStorage.getItem('email').then(data => {
                const email = JSON.parse(data);
                setStoredUserData(email);

                Api.getAUser(email).then(data => {
                    setStoredUserData(data);
                    setNickname(data.nickname);
                    setFavoriteShot(data.favoriteShot);
                    setPassword(data.password);
                })
            })
        } catch
            (error) {
            console.log('Error fetching data from AsyncStorage:', error);
        }
    }

    const updateSettings = () => {
        Api.updateUser(storedUserData.email, nickname, favoriteShot, password).then(r => (r))
    };

    useFocusEffect(React.useCallback(() => {
        fetchStoredUserData().then(r => (r));
    }, []));

    const funcHandleLogout = async () => {

        try {
            await AsyncStorage.clear();
            handleLogout();
        } catch (error) {
            console.log("Error while logging out:", error);
        }
    }


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 50}}>Ändra dina
                inställningar</Text>

            <TextInputField placeholder={storedUserData.email} textInput={'Email'} bgColor={'rgba(73,75,73,0.8)'} isEditable={false}/>

            <TextInputField placeholder={storedUserData.firstName} textInput={'Förnamn'} bgColor={'rgba(73,75,73,0.8)'} isEditable={false}/>

            <TextInputField placeholder={storedUserData.lastName} textInput={'Efternamn'} bgColor={'rgba(73,75,73,0.8)'} isEditable={false}/>

            <TextInputField inputText={nickname} setInputText={setNickname} placeholder={storedUserData.nickName}
                            textInput={'Alias'} bgColor={'#B5C99A'} isEditable={true}/>

            <TextInputField inputText={favoriteShot} setInputText={setFavoriteShot} placeholder={storedUserData.favoriteShot}
                            textInput={'Favoritslag'} bgColor={'#B5C99A'} isEditable={true}/>

            <TextInputField inputText={password} setInputText={setPassword} placeholder={storedUserData.password}
                            textInput={'Lösenord'} bgColor={'#B5C99A'} isEditable={true}/>

            <View style={{marginTop: 30}}>
                <ButtonForInput onPress={updateSettings} Text_={'Spara ändringar'}/>
            </View>

            <View style={{marginTop: 20}}>
                <ButtonForInput onPress={funcHandleLogout} Text_={'Logga ut'}/>
            </View>
        </View>
    );
}
