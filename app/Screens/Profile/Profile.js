import React from "react";
import { ScrollView, View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../../auth";
import styles from './style/styles';

export default ({ navigation }) => (
  <ScrollView style={styles.mainView}>
    <Card title="Space Trev">
      <View
        style={styles.textContainer}
      >
        <Text style={styles.textStyle}>ST</Text>
      </View>
      <Button
        backgroundColor="#0099CC"
        title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
    </ScrollView>
);
