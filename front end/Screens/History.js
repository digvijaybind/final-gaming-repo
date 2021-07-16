import React from 'react';
import {Text, View} from 'react-native';
import Header from '../Components/Header';
import HistoryCard from '../Components/HistoryCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DownIcon from 'react-native-vector-icons/AntDesign';

const History = () => {
  return (
    <View style={{backgroundColor: '#4D4D4D', flex: 1}}>
      <View style={{backgroundColor: 'black'}}>
        <Header />
      </View>
      <View
        style={{
          backgroundColor: '#212121',
          //   flexDirection: 'row',

          marginVertical: hp('2%'),
          marginHorizontal: wp('5%'),
          //   paddingVertical: wp('4%'),
          //   paddingHorizontal: wp('3%'),
          borderRadius:5
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('3%'),
            paddingVertical: hp('1%'),
          }}>
          <Text
            style={{fontWeight: 'bold', color: 'white', fontSize: hp('1.8%')}}>
            PENDING BETS
          </Text>
          <Text style={{color: 'white'}}>
            Pending Stake <Text style={{color: 'red'}}>0.00</Text>
            WGR
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#3A3A3A',
            borderTopColor: '#4D4D4D',
            borderTopWidth: wp('1%'),
          }}
        />
        <View>
          <HistoryCard />
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#212121',
          //   flexDirection: 'row',

          marginVertical: hp('2%'),
          marginHorizontal: wp('5%'),
          //   paddingVertical: wp('4%'),
          //   paddingHorizontal: wp('3%'),
         
          borderRadius:5
        }}>
        <View
          style={{
          
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp('3%'),
            paddingVertical: hp('1%'),
          }}>
          <Text
            style={{fontWeight: 'bold', color: 'white', fontSize: hp('1.8%')}}>
            HISTORY
          </Text>
          <View
            style={{
              backgroundColor: '#2C2C2C',
              paddingHorizontal: wp('5%'),
              paddingVertical: hp('.7%'),
              borderRadius: 10,
            }}>
            <Text style={{color: 'white'}}>Goross Winning</Text>
          </View>
          <View
            style={{
              backgroundColor: '#2C2C2C',
              paddingHorizontal: wp('5%'),
              paddingVertical: hp('.7%'),
              borderRadius: 10,

              width: wp('25%'),
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{color: 'white'}}>All</Text>
              <DownIcon
                style={{marginHorizontal: wp('1%')}}
                name="down"
                size={15}
                color="gray"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3A3A3A',
            borderTopColor: '#4D4D4D',
            borderTopWidth: wp('1%'),
          }}
        />
        <View>
          <HistoryCard />
        </View>
      </View>
    </View>
  );
};

export default History;
