import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";

const DogsList = () => {

    const [dogBreeds, setDogBreeds] = useState([]);

    useEffect(() => {
        fetchDogBreeds();
    }, []);

    const fetchDogBreeds = async () => {
        try {
            const response = await axios.get("https://dog.ceo/api/breeds/list/all");
            const breeds = Object.keys(response.data.message);
            setDogBreeds(breeds);
        } catch (error) {
            console.error(error);
        }
    };

    const rendemListItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={listStyles.listItem}>
                    <Text style={listStyles.text}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={listStyles.dogsListContainer}>
            <FlatList
                data={dogBreeds}
                renderItem={rendemListItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ gap: 15 }}
            />
        </View>
    );
};

export default DogsList;

const listStyles = StyleSheet.create({
    dogsListContainer: {
        padding: 20,
        height: 300,
    },
    listItem: {
        backgroundColor: '#435B66',
        height: 40,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#EAB2A0',
    },
});