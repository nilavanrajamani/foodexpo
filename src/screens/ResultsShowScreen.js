import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState([])
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => { getResult(id); }, [])

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => { return photo; }}
                renderItem={({ item }) => { return <Image style={styles.image} source={{ uri: item }}></Image> }}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;