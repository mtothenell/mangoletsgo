import * as React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import ButtonForInput from "../../components/ButtonForInput";

export default function Tournaments({navigation}) {

    const Link = () => {
        const url = 'https://docs.google.com/spreadsheets/d/19gYGL1ZOu7YNfFzKW1OBG4pbN2o5uzcbCuwHbyaR7KA/edit?usp=sharing'
        Linking.openURL(url).then(r => (r))
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Nästa mangoricano kommer att hållas
                fredagen den 1:e September 17-19 på WAP Tornby!</Text>

            <View style={{marginTop: 30}}>
                <ButtonForInput onPress={Link} Text_={'Till anmälan'}/>
            </View>
        </View>
    );
}
