

import React, { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  NativeModules,
  NativeModule,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

import { IMAGES } from '../../res/Images'

const MobileVerification = (props) => {

  const mobileRes = {
    "type": "TRUE",
    "msg": "You will now move to the Attendence screen. ",
    "fail":"The data you provided is not correct",
    "data": []
  }

  const [otp,setotp]=useState('')
  // const [deviceID,setDeviceID]=useState(Math.random()*10)
const deviceID=Math.floor(Math.random() * 11*1234)

  getMobRes=()=>{

    switch(otp)
    {
      case '':
        // console.warn(deviceID);
      Alert.alert('Fail','OTP can\'t be empty!')
      break;
      case '1234':
        Alert.alert('Success',mobileRes.msg,[{text:'OK',onPress:()=>props.navigation.navigate('Punch')}])        

    }


    // if(otp!=''&&deviceID!=''&&mobileRes.type=='TRUE'){
    //   Alert.alert('Success',mobileRes.msg,[{text:'OK',onPress:()=>props.navigation.navigate('Punch')}])
    // }
    // else{
    //   Alert.alert('Success',mobileRes.msg,[{text:'OK',onPress:()=>props.navigation.navigate('Punch')}])

    // }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#06BEBD',
        //  justifyContent:'center'
      }}>

      <View
        style={{ justifyContent: 'center', height: HEIGHT / 1.5 }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            padding: 5,
            fontWeight: "100",
            textAlign: 'center'
          }}
        >Verification of Your Mobille No.!</Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
            padding: 5,
            textAlign: 'center',
            marginVertical: 10,
          }}
        >OTP and Device ID sent to your Mobile No. Registered in ERP System</Text>

        <KeyboardAvoidingView
          behavior='height'
          style={{
            width: '50%',
            height: '20%',
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 15,
          }}>


          <TextInput
            placeholder='OTP'
            // inlineImageLeft={}
            style={{
              borderRadius: 60,
              height: '40%',
              width: '100%',
              backgroundColor: '#fff',
              color: '#000',
              flexGrow: 1,
              marginTop: 10,
              elevation: 5,
              paddingLeft: 75,
              // textAlign:'center',
              alignItems: 'center'
            }}
            keyboardType={'number-pad'}
            returnKeyType={'done'}
            onChangeText={(t)=>setotp(t)}
          />

          <TextInput
            placeholder='Device ID'
            // inlineImageLeft={}
            editable={false}
            // value={deviceID}
            style={{
              borderRadius: 60,
              height: '40%',
              width: '100%',
              backgroundColor: '#fff',
              color: '#000',
              flexGrow: 1,
              marginTop: 10,
              elevation: 5,
              paddingHorizontal: 40,
              alignSelf:'center',
              textAlign:'center'
            }}
            returnKeyType={'done'}
            // onChangeText={()=>setDeviceID(Math.random()*10)}

          >{deviceID}</TextInput>


          <Text
            onPress={() => console.warn(",,,,,,,,,")}
            style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 15, }}>Resend OTP?</Text>
        </KeyboardAvoidingView>

        <Text
          onPress={() =>getMobRes(otp,deviceID)}
          style={{
            backgroundColor: '#049999',
            color: '#fff',
            width: '50%',
            alignSelf: 'center',
            textAlign: 'center',
            height: 40,
            paddingTop: 10,
            marginTop: 40,
            elevation: 4,
            borderRadius: 5,
            // borderRadius:20,
          }}
        >SUBMIT</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MobileVerification;
