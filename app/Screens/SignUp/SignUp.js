import React from "react";
import { ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../../auth";
import styles from './style/styles';
export default ({ navigation }) => (
  <ScrollView style={styles.viewStyle}>
    <Card>
    <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>UserName</FormLabel>
      <FormInput placeholder="SpaceTrev..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel>Confirm Password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />
      
      <Button
        style={styles.button1Style}
        backgroundColor="#009933"
        title="SIGN UP"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
      <Button
        style={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </Card>
  </ScrollView>
);
