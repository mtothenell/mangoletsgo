import * as React from 'react';
import { View, Text } from 'react-native';
import MemberTable from "../../components/MemberTable";
import {useEffect, useState} from "react";
import * as Api from "../../api/Api";

export default function Members({ navigation}) {

    const [member, setMembers] = useState([]);

    useEffect(() => {
        Api.getUsers()
            .then(data => {
                setMembers(data);
            })
    }, [])
    return (
        <View style={{flex: 1, backgroundColor: '#FFF9C9' }}>
            <MemberTable member={member}/>
            <Text></Text>
        </View>
    );
}




