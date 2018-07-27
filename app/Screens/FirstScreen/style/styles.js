import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';


const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    topContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingBottom: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },

    image: {
        height: 100,
        width: 100,
        backgroundColor: "grey",
        marginBottom: 8,
        resizeMode
    },

    title: {
        fontSize: normalize(21) + 2,
        lineHeight: normalize(21) + 4,
        color: "white",
        letterSpacing: 1
    },

    subText: {
        color: "#414141",
        fontSize: normalize(21),
        lineHeight: normalize(21) + 10,
        marginVertical: 16
    },


    bottomContainer: {
        backgroundColor: "black",
        paddingVertical: 24,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },

    containerView: {
        width: windowWidth - 40
    },

    button: {
        backgroundColor: "#009933",
        height: normalize(55)
    },
    button1: {
        backgroundColor: "#0099CC",
        height: normalize(55)
    },


    buttonText: {
        fontSize: normalize(14) + 2,
    },

    bottom: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16
    },

    bottomText: {
        fontSize: normalize(14),
        marginRight: 5,
        color: "#414141"
    },

    signInText: {
        fontSize: normalize(14),
        color: "blue",
    },

    orContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: windowWidth,
        backgroundColor: "black",
    },

    divider: {
        backgroundColor: 'blue',
        position: "absolute",
        top: 19,
        left: 20,
        right: 20
    },

    orText: {
        backgroundColor: "black",
        fontSize: normalize(14),
        color: "white",
        paddingHorizontal: 8
    }
});
const windowWidth = Dimensions.get('window').width;

export default styles;
 