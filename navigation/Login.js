import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import TextInputField from "../components/TextInputField";
import ButtonForInput from "../components/ButtonForInput";

export default function Login() {

    const mangoLogo = 'https://mangox3.s3.eu-north-1.amazonaws.com/mlogosmall.png';

    return (
        <>
            <View style={styles.container}>

                <Image style={styles.logo} source={ {uri: mangoLogo} }></Image>

                <TextInputField placeholder={''} textInput={'Användarnamn'} bgColor={'#FFFFFF'}/>
                <TextInputField placeholder={''} textInput={'Lösenord'} bgColor={'#FFFFFF'}/>

                <View style={{marginTop: 20}}>
                    <ButtonForInput/>
                </View>

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
        width: '40%',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
