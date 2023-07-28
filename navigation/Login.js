import * as React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import TextInputField from "../components/TextInputField";
import ButtonForInput from "../components/ButtonForInput";
import MyModal from "../components/myModal";

import * as Api from "../api/Api";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../styles/globalStyles";

const Login = ({onLogin}) => {

    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const maxWidth = 750;
    const [checkfields, setCheckFields] = useState(false);

    const mangoLogo = 'https://mangox3.s3.eu-north-1.amazonaws.com/mlogosmall.png';

    useEffect(() => {
        // Event listener to update screen width on orientation change
        const updateScreenWidth = () => {
            setScreenWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', updateScreenWidth);

        return () => {
            Dimensions.removeEventListener('change', updateScreenWidth);
        };
    }, []);

    useEffect(() => {
        AsyncStorage.clear().then(r => (r));
    }, [])

    const handleApiLogin = () => {

        if (email === '' || password === '') {
            setCheckFields(true);
        }

        Api.login(onLogin, email, password).then(r => (r))
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    return (
        <>
            <View style={styles.container}>
                {screenWidth < maxWidth ? (<>

                        <View style={{marginBottom: 10}}>
                        <Image style={styles.logo} source={{uri: mangoLogo}}></Image>

                        <TextInputField inputText={email} setInputText={setEmail} placeholder={''}
                                        textInput={'Email'} bgColor={'#FFFFFF'}/>
                        <TextInputField inputText={password} setInputText={setPassword} placeholder={''}
                                        textInput={'Lösenord'}
                                        bgColor={'#FFFFFF'}/>
                        </View>

                        <View style={globalStyles.textSmall}>
                            <Text>{checkfields && "Du måste fylla i alla fält!"}</Text>
                        </View>

                        <View style={{marginTop: 15}}>
                            <ButtonForInput onPress={handleApiLogin} Text_={'Logga in'}/>
                        </View>

                        <View style={{marginTop: 15}}>
                            <ButtonForInput onPress={openModal} Text_={'Skapa konto'}/>
                        </View>

                        {/*<View style={{marginTop: 18}}>*/}
                        {/*    <ButtonForInput onPress={onLogin} Text_={'Gäst'}/>*/}
                        {/*</View>*/}
                    </>
                ) : (
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Mangopadel.se är endast
                        tillgänglig för mobilanvändare!</Text>
                )}

            </View>

            <MyModal visible={isModalVisible} closeModal={closeModal} onLogin={onLogin}></MyModal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B5C99A',
    },
    item: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        margin: 10,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    }
});

export default Login;
