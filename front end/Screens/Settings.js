import React from 'react';
import {Text, View} from 'react-native';
import Header from '../Components/Header';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DownIcon from 'react-native-vector-icons/AntDesign';

const Settings = () => {
  return (
    <View style={{   backgroundColor: '#3B3B3B', flex: 1}}>
      <View style={{backgroundColor: 'black'}}>
        <Header />
      </View>

      <View
        style={{
          marginHorizontal: wp('4%'),
          marginVertical: hp('1%'),
          backgroundColor: '#212121',
          borderRadius: 5,
          height: hp('50%'),
        }}>
        <View
          style={{
            elevation: 2,
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                paddingHorizontal: wp('3%'),
                paddingVertical: hp('1%'),
              }}>
              SETTINGS
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3B3B3B',
            marginHorizontal: wp('5%'),
            marginVertical: hp('3%'),
            paddingHorizontal: wp('3%'),
            paddingVertical: hp('2%'),
          }}>
          <View>
            <Text
              style={{
                fontSize: hp('2%'),
                marginVertical: wp('1%'),
                fontWeight: 'bold',
                color: 'white',
              }}>
              Default Currency
            </Text>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: '#1A1A1A',
                alignItems: 'flex-end',
                width: wp('45%'),
                borderRadius: 5,
                height: hp('3%'),
              }}>
              <DownIcon
                style={{marginHorizontal: wp('3%')}}
                name="down"
                size={15}
                color="white"
              />
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: hp('2%'),
                marginVertical: wp('1%'),
                fontWeight: 'bold',
                color: 'white',
              }}>
              Default Currency
            </Text>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: '#1A1A1A',
                alignItems: 'flex-end',
                width: wp('45%'),
                borderRadius: 5,
                height: hp('3%'),
              }}>
              <DownIcon
                style={{marginHorizontal: wp('3%')}}
                name="down"
                size={15}
                color="white"
              />
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: hp('2%'),
                marginVertical: wp('1%'),
                fontWeight: 'bold',
                color: 'white',
              }}>
              Default Currency
            </Text>
            <View
              style={{
                backgroundColor: '#1A1A1A',
                alignItems: 'flex-end',
                width: wp('45%'),
                height: hp('4%'),
                borderRadius: 5,
              }}></View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: wp('5%'),
            marginVertical: hp('1%'),
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: hp('2%'),
              marginHorizontal: wp('2%'),
              marginVertical: hp('1%'),
            }}>
            Advanced Settings
          </Text>
          <View
            style={{
              backgroundColor: '#3B3B3B',
              paddingHorizontal: wp('6%'),
              paddingVertical: hp('1%'),
              borderRadius: 5,
            }}>
            <Text
              style={{color: 'white', fontWeight: 'bold', fontSize: hp('2%')}}>
              seed words
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
