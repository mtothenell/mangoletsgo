import {View, Modal, Text, StyleSheet, Image} from 'react-native';
import ButtonForInput from "./ButtonForInput";
import * as React from "react";
import mango1 from "../assets/mango1.png"
import mango2 from "../assets/mango2.png"
import mango3 from "../assets/mango3.png"


import globalStyles from "../styles/globalStyles";

const ChallengeModal = ({visible, closeModal, challenge, challengeInfo}) => {

    return (
        <Modal visible={visible}>
            <View style={styles.container}>

                <View>
                    <Text style={globalStyles.text}>Utmaning: {challenge}</Text>
                    <Text style={[globalStyles.textSmallB, {textAlign: 'center'}]}>{challengeInfo}</Text>
                </View>

                <View style={{marginTop: 40}}>
                    <View style={styles.levels}>
                        <Image style={styles.mango} source={mango1}></Image>
                        <Text style={{marginLeft: -50}}>Klara minst 3.</Text>
                    </View>

                    <View style={styles.levels}>
                        <Image style={styles.mango} source={mango2}></Image>
                        <Text style={{marginLeft: -50}}>Klara minst 5.</Text>
                    </View>


                    <View style={styles.levels}>
                        <Image style={styles.mango} source={mango3}></Image>
                        <Text style={{marginLeft: -50}}>Klara minst 10.</Text>

                    </View>
                </View>

                <View style={{marginTop: 40, alignSelf: 'center'}}>

                    <View style={{marginTop: 18}}>
                        <ButtonForInput onPress={closeModal} Text_={'Anta utmaning'}/>
                    </View>

                    <View style={{marginTop: 18}}>
                        <ButtonForInput onPress={closeModal} Text_={'Stäng'}/>
                    </View>
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
        alignItems: 'flex-start',
        backgroundColor: '#B5C99A',
    },
    mango: {
        height: 50,
        resizeMode: 'contain'
    },
    levels: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    }
});

export default ChallengeModal;
