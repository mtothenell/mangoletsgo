import * as React from 'react';
import { View, Text } from 'react-native';
import MemberTable from "../../components/MemberTable";
import {useEffect, useState} from "react";
import * as Api from "../../api/Api";
import {useFocusEffect} from "@react-navigation/native";

export default function Members({ navigation}) {

    const [member, setMembers] = useState([]);

    const fetchMembers = () => {
        Api.getUsers()
            .then(data => {
                setMembers(data);
            })
    }

    // Fetch data on initial screen load
    React.useEffect(() => {
        fetchMembers();
    }, []);

    // Fetch data every time the screen becomes focused
    useFocusEffect(React.useCallback(() => {
        fetchMembers();
    }, []));


    return (
        <View style={{flex: 1, backgroundColor: '#FFF9C9' }}>
            <MemberTable member={member}/>
            <Text>Alla kan bli medlemmar men för att bli en riktig Mango krävs köp av en mangotröja.</Text>
        </View>
    );
}




