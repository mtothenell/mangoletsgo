import * as React from 'react';
import {View, Text} from 'react-native';
import MemberTable from "../../components/MemberTable";
import {useEffect, useState} from "react";
import * as Api from "../../api/Api";
import {useFocusEffect} from "@react-navigation/native";
import ChallengeModal from "../../components/ChallengeModal";
import UserInfoModal from "../../components/UserInfoModal";

export default function Members({navigation}) {

    const [member, setMembers] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState('');

    const openModal = (member) => {
        setSelectedMember(member)
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const fetchMembers = () => {
        Api.getUsers()
            .then(data => {
                setMembers(data);
            })
    }

    React.useEffect(() => {
        fetchMembers();
    }, []);

    useFocusEffect(React.useCallback(() => {
        fetchMembers();
    }, []));

    return (
        <View style={{flex: 1, backgroundColor: '#FFF9C9'}}>
            <View style={{marginTop: 30}}>
                <MemberTable member={member} openModal={openModal}/>
            </View>

            <Text>
                Klicka på en persons alias för mer info!
            </Text>

            <UserInfoModal
                visible={isModalVisible}
                closeModal={closeModal}
                selectedMember={selectedMember}
            ></UserInfoModal>

        </View>
    );
}




