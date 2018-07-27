import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    SwitchNavigator
} from 'react-navigation';
import { FontAwesome } from 'react-native-vector-icons';

import SignUp from './Screens/SignUp/SignUp';
import SignIn from './Screens/SignIn/SignIn';
import Home from './Screens/HomeScreen/HomeScreen';
import SavedScreen from './Screens/SavedScreen/SavedScreen';
import Profile from './Screens/Profile/Profile';
import FirstScreen from './Screens/FirstScreen/FirstScreen';
const styleA = {
    headerStyle: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#d3d3d3',
    },


    headerBackTitleStyle: {
        color: 'white'
    },
    headerTitleStyle: {
        color: 'white',
    }

}



const { headerStyle, headerBackTitleStyle, headerTitleStyle } = styleA;
export const SignedOut = StackNavigator({
    FirstScreen: {
        screen: FirstScreen,
        navigationOptions: {
            title: "Welcome",
            headerStyle,
            headerBackTitleStyle,
            headerTitleStyle
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerStyle,
            headerTitleStyle

        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
            headerStyle,
            headerTitleStyle

        }
    }
});
const color = {
tintColor: '#0099CC'
};
const {tintColor} = color;

export const SignedIn = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Coins",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="bitcoin" size={30} color={tintColor} />
            )
        }
    },
    SavedScreen: {
        screen: SavedScreen,
        navigationOptions: {
            tabBarLabel: "Saved Coins",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="university" size={30} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={30} color={tintColor} />
            )
        }
    }
},
    {
        tabBarOptions: {
            style: {
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }
        }
    }
);

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};
