import React from 'react';
import {Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HistoryCard = () => {
  return (
    <View style={{}}>
      <View
        style={{
        //   backgroundColor: 'gray',

          //   marginVertical: hp('2%'),
          //   marginHorizontal: wp('5%'),
          //   paddingVertical: wp('2%'),
          //   paddingHorizontal: wp('3%'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2B2B2B',
            paddingVertical: hp('1%'),
            paddingHorizontal: wp('3%'),
          }}>
          <Text style={{color: 'white'}}>DATE</Text>
          <Text style={{color: 'white'}}>BET</Text>
          <Text style={{color: 'white'}}>ODDS</Text>
          <Text style={{color: 'white'}}>TOWIN</Text>
        </View>

        <View
          style={{
            // backgroundColor: 'pink',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: hp('2%'),
            alignItems: 'center',
   
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor:"gray",
              paddingHorizontal: wp('3%'),
              paddingVertical: hp('.6'),
              borderTopLeftRadius: 5,
              borderTopStartRadius: 5,
              borderBottomLeftRadius: 5,
              backgroundColor:"#2C2C2C",
              paddingHorizontal:wp("4%"),
              paddingVertical:hp("1%")
              
            }}>
            <Text style={{fontSize: hp('2%'), color: 'white'}}>Previous</Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              paddingHorizontal: wp('3%'),
              paddingVertical: hp('.6'),
              //   borderRadius: 5,
              backgroundColor:"#2C2C2C",
              borderWidth: 1,
              borderColor:"gray",
              paddingHorizontal:wp("4%"),
              paddingVertical:hp("1%")
            }}>
            <Text style={{fontSize: hp('2%'), color: 'red'}}>1</Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              paddingHorizontal: wp('3%'),
              paddingVertical: hp('.6'),
              //   borderRadius: 5,
              borderTopRightRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              backgroundColor:"#2C2C2C",
              borderWidth: 1,
              borderColor:"gray",
              paddingHorizontal:wp("4%"),
              paddingVertical:hp("1%")
            }}>
            <Text style={{fontSize: hp('2%'), color: 'white'}}>Next</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryCard;
