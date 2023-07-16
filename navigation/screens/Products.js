import * as React from 'react';
import { View, Text } from 'react-native';

export default function Products({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 20, fontWeight: 'bold' }}>Produkter</Text>
        </View>
    );
}