import React from 'react';
import {Text, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SlipCard = (props) => {
  return (
    <View
      style={{
        // backgroundColor: 'pink',
        marginVertical: hp('2%'),
        marginHorizontal: wp('4%'),
        paddingVertical: wp('4%'),
        paddingHorizontal: wp('3%'),
      }}>
      {props?.single && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <Text style={{fontSize: hp('2'), color: 'white'}}>
              Total Matches
            </Text>
          </View>
          <View>
            <Text
              style={{fontSize: hp('2.4%'), margin: wp('1%'), color: 'white'}}>
              0
            </Text>
          </View>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{}}>
          <Text style={{fontSize: hp('2'), color: 'white'}}>Total stack</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontSize: hp('2.4%'), margin: wp('1%'), color: 'white'}}>
              0.00
            </Text>
            <Text style={{color: 'red'}}>WRG</Text>
          </View>

          <Text style={{color: 'white'}}>($ 0.00 USD)</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: hp('1%'),
        }}>
        <View style={{}}>
          <Text style={{fontSize: hp('2'), color: 'white'}}>
            Total Potential returns
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontSize: hp('2.4%'), margin: wp('1%'), color: 'white'}}>
              0.00
            </Text>
            <Text style={{color: 'red'}}>WRG</Text>
          </View>

          <Text style={{color: 'white'}}>($ 0.00 USD)</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#681111',
          width: wp('70%'),
          height: hp('4%'),
          marginVertical: hp('2%'),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'gray'}}>LOGIN TO PLACE BETS</Text>
      </View>
    </View>
  );
};

export default SlipCard;
