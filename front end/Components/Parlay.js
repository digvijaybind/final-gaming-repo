import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Parlay = () => {
  return (
    <View>
      <View style={{}}>
        <View
          style={{
            marginVertical: wp('1%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('2%'),

            borderWidth: 1,
            paddingHorizontal: wp('4%'),
            paddingVertical: hp('1.5%'),
            borderColor: 'gray',
          }}>
          <View>
            <TextInput
              placeholder="25"
              
              placeholderTextColor="white"
              style={{
                backgroundColor: '#373737',
                width: wp('24%'),
                height: hp('5%'),
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: hp('2%'),
                paddingHorizontal:wp("2%")
              
              }}
            />
            <Text
              style={{
                fontSize: hp('2%'),

                textDecorationLine: 'underline',
                color: 'white',
              }}>
              BETMSX
            </Text>
          </View>
          <View>
            <Text style={{fontSize: hp('2.3%'), color: 'red'}}>0.00</Text>
            <Text style={{fontSize: hp('1.4%'), color: 'white'}}>
              Potential return
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: hp('2.4%'),
                  margin: wp('1%'),
                  color: 'white',
                }}>
                0.00
              </Text>
              <Text style={{color: 'red'}}>WRG</Text>
            </View>
            <Text style={{color: 'white'}}>($ 0.00 USD)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Parlay;
