import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../Components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SlipCard from '../Components/SlipCard';
import Parlay from '../Components/Parlay';

const BetSlip = () => {
  const [single, setSingle] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#4D4D4D'}}>
      <View style={{backgroundColor: 'black'}}>
        <Header />
      </View>

      <View
        style={{
          backgroundColor: '#212121',
          marginVertical: hp('1%'),
          marginHorizontal: wp('6%'),
        }}>
        <View style={{paddingVertical: hp('1%'), paddingHorizontal: wp('3%')}}>
          <Text
            style={{color: 'white', fontSize: hp('2%'), fontWeight: 'bold'}}>
            BET SLIP
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => setSingle(false)}
            style={{
              backgroundColor: single ? null : '#373737',
              borderColor: 'gray',
              borderWidth: 1,
              width: wp('43%'),
              height: hp('4%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: hp('1.8%'),
                color: 'white',
              }}>
              SINGLE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSingle(true)}
            style={{
              backgroundColor: single ?  '#373737':null,

              borderColor: 'gray',
              borderWidth: 1,
              width: wp('45%'),
              height: hp('4%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: hp('1.8%'),
                color: 'white',
              }}>
              PARLAY
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {single && (
            <View style={{marginVertical: 20}}>
              <Parlay />
            </View>
          )}

          <SlipCard  single={single} />
        </View>
      </View>
    </View>
  );
};

export default BetSlip;
