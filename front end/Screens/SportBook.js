import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {set} from 'react-native-reanimated';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';
import SportBookCompo from '../Components/SportBookCompo';
const SportBook = () => {
  const [isVisible, setisVisible] = useState(0);
  const data = [
    {
      id: 0,
      title: 'MONEY LINE',
    },
    {
      id: 1,
      title: 'SPREAD',
    },
    {
      id: 2,
      title: 'TOTAL',
    },
  ];

  return (
    <View style={{backgroundColor: '#4D4D4D', flex: 1}}>
      <View style={{backgroundColor: 'black'}}>
        <Header />
      </View>

      <View
        style={{
          backgroundColor: '#212121',
          marginHorizontal: wp('4%'),
          marginVertical: wp('3%'),
        }}>
        <View
          style={{
            backgroundColor: '#212121',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: hp('8%'),
            alignItems: 'center',
            marginHorizontal: wp('3%'),
          }}>
          <Text style={{fontSize: hp('2%'), color: 'white'}}>SPORTSBOOK</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              placeholderTextColor="gray"
              placeholder="Search"
              style={{width: wp('40%')}}
            />
            <SearchIcon name="search1" size={25} color="white" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#2B2B2B',
            justifyContent: 'space-between',
            flexDirection: 'row',
            //   paddingVertical: hp('1.5%'),
            // paddingHorizontal: wp('5%'),
          }}>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setisVisible(item.id)}
                style={{
                  borderBottomWidth: isVisible === item.id? 3:0,
                  borderBottomColor: isVisible === item.id?  'red':null,
                  paddingHorizontal: wp('5%'),
                  paddingVertical: hp('1.5%'),
                }}>
                <Text style={{color: 'white'}}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}

          {/* <View
            style={{paddingHorizontal: wp('5%'), paddingVertical: hp('1.5%')}}>
            <Text style={{color: 'white'}}>SPREAD</Text>
          </View>
          <View
            style={{paddingHorizontal: wp('5%'), paddingVertical: hp('1.5%')}}>
            <Text style={{color: 'white'}}>TOTAL</Text>
          </View> */}
        </View>
        <ScrollView>
          {[1, 2, 3, 4, 4].map(item => {
            return <SportBookCompo item={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SportBook;
