import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderIcon from 'react-native-vector-icons/EvilIcons';
const Header = () => {
  return (
    <View style={{
         
    }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: wp('3%'),
          // marginVertical: hp('0.5%'),
          alignItems:"center"
        }}>
        <Image
          source={require('../asset/Images/Logo.jpeg')}
          style={{height: hp('10%'), width: hp('10%'), resizeMode: 'contain'}}
        />
        <HeaderIcon name="navicon" size={40}  color="white" />
      </View>
    </View>
  );
};

export default Header;
