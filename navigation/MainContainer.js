import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './screens/Home';
import Members from './screens/Members';
import Tournaments from './screens/Tournaments';
import Challenges from './screens/Challenges';
import Settings from './screens/Settings';
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Screen names
const homeName = "Mango";
const membersName = "Medlemmar";
const tournamentsName = "Turneringar";
const challengeName = "Utmaningar";
const settingsName = "Inställningar";

const Tab = createBottomTabNavigator();

function MainContainer({handleLogout}) {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'globe' : 'globe-outline';

                        } else if (rn === membersName) {
                            iconName = focused ? 'body' : 'body-outline';

                        } else if (rn === tournamentsName) {
                            iconName = focused ? 'trophy' : 'trophy-outline';
                        } else if (rn === challengeName) {
                            iconName = focused ? 'pricetag' : 'pricetag-outline';
                        } else if (rn === settingsName) {
                            iconName = focused ? 'pricetag' : 'pricetag-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#a85756', // Customize the header background color
                    },
                    "tabBarActiveTintColor": "red",
                    "tabBarInactiveTintColor": "black",
                    "tabBarLabelStyle": {
                        "paddingBottom": 10,
                        "fontSize": 10
                    },
                    "tabBarItemStyle": {
                        "backgroundColor": "#B5C99A"
                    },
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ],
                })}>

                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={membersName} component={Members}/>
                <Tab.Screen name={tournamentsName} component={Tournaments}/>
                <Tab.Screen name={challengeName} component={Challenges}/>
                <Tab.Screen name={settingsName}>
                    {props => <Settings {...props} handleLogout={handleLogout}/>}
                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
