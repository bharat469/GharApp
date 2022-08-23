import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {primary, white, Yellow} from '../../helpers/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/AntDesign';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const Otp = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const {number} = route.params;
  const CELL_COUNT = 6;
  console.log('number', number);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.OtpScreen}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backArrow}>
            <Text>
              <Back name="arrowleft" size={24} color={Yellow} />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.verifyView}>
          <Text style={styles.verifyText}>Verify Phone</Text>
          <Text style={styles.verifyDefine}>Code is sent to {number}</Text>
        </View>
        <View style={styles.otpView}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Otp;

const styles = StyleSheet.create({
  OtpScreen: {
    flex: 1,
    backgroundColor: primary,
  },
  backArrow: {
    padding: 12,
  },
  verifyView: {
    alignItems: 'center',
    padding: 12,
  },
  verifyText: {
    color: Yellow,
    fontWeight: '800',
    fontSize: hp('3%'),
    margin: 12,
  },
  verifyDefine: {
    color: white,
    fontSize: hp('2%'),
  },

  cellRoot: {
    width: wp('10%'),
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 2,
    margin: 6,
    padding: 12,
  },
  focusCell: {
    borderColor: Yellow,
  },
  cellText: {
    color: '#fff',
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  otpView: {
    marginTop: hp('3%'),
    width: wp('100%'),
    alignItems: 'center',
  },
  buttonView: {
    margin: 12,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Yellow,
    padding: 12,
    width: wp('40%'),
      alignItems: 'center',
    borderRadius:12
  },
  buttonText: {
    color: white,
    fontWeight: '700',
    fontSize:hp('2.2%')
  },
});
