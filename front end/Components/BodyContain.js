import React from 'react';
import {Text, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import RugbyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const BodyContain = props => {
  console.log('pros', props.item.icon);
  return (
    <View style={{backgroundColor: '#212121'}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp('5%'),
          //   justifyContent: 'center',
          alignItems: 'center',
          height: hp('9%'),
        }}>
        {props?.item?.icon ? (
          <Icon name={props?.item?.icon} size={30} color="#9D9D9D" />
        ) : (
          <RugbyIcon name={props?.item?.icons} size={30} color="#9D9D9D" />
        )}

        <Text
          style={{
            fontSize: hp('2.8%'),
            marginHorizontal: wp('4%'),
            color: '#9D9D9D',
          }}>
          {props.item.name}
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: wp('.3%'),
        }}
      />
    </View>
  );
};

export default BodyContain;
