import {View, Modal, Text, StyleSheet, Alert} from 'react-native';
import ButtonForInput from "./ButtonForInput";
import * as React from "react";
import TextInputField from "./TextInputField";
import globalStyles from "../styles/globalStyles";
import {useState} from "react";
import * as Api from "../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyModal = ({visible, closeModal, onLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [mangocode, setMangocode] = useState('');

    const createUser = () => {
        Api.createUser(email, password, firstname, lastname, mangocode, onLogin).then(r => (r))
    }

    return (
        <>
            <Modal visible={visible}>
                <View style={styles.container}>

                    <Text style={[globalStyles.text, {marginBottom: 30}]}>Skapa ett konto</Text>
                    <TextInputField inputText={email} setInputText={setEmail} placeholder={'Skriv din emailadress'}
                                    textInput={'Email'} bgColor={'#FFFFFF'}/>

                    <TextInputField inputText={firstname} setInputText={setFirstName} placeholder={'Skriv ditt förnamn'}
                                    textInput={'Förnamn'} bgColor={'#FFFFFF'}/>

                    <TextInputField inputText={lastname} setInputText={setLastname} placeholder={'Skriv ditt efternamn'}
                                    textInput={'Efternamn'} bgColor={'#FFFFFF'}/>

                    <TextInputField inputText={mangocode} setInputText={setMangocode} placeholder={'Skriv din mangokod'}
                                    textInput={'Mangokod'}
                                    bgColor={'#FFFFFF'}/>

                    <TextInputField inputText={password} setInputText={setPassword} placeholder={'Välj ett lösenord'}
                                    textInput={'Lösenord'}
                                    bgColor={'#FFFFFF'}/>

                    <View style={{marginTop: 15}}>
                        <View style={{marginTop: 18}}>
                            <ButtonForInput onPress={createUser} Text_={'Skapa konto'}/>
                        </View>
                        <View style={{marginTop: 18}}>
                            <ButtonForInput onPress={closeModal} Text_={'Stäng'}/>
                        </View>

                    </View>
                </View>
            </Modal>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B5C99A',
    }
})

export default MyModal;


