import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './screens/Home';
import Members from './screens/Members';
import Tournaments from './screens/Tournaments';
import Products from './screens/Products';

//Screen names
const homeName = "Mango";
const membersName = "Members";
const tournamentsName = "Tournaments";
const productName = "Products";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'globe' : 'globe-outline';

                        } else if (rn === membersName) {
                            iconName = focused ? 'body' : 'body-outline';

                        } else if (rn === tournamentsName) {
                            iconName = focused ? 'trophy' : 'trophy-outline';
                        } else if (rn === productName) {
                            iconName = focused ? 'trophy' : 'trophy-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: 'black',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70},
                    tabStyle: { backgroundColor: '#B5C99A' }
                }}>

                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={membersName} component={Members} />
                <Tab.Screen name={tournamentsName} component={Tournaments} />
                <Tab.Screen name={productName} component={Products} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
