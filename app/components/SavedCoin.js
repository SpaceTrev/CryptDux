import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking
} from 'react-native';
import { Button } from 'react-native-elements';
import { images } from '../Utils/CoinIcons'
const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderTopColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20,
        backgroundColor: "black"
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
        color: "white"
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: "white"
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
        color: "white",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
        color: "white",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    daysHours:
    {
        color: "white"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }

})

const { container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    daysHours,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;
// class App extends React.Component
class SavedCoin extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inSaved: false
        }
    }
    render() {
        
    
        const { symbol, coin_name, price_usd, percent_change_24h, percent_change_7d } = this.props;


        return (
            <View style={container}>
                <View style={upperRow}>
                    <Image
                        style={image}
                        source={{ uri: images[symbol] }}
                    />
                    <Text style={coinSymbol}>{symbol}</Text>
                    <Text style={seperator}>|</Text>
                    <Text style={coinName}>{coin_name}</Text>
                    <Text style={coinPrice}>{price_usd}<Text style={moneySymbol}>$</Text></Text>
                </View>
                <View style={statisticsContainer}>
                    <Text style={daysHours}>24h:
            <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_24h} % </Text>
                    </Text>

                    <Text style={daysHours}>7d:
            <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_7d} % </Text>
                    </Text>
                    <View>
                        <Button
                            style={{ height: 40 }}
                            textStyle={{ fontSize: 7 }}
                            backgroundColor="#0099CC"
                            onPress={() => {if(this.state.inSaved == false) {
                                this.setState({inSaved: true})
                            } else {
                                this.setState({inSaved: false})
                            }}}
                            title={this.state.inSaved ? "Remove" : "Add"}
                       / >
                            
                    </View>
                    <View>
                        <Button
                            style={{ height: 40 }}
                            title="Buy"
                            textStyle={{ fontSize: 7 }}
                            backgroundColor="#009933"
                            onPress={() => Linking.openURL("https://www.binance.com/")}
                        />
                    </View>


                </View>
            </View>
        );
    }
}
export default SavedCoin;

