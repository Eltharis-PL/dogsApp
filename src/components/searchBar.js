import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View, StyleSheet, ActivityIndicator, Image, Text } from "react-native";
import axios from "axios";

const SearchBar = () => {

    const [breedName, setBreedName] = useState("");
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setError("");
        setDogImage(null);
        setLoading(true);

        try {
            const response = await axios.get(
                `https://dog.ceo/api/breed/${breedName}/images/random`
            );

            const data = response.data;

            if (data.status === "success") {
                setDogImage(data.message);
            } else {
                setError("Breed not found. Please enter a valid dog breed name.");
            }
        } catch (error) {
            setError("Error fetching the data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <View style={searchBarStyles.mainBarContainer}>
                <TextInput
                    style={searchBarStyles.textInputContainer}
                    placeholder="Write dog breed name..."
                    onChangeText={(text) => setBreedName(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <View style={searchBarStyles.buttonContainer}>
                        <Ionicons name="ios-arrow-forward" size={28} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
            {loading && <ActivityIndicator style={searchBarStyles.loader} />}
            {error !== "" && <Text style={searchBarStyles.errorText}>{error}</Text>}
            {dogImage && <Image source={{ uri: dogImage }} style={searchBarStyles.image} />}
        </View>
    );
};

export default SearchBar;

const searchBarStyles = StyleSheet.create({
    mainBarContainer: {
        flexDirection: 'row',
        marginTop: 60,
    },
    textInputContainer: {
        backgroundColor: '#ccc',
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        width: 265,
        height: 40,
    },
    buttonContainer: {
        backgroundColor: '#EAB2A0',
        height: 40,
        width: 50,
        marginLeft: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        marginLeft: 10,
        marginTop: 100,
    },
    errorText: {
        color: "red",
        marginLeft: 40,
        marginTop: 100,
    },
    image: {
        width: 320,
        height: 300,
        marginTop: 10,
    },
});