

import React, { useEffect, useState, useRef, useReducer } from 'react';
import { connect } from 'react-redux';

import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ToastAndroid,
  Text,
  useColorScheme,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { loadUserReg } from '../../api/actions/UserRegAction'
// import DeviceInfo from 'react-native-device-info';

// import { getReadableVersion } from 'react-native-device-info';


// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import {CONSTANTS} from '../utils/constants/Constants'

import * as API_call from '../../api/Apicalling';


const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

import { IMAGES } from '../../res/Images'
import { CONSTANTS } from '../../utils/constants/Constants';



const Registration = (props) => {
  // const [emp_id, setEmp_id] = useState('111401X')
  const [emp_id, setEmp_id] = useState('')
  const [isLoading, setLoading] = useState(false)
  const prevCountRef = useRef();
  const userReg = {
    "type": "TRUE",
    "msg": "Otp will be sent to your",
    "data": []
  }


  // useEffect(()=>{
  //   let deviceId = DeviceInfo.getDeviceId();
  //     console.log(deviceId);
  // },[])


  getRes = () => {
    if (emp_id != '') {
      setLoading(true)
      props.loadUserRegAPI(emp_id, CONSTANTS.DEVICE_ID)
    }
    else {
      Alert.alert('Employee ID can\'t be empty')

    }
  }

  getLocalRes = () => {
    if(emp_id!='')
    {
    if (emp_id == 'Prince') {
      setLoading(true)
      Alert.alert('Sucess',userReg.msg,[ { text: "OK", onPress: () => props.navigation.navigate('MobileVerification') }])
      setLoading(false)
    }
    else {
      Alert.alert('Employee ID is incorrect')
    }
    }
    else{
      Alert.alert('Employee ID can\'t be empty')
    }
  }




  useEffect(() => {
    prevCountRef.current = props.getUserReg
    // console.log("response from Registration.jsx", prevCountRef.current.type, props.getUserReg);
    // if (props.getUserReg.type == 'TRUE'&&prevCountRef.current.type!=props.getUserReg)
    if (props.getUserReg.type == 'TRUE') {
      const timer = setTimeout(() => {
        ToastAndroid.showWithGravity(
          props.getUserReg.msg,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
        setLoading(false)
        props.navigation.navigate('MobileVerification')
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (props.getUserReg.type == 'FALSE') {
      Alert.alert('Invalid Employee ID')
      setLoading(false)

    }

  }, [props.getUserReg])




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode='cover'
        style={{ height: HEIGHT, width: WIDTH, alignItems: 'center' }}
        source={IMAGES.SACH_BACK}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
            marginTop: HEIGHT / 6,
          }}
          resizeMode='contain'
          source={IMAGES.APP_ICON}
        />
        <Text
          style={{
            color: '#636262',
            fontSize: 30,
            padding: 5,
            fontWeight: "100"
          }}
        >Registration</Text>
        <Text
          style={{
            color: '#636262',
            fontSize: 10,
            padding: 5,
            fontWeight: "100",
            textAlign: 'center'
          }}
        >Enter your Employee No. and Click Submit Button to Register in Sachal Attendance System</Text>

        <KeyboardAvoidingView
          behavior='height'
          style={{
            height: HEIGHT / 6,
            width: WIDTH / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop:HEIGHT/10
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 40,
              height: '30%',
              width: '100%',
              marginVertical: 5,
              color: '#000',
              justifyContent: 'center',
              flexDirection: 'row',
              // paddingHorizontal: '2%',
              paddingLeft: 2,
              elevation: 5,
            }}>

            <Image
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
                // margin:15,
                paddingLeft: 5,

              }}
              resizeMode='contain'
              source={IMAGES.USER}
            />

            <TextInput
              placeholder='Employee ID'
              // inlineImageLeft={}
              style={{
                borderRadius: 20,
                minHeight: '100%',
                width: '70%',
                color: '#000',
                flexGrow: 1,
                alignItems: 'center',
                padding: 2
              }}
              value={emp_id}
              onChange={(text)=>text.toString().replace(/[`~!@#$%^&*()|+-=?;:'",.<>{}[]\/\s]/gi, '')}
              onChangeText={(text) =>{setEmp_id(text)}}
              returnKeyType={'done'}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.3}
            placeholder='Employee ID'
            // inlineImageLeft={}\
            // onPress={() => getRes()}
            onPress={() => getLocalRes()}
            style={{
              backgroundColor: '#06BEBD',
              borderRadius: 20,
              height: '30%',
              marginVertical: 5,
              width: '100%',
              elevation: 5,
              justifyContent: 'center',
            }}
          >
            {
              isLoading == true ?
                <View style={{ height: '120%', width: '100%', backgroundColor: 'transparent', zIndex: 2, position: 'absolute', justifyContent: 'center' }}>
                  <ActivityIndicator size={'large'} color={'#fff'} style={{ alignSelf: 'center', }} />
                </View>
                : null
            }
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center'
              }}
            >SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};



const mapStateToProps = state => ({
  getUserReg: state.UserRegResponse
});

const dispatchStateToProps = dispatch => ({
  loadUserRegAPI: (emp_id, imei_no) => { dispatch(loadUserReg(emp_id, imei_no)) }
});
export default connect(mapStateToProps, dispatchStateToProps)(Registration);
