import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MemberTable = ({member}) => {
    return (
        <View style={styles.table}>
            <View style={styles.tableRow}>
                <Text style={styles.headerCell}>Förnamn</Text>
                <Text style={styles.headerCell}>Efternamn</Text>
                <Text style={styles.headerCell}>Favoritslag</Text>
            </View>
            {member.map((member, index) => (
                <View key={member.id} style={styles.tableRow}>
                    <Text style={[styles.dataCell]}>{member.firstName}</Text>
                    <Text style={styles.dataCell}>{member.lastName}</Text>
                    <Text style={styles.dataCell}>{member.favoriteShot}</Text>
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
        marginVertical: -2
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
    }
});

export default MemberTable;

