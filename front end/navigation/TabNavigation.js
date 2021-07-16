import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import HistoryIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SportBook from '../Screens/SportBook';
import Settings from '../Screens/Settings';
import History from '../Screens/History';
import BetSlip from '../Screens/BetSlip';

const Tab = createBottomTabNavigator();

const style = {};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
   
      tabBarOptions={{
        
        inactiveBackgroundColor: '#212121',
        activeBackgroundColor: '#3A3A3A',
        tabStyle:{borderColor:'#3A3A3A', borderWidth:.7, },
        style: {
          height: 60,
    
        },
     
      }}
     
    >
      <Tab.Screen
      
        name="Home"
        component={Home}
        options={{
          // borderWidth:3,
       

          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" size={35} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="service"
        component={SportBook}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-list-sharp" size={35} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="jobs"
        component={BetSlip}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => (
            <Icon name="md-receipt-outline" size={35} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Classified"
        component={History}
        options={{
          //   tabBarLabel: 'Classified',
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => (
            <HistoryIcon name="history" size={35} color="white" />
         
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Settings}
        options={{
          //   tabBarLabel: 'Wallet',
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => (
            // <Icon name="history"  size={35} />
            <Icon name="settings-outline" size={35} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabNavigation = () => {
  return <MyTabs />;
};

export default TabNavigation;
