import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const BasicButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={buttonStyle.buttonContainer}>
                <Text style={buttonStyle.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default BasicButton;

const buttonStyle = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#A76F6F",
        padding: 10,
        borderRadius: 5,
        width: 75,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
});