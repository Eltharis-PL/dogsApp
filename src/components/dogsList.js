import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Button } from "react-native";
import axios from "axios";

const DogsList = () => {

    const [dogBreeds, setDogBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(null);
    const [dogImage, setDogImage] = useState(null);

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

    const handleBreedSelection = async (breed) => {
        setSelectedBreed(breed);
        try {
            const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
            setDogImage(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    const rendemListItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleBreedSelection(item)}>
                <View style={listStyles.listItem}>
                    <Text style={listStyles.text}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const handleGoBack = () => {
        setSelectedBreed(null);
        setDogImage(null);
    };

    return (
        <View style={listStyles.dogsListContainer}>
            {selectedBreed ? (
                <View>
                    <Button title="Back" onPress={handleGoBack} />
                    <View style={listStyles.dogImageContainer}>
                        <Image source={{ uri: dogImage }} style={listStyles.dogImage} />
                    </View>
                </View>
            ) : (
                <FlatList
                    data={dogBreeds}
                    renderItem={rendemListItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ gap: 15 }}
                />
            )}
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
    dogImageContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    dogImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
});