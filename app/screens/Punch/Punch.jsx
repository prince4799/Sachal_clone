

import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
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

const Punch = () => {

  const punchRes = [
    { "EMP_NO": "Prince", "PUNCH_DATE": "1-10-2022", "PUNCH": ["", "", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "2-10-2022", "PUNCH": ["", "", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "3-10-2022", "PUNCH": ["08: 59", "17: 31", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "4-10-2022", "PUNCH": ["", "", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "5-10-2022", "PUNCH": ["", "", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "6-10-2022", "PUNCH": ["08: 59", "17: 33", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "7-10-2022", "PUNCH": ["08: 53", "17: 36", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "8-10-2022", "PUNCH": ["", "", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "9-10-2022", "PUNCH": ["", "", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "10-10-2022", "PUNCH": ["09: 04", "17: 35", "", "", "", ""] },

    { "EMP_NO": "Prince", "PUNCH_DATE": "11-10-2022", "PUNCH": ["09: 01", "", "", "", "", ""] }

  ]



return (
  <SafeAreaView
    style={{
      flex: 1,
      // backgroundColor: '#06BEBD',
      backgroundColor: '#fff',
      //  justifyContent:'center',fontSize:12
    }}>

   <View style={{height:150,width:150,backgroundColor:'#06BEBD',borderRadius:75,alignSelf:'center',fontSize:12,margin: '15%',}} />
    <Text style={{alignSelf:'center',fontSize:12}}>(Click on Punch Button for Marking Your Attendence)</Text>
    <View>
      
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

export default Punch;
