import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import TextInputField from "../../components/TextInputField";

export default function Settings({navigation}) {
    return (

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Ändra dina inställningar</Text>

            <TextInputField placeholder={'Ändra ditt förnamn..'} textInput={'Förnamn'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={'Ändra ditt efternamn..' } textInput={'Efternamn'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={'Ändra ditt alias..' } textInput={'Alias'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={'Ändra ditt favoritslag..' } textInput={'Favoritslag'} bgColor={'#B5C99A'}/>
            <TextInputField placeholder={'Ändra din hemmahall..' } textInput={'Hemmahall'} bgColor={'#B5C99A'}/>

        </View>
    );
}
