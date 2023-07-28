import * as React from 'react';
import { View, Text } from 'react-native';

export default function Tournaments({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Vi planerar att hålla en ny americano i Augusti på WAP. Håll utkik!</Text>
        </View>
    );
}
