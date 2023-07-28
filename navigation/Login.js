import * as React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import TextInputField from "../components/TextInputField";
import ButtonForInput from "../components/ButtonForInput";
import * as Api from "../api/Api";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({onLogin}) => {

    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const maxWidth = 500;

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
        Api.login(onLogin, "test", "test").then(r => (r))
    };

    return (
        <>
            <View style={styles.container}>

                {screenWidth > maxWidth ? (<>

                        <Image style={styles.logo} source={{uri: mangoLogo}}></Image>
                    </>
                ) : (
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Mangopadel.se är endast
                        tillgänglig för mobilanvändare!</Text>
                )}

            </View>
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
        marginBottom: 55,
    }
});

export default Login;
