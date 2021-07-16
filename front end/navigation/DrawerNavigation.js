import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Share,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Avatar} from 'react-native-elements';
import {Color} from '../assets/constant/Constant';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigation from './TabNavigation';
import Home from '../screens/Home';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function CustomDrawerContent(props) {
  return (
    <View
      style={{
        backgroundColor: Color.background,
        flex: 1,
        justifyContent: 'space-between',
        padding: wp('3%'),
      }}>
      <View style={{marginVertical: wp('5%'), marginHorizontal: wp('2%')}}>
        <Avatar
          source={{
            uri: 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png',
          }}
          activeOpacity={0.2}
          onPress={() => alert('onPress')}
          rounded
          size="large"
        />

        <Text
          style={{
            color: Color.white,
            fontSize: 18,
            marginVertical: wp('2%'),
          }}>
          Digvijay bind
        </Text>
        <Text style={{color: Color.white, fontSize: 15}}>
          binddigvijay123@gmail.com
        </Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
        label="Help"
        onPress={() => alert("gjfgjl")}
      /> */}
      </DrawerContentScrollView>

      <View style={{marginVertical: wp('2%')}}>
        <Text style={{fontSize: 18, color: Color.orange}}>Logout</Text>
      </View>
    </View>
  );
}

const Drawernavigation = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawernavigation.Navigator
      drawerContentOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: Color.white,
        itemStyle: {marginHorizontal: 0},
      }}
      //   backBehavior="history"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawernavigation.Screen
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="md-home" color={color} size={25} />
          ),
        }}
        name="My Wallet"
        component={TabNavigation}
      />

      
    </Drawernavigation.Navigator>
  );
}

const DrawerNavigation = () => {
  return <MyDrawer />
};

export default DrawerNavigation;
