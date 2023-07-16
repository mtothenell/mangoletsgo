import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>Mango Mango Mango</Text>
            <Text style={styles.text}>En community för padelälskare!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF9C9',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    },
});
