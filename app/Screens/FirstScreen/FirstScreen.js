import React from 'react';

import { Text, View, Image } from 'react-native';
import { Button, Divider } from 'react-native-elements'

import styles from "./style/styles"

export default ({ navigation }) => (
    <View style={styles.container}>
    <View style={styles.topContainer}>
        <Image style={styles.image} source={{uri: "https://static.vecteezy.com/system/resources/previews/000/180/198/non_2x/bitcoin-technology-network-digital-background-vector.jpg"}}/>
        <Text style={styles.title}>CryptDux</Text>
    </View>

    <View style={styles.bottomContainer}>
        <View style={[styles.buttonContainer]}>
            <Button
                raised
                borderRadius={4}
                title={'ALREADY REGISTERED? SIGN IN'}
                containerViewStyle={[styles.containerView]}
                buttonStyle={[styles.button1]}
                textStyle={styles.buttonText}
                onPress={() => navigation.navigate("SignIn")}
                />

            <View style={styles.orContainer}>
                <Divider style={styles.divider} />
                <Text style={styles.orText}>
                    Or
                </Text>
            </View>

            <Button
                raised
                borderRadius={4}
                title={'SIGN UP WITH E-MAIL'}
                containerViewStyle={[styles.containerView]}
                buttonStyle={[styles.button]}
                textStyle={styles.buttonText}
                onPress={() => navigation.navigate("SignUp")}/>
        </View>
       
    </View>

</View>
);

