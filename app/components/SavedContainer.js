import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
//imports the action that fetches the coin data from the api
import FetchCoinData from './../Actions/FetchCoinData';
import SavedCoin from './SavedCoin';

// creates the class for the component and renders the view or UI of the component
class SavedContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }
    
    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin) => 
            <SavedCoin
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )

    }

    render() {
        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading...."}
                        textStyle={{ color: '#253145' }}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        );
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55,
        backgroundColor: "grey"
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(SavedContainer)