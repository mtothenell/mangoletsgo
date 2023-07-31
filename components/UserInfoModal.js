import { View, Modal, Text, StyleSheet } from 'react-native';
import ButtonForInput from "./ButtonForInput";
import * as React from "react";
import * as Api from "../api/Api";
import { useEffect, useState } from "react";

const UserInfoModal = ({ visible, closeModal, selectedMember }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        Api.getAUser(selectedMember).then(data => {
            setUserData(data);
        });
    }, [selectedMember]);

    if (!userData) {
        return null;
    }

    console.log(userData.mangoMember);

    return (
        <Modal visible={visible}>
            <View style={styles.container}>

                <View style={styles.row}>
                    {userData.mangoMember && <Text style={[styles.label, {color: '#a85756', marginBottom: 20}]}>Mangomedlem</Text>}
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Användare:</Text>
                    <Text style={styles.value}>{userData.email}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Förnamn:</Text>
                    <Text style={styles.value}>{userData.firstName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Efternamn:</Text>
                    <Text style={styles.value}>{userData.lastName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Alias:</Text>
                    <Text style={styles.value}>{userData.nickName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Favoritslag:</Text>
                    <Text style={styles.value}>{userData.favoriteShot}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Position:</Text>
                    <Text style={styles.value}>{''}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Rack:</Text>
                    <Text style={styles.value}>{''}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Hemmahall:</Text>
                    <Text style={styles.value}>{''}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Favoritspelare:</Text>
                    <Text style={styles.value}>{''}</Text>
                </View>

                <View style={{ marginTop: 100 }}>
                    <ButtonForInput onPress={closeModal} Text_={'Utmaningar'} />
                </View>

                <View style={{ marginTop: 18 }}>
                    <ButtonForInput onPress={closeModal} Text_={'Bli vän'} />
                </View>


                <View style={{ marginTop: 18 }}>
                    <ButtonForInput onPress={closeModal} Text_={'Stäng'} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B5C99A',
    },
    row: {
        flexDirection: 'row', // Display label and value side by side
        alignItems: 'center', // Center the items vertically within the row
        marginBottom: 10, // Add space between rows
        justifyContent: 'center',
    },
    label: {
        flex: 1.3,
        fontWeight: 'bold',
        marginRight: 0, // Add space between label and value
        paddingLeft: 20,
    },
    value: {
        flex: 3,
        textAlign: 'left',
    },
});

export default UserInfoModal;
