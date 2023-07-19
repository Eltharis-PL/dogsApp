import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

const SearchBar = () => {
    return (
        <View style={searchBarStyles.mainBarContainer}>
            <TextInput
                style={searchBarStyles.textInputContainer}
                placeholder="Write dog breed name..."
            />
            <TouchableOpacity>
                <View style={searchBarStyles.buttonContainer}>
                    <Ionicons
                        name="ios-arrow-forward"
                        size={28}
                        color="white"
                    />
                </View>
            </TouchableOpacity>
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
});