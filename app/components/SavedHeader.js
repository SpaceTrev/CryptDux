//imports react obviously
import React from 'react';

// imports the view, text and stylesheet to be used in the JSX
import { View, Text, StyleSheet } from 'react-native';

// creates a reacte component that returns JSX and applies a style to it
const SavedHeader = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Saved
            </Text>
        </View>
    )
}
//declaration of the styles that will be used in the component
const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 47,
        alignItems: 'center',
        marginBottom: 47,
        backgroundColor: "black",
        justifyContent: "center",
        // height: 200,
        // width: 400,
        // textAlign: 'center'

    },
    header: {
        fontWeight: 'bold',
        fontSize: 33,
        color: "#0099CC",
    }
})
// making the headerContainer and header keys within the style object available to the react component
const { headerContainer, header } = styles;

//exports the component
export default SavedHeader;