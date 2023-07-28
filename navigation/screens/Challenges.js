import * as React from 'react';
import { View, Text } from 'react-native';
import globalStyles from "../../styles/globalStyles";

export default function Challenges({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Utmaningar</Text>
            <Text style={globalStyles.textSmall}> Mer info kommer! </Text>
        </View>
    );
}
