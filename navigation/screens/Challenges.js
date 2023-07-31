import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalStyles from "../../styles/globalStyles";
import {useState} from "react";
import ChallengeModal from "../../components/ChallengeModal";
import ButtonForInput from "../../components/ButtonForInput";

export default function Challenges({navigation}) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [challenge, setChallenge] = useState('');
    const [challengeInfo, setChallengeInfo] = useState('');

    const openModal = (challenge, challengeInfo) => {
        setModalVisible(true);
        setChallenge(challenge);
        setChallengeInfo(challengeInfo);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF9C9'}}>

                <Text style={globalStyles.text}>Utmaningar</Text>
                <Text style={[globalStyles.textSmallB, {textAlign: 'center'}]}>Alla utmaningar ska göras under en vanlig
                    match/träningsmatch, dvs under 2 eller 3 set.</Text>

                <View style={styles.challenge}>
                    <Text
                        onPress={() => openModal('Stoppboll', 'Utmaningen går ut på att göra stoppbollar. För att det ska räknas som en korrekt stoppboll så får inte motståndarna rädda stoppbollen. Ju fler stoppbollar du gör, ju högre ranking får du.')}
                        style={globalStyles.textSmall}>Stoppboll</Text>
                    <Text onPress={() => openModal('Smash')} style={globalStyles.textSmall}>Smash</Text>
                    <Text onPress={() => openModal('Knack')} style={globalStyles.textSmall}>Knack</Text>
                </View>

                <View style={{marginTop: 18}}>
                    <ButtonForInput onPress={closeModal} Text_={'Mina utmaningar'}/>
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
    }
});
