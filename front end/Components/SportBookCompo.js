import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DownIcon from 'react-native-vector-icons/AntDesign';

const SportBookCompo = props => {
  const [Open, setOpen] = useState(true);
  return (
    <View
      style={{
        borderTopWidth: 3,
        backgroundColor: '#212121',
        // borderBottomWidth: 3,
        paddingVertical: hp('1.5'),
        borderTopColor: 'gray',
        // borderBottomColor: 'gray',
      }}>
      <View style={{flexDirection: 'row', paddingHorizontal: wp('3%')}}>
        <Text style={{color: 'gray'}}>UEFA champion League</Text>
        <DownIcon
          style={{marginHorizontal: wp('3%')}}
          name="down"
          size={20}
          color="gray"
          onPress={() => setOpen(privous => !privous)}
        />
      </View>
      {Open && (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: wp('1%'),
            }}>
            <Text style={{marginHorizontal: wp('7%'), color: 'gray'}}>1</Text>
            <Text style={{marginHorizontal: wp('7%'), color: 'gray'}}>x</Text>
            <Text style={{marginHorizontal: wp('9%'), color: 'gray'}}>2</Text>
          </View>
          {[1, 3].map(item => {
            return (
              <View
                style={{
                  marginVertical: hp('.5%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  //   backgroundColor: 'yellow',
                  marginHorizontal: wp('3%'),

                  borderRadius: 10,
                  elevation: 4,
                }}>
                <View
                  style={{
                    backgroundColor: '#303030',
                    width: wp('35%'),
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    paddingHorizontal: wp('3%'),
                    paddingVertical: hp('1.5%'),
                  }}>
                  <Text style={{color: 'white'}}>Man city</Text>
                  <Text style={{color: '#9C3A3C'}}>Chelsea</Text>
                  <Text style={{color: 'gray'}}>MAy,30 12:30 Am</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexGrow: 1,
                    backgroundColor: '#3B3B3B',

                    paddingVertical: hp('2.5%'),
                    paddingHorizontal: wp('1.5%'),
                  }}>
                  <View
                    style={{
                      //   width: wp('15%'),
                      backgroundColor: '#343434',
                      borderRadius: 5,
                      borderWidth: 1,
                      flexGrow: 1,
                      marginHorizontal: wp('1%'),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white'}}>1.96</Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#343434',
                      borderRadius: 5,
                      borderWidth: 1,
                      flexGrow: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: wp('1%'),
                    }}>
                    <Text style={{color: 'gray'}}>3.45</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#343434',
                      borderRadius: 5,
                      borderWidth: 1,
                      flexGrow: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#9C3A3C'}}>2.45</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};

export default SportBookCompo;
