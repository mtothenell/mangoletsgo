import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MemberTable = ({member}) => {
    return (
        <View style={styles.table}>
            <View style={styles.tableRow}>
                <Text style={styles.headerCell}>Medlemsnr</Text>
                <Text style={styles.headerCell}>Förnamn</Text>
                <Text style={styles.headerCell}>Efternamn</Text>
            </View>
            {member.map((member, index) => (
                <View key={member.id} style={styles.tableRow}>
                    <Text style={styles.dataCell}>{index + 1}</Text>
                    <Text style={styles.dataCell}>{member.firstName}</Text>
                    <Text style={styles.dataCell}>{member.lastName}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: '#B5C99A'
    },
    tableRow: {
        flexDirection: 'row',
    },
    headerCell: {
        flex: 1,
        padding: 10,
        backgroundColor: '#485635',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    dataCell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
    },
});

export default MemberTable;

