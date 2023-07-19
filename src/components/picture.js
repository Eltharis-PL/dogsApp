import react from "react";
import { View, StyleSheet, Text } from "react-native";

const Picture = () => {
    return (
        <View style={pictureStyles.pictureContainer}>
            <Text>Picture</Text>
        </View>
    );
};

export default Picture;

const pictureStyles = StyleSheet.create({
    pictureContainer: {
        backgroundColor: '#ccc',
        marginTop: 110,
        width: 320,
        height: 200,
    },
});