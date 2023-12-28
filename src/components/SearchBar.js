import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}></Feather>
            <TextInput autoCapitalize="none" autoCorrect={false} style={styles.inputStyle} placeholder="Search"
                value={term} onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={submitTerm => onTermSubmit(submitTerm)}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }
});

export default SearchBar;

