import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './style/styles';


class ChartScreen extends React.Component {
    render() {
      return (
        <View style={styles.flexStyle}>
          <Text>Charts</Text>
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Saved Coins"
            onPress={() => this.props.navigation.navigate('SavedCoins')}
          />
        </View>
      );
    }
  }
  
  export default ChartScreen;