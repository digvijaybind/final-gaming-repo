import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BodyContain from '../Components/BodyContain';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {id: '1', icon: 'football-outline', name: 'Soccer'},
  {id: '2', icon: 'ios-basketball-sharp', name: 'Basketball'},
  {id: '3', icons: 'hockey-sticks', name: 'Ice Hockey'},
  {id: '4', icons: 'rugby', name: 'Rugby Union'},
  {id: '5', icons: 'rugby', name: 'Rugby Leage'},
];

const Home = props => {
  return (
    <View style={{backgroundColor: '#3A3A3A', flex: 1}}>
      <View style={{}}>
        <View style={{backgroundColor: 'black'}}>
          <Header />
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: '#3A3A3A',
            borderTopColor: '#4D4D4D',
            borderTopWidth: wp('3%'),
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: wp('5%'),
              //   justifyContent: 'center',
              alignItems: 'center',
              height: hp('9%'),
            }}>
            <Icon name="ios-list-sharp" size={30} color="white" />
            <Text
              style={{
                fontSize: hp('2.8%'),
                marginHorizontal: wp('4%'),
                color: 'white',
              }}>
              UPCOMING
            </Text>
          </View>
          {/* <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: wp('1%'),
            }}
          /> */}
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <BodyContain item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;
