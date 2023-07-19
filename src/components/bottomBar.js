import React from "react";
import { StyleSheet, View } from "react-native";
import BasicButton from "./basicButton";

const BottomBar = () => {

    const tapButton = () => {
        console.log("Pressing button");
    };

    return (
        <View style={bottomBarStyles.bottomBarContainer}>
            <BasicButton
                text="List"
                onPress={tapButton}
            />
            <BasicButton
                text="Search"
                onPress={tapButton}
            />
        </View>
    )
};

export default BottomBar;

const bottomBarStyles = StyleSheet.create({
    bottomBarContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#435B66',
        paddingLeft: '20%',
        paddingRight: '20%',
    },
});