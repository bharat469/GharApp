import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Logo} from '../../helpers/image';
import {black, primary, white, Yellow} from '../../helpers/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PhoneInput = ({navigation}) => {
  const [codeT, setCodeT] = useState('+' + 91);
  const [phoneN, setPhoneN] = useState('');

  const sendToOtp = phone => {
    console.log('phone ', phone.length);
    if (phone.length > 10 || phone.length === 0) {
      return alert('The Number entered is wrong Pls provide correct number');
    } else {
      if (phone.length === 10) {
        return navigation.navigate('Otp', {
          number: '+91' + phoneN,
        });
      } else {
        return alert('The Number entered is wrong Pls provide correct number');
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.phoneView}>
        <Image source={Logo} style={styles.imageStyle} />
        <View style={styles.textView}>
          <Text style={styles.code}>{codeT}</Text>
          <TextInput
            placeholder="Enter Your Phone Number"
            style={styles.TextInput}
            value={phoneN}
            onChangeText={text => setPhoneN(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => sendToOtp(phoneN)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  phoneView: {
    flex: 1,
    backgroundColor: primary,
    alignItems: 'center',
  },
  imageStyle: {
    width: wp('50%'),
    height: hp('40%'),
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    backgroundColor: white,
    padding: 14.2,
    color: black,
    fontWeight: '700',
    borderRightWidth: 2,
    fontSize: hp('2%'),
  },
  TextInput: {
    backgroundColor: white,
    width: wp('80%'),
  },
  loginButton: {
    padding: 12,
    margin: 12,
    backgroundColor: Yellow,
    width: wp('30%'),
    alignItems: 'center',
    borderRadius: 12,
  },
  loginText: {
    color: black,
    fontWeight: '700',
    fontSize: hp('2.2%'),
  },
});
