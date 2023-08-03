import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import globalStyles from "../../styles/globalStyles";
import ChallengeModal from "../../components/ChallengeModal";
import DropDownPicker from "react-native-dropdown-picker";

export default function Challenges({navigation}) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [challenge, setChallenge] = useState('');
    const [challengeInfo, setChallengeInfo] = useState('');

    const openModal = (challenge, challengeInfo) => {

        setModalVisible(true);
        setChallenge(challenge);
        setChallengeInfo(challengeInfo);
    };

    const selectChallenge = (value) => {
        let selectedChallenge = null;

        if (value === 'Stoppboll') {
            selectedChallenge = 'Utmaningen går ut på att göra stoppbollar. För att det ska räknas som en korrekt stoppboll så får inte motståndarna rädda stoppbollen. Ju fler stoppbollar du gör, ju högre ranking får du.\n'
        } else if (value === 'Smash') {
            selectedChallenge = 'Utmaningen går ut på att smasha. För att det ska räknas så ska bollen antingen gå ut ur banan, eller slås tillbaka till din sida av nätet.'
        }
        return selectedChallenge;
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Stoppboll', value: 'Stoppboll'},
        {label: 'Smash', value: 'Smash'}
    ]);


    return (
        <>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9'}}>

                <Text style={globalStyles.text}>Utmaningar</Text>
                <Text style={[globalStyles.textSmallB, {textAlign: 'center'}]}>Alla utmaningar ska göras under en vanlig
                    match eller träningsmatch, dvs under 2 eller 3 set. Efter att en utmaning har har accepterats så kan du se utmaningen på din sida. När du klarat en utmaning kan du se resultatet (Antal mangos).</Text>

                {/*<View style={styles.challenge}>*/}
                {/*    <Text*/}
                {/*        onPress={() => openModal('Stoppboll', 'Utmaningen går ut på att göra stoppbollar. För att det ska räknas som en korrekt stoppboll så får inte motståndarna rädda stoppbollen. Ju fler stoppbollar du gör, ju högre ranking får du.')}*/}
                {/*        style={globalStyles.textSmall}>Stoppboll</Text>*/}
                {/*    <Text onPress={() => openModal('Smash')} style={globalStyles.textSmall}>Smash</Text>*/}
                {/*    <Text onPress={() => openModal('Knack')} style={globalStyles.textSmall}>Knack</Text>*/}
                {/*</View>*/}


                <View style={styles.dropdown}>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder='Välj en utmaning'
                        style={styles.dropdownStyle}
                        onChangeValue={(value) => {
                            openModal(value, selectChallenge(value))
                        }}>
                    </DropDownPicker>

                </View>

                <ChallengeModal
                    visible={isModalVisible}
                    closeModal={closeModal}
                    challenge={challenge}
                    challengeInfo={challengeInfo}
                ></ChallengeModal>

            </View>
        </>
    );
}

const styles = StyleSheet.create({

    challenge: {
        alignItems: 'center',
    },
    dropdown: {
        padding: 26,
    },
    dropdownStyle: {
        backgroundColor: '#a85756'
    }

});
