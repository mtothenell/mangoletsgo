import * as React from 'react';
import { View, Text } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center', alignSelf: 'center'}}>Mango Mango Mango </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center', textAlign: 'center'}}>En community för padelälskare!</Text>
        </View>
    );
}
