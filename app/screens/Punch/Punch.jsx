

import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { FlatList } from 'react-native-gesture-handler';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const day = new Date().getDate()
const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format()
const year = new Date().getFullYear()
// const date=day+''+month
// const date=new Date().toDateString().startsWith(' ')
const date = `${month} ${year}`

import { IMAGES } from '../../res/Images'

const Punch = () => {

  const [punchRes, setPuncRes] = useState([
    { EMP_NO: "Prince", PUNCH_DATE: "1-10-2022", PUNCH: ["", "", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "2-10-2022", PUNCH: ["", "", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "3-10-2022", PUNCH: ["08: 59", "17: 31", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "4-10-2022", PUNCH: ["", "", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "5-10-2022", PUNCH: ["", "", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "6-10-2022", PUNCH: ["08: 59", "17: 33", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "7-10-2022", PUNCH: ["08: 53", "17: 36", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "8-10-2022", PUNCH: ["", "", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "9-10-2022", PUNCH: ["", "", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "10-10-2022", PUNCH: ["09: 04", "17: 35", "", "", "", ""] },

    { EMP_NO: "Prince", PUNCH_DATE: "11-10-2022", PUNCH: ["09: 01", "", "", "", "", ""] }

  ])

  const [tabs, setTabs] = useState('Daily')

  markAttendence = () => {
    let newArr = [...punchRes]
    let time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
    // let dummy=new Date().toLocaleTimeString("en-US", {hour: "2-digit",minute: "0-digit",hour12: false})
    let dummy = new Date().getHours()
    let myArray = []

    switch (dummy) {
      case dummy > 0 && dummy < 9:
        return;
      case dummy > 9 && dummy < 12:
        myArray=[...myArray,'']
        myArray[0] = time
        break;
      case dummy > 12 && dummy < 2:
        myArray=[...myArray,'']
        myArray[1] = time;
        break;
      case dummy > 2 && dummy < 4:
        myArray=[...myArray,'']
        myArray[2] = time;
        break;
      default:
        myArray=[...myArray,'']
        myArray[3] = time
        break;
    }
    console.log('.......',myArray);
    setPuncRes('')
    let day=new Date().getDate()
    let month= new Date().getMonth()+1
    let year =new Date().getFullYear()

    let punchDate=`${day}-${month}-${year}`
    // let punchDate={day}+"-"+{month}+"-"+${year}`
    // if(time==)
    newArr.push({
      EMP_NO: "Prince1",
      PUNCH_DATE:punchDate,
      // PUNCH: ["","","","","","",]
      PUNCH: myArray
    })
    setPuncRes(newArr)
    console.log("..", day,month,year,punchDate, typeof (newArr[0].PUNCH_DATE));
  }



  //============================================================================validate todays date
  // let day = new Date().getDate()
  //   let month = new Date().getMonth()
  //   let year = new Date().getFullYear()

  //   let punchDate = `${day}-${month}-${year}`
  //   let Arrlength = newArr.length - 1
  //   if (punchDate != newArr[Arrlength].PUNCH_DATE) {
  //     setPuncRes('')
  //     newArr.push({
  //       EMP_NO: "Prince1",
  //       PUNCH_DATE: punchDate,
  //       // PUNCH: ["","","","","","",]
  //       PUNCH: myArray
  //     })
  //     setPuncRes(newArr)
  //   }
  //   else{
  //     Alert.alert("You have already marked attendence for today")

  //   }

    //===============================================================================================================
  
  tableColor=(val)=>{
    // console.log("..", Boolean(val));
    colorType=Boolean(val)
    switch(colorType)
    {
      case true:
        return 'green'
      default:
        return 'grey'
    }
  }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: '#06BEBD',
        backgroundColor: '#fff',
        //  justifyContent:'center',fontSize:12
      }}>

      <TouchableOpacity
        style={{
          height: 100,
          width: 100,
          backgroundColor: '#06BEBD',
          borderRadius: 75,
          alignSelf: 'center',
          fontSize: 12,
          marginTop: '15%',
        }}
        // onPress={() => console.log(".......", new Date().toLocaleDateString())}
        onPress={() => markAttendence()}
      />
      <Text style={{ alignSelf: 'center', fontSize: 12, margin: 5 }}>(Click on Punch Button for Marking Your Attendence)</Text>
      <View style={{
        height: 40,
        width: 220,
        backgroundColor: '#06BEBD',
        margin: 5,
        alignSelf: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Text style={{ ...styles.switchTab, backgroundColor: tabs == 'Daily' ? '#fff' : 'transparent' }} onPress={() => setTabs('Daily')}>DAILY</Text>
        <Text style={{ ...styles.switchTab, backgroundColor: tabs == 'Monthly' ? '#fff' : 'transparent' }} onPress={() => setTabs('Monthly')} >MONTHLY</Text>
      </View>

      {/* <Text>{date}</Text> */}

      <Text style={{ alignSelf: 'center', margin: 15, backgroundColor: '#9daaaa', padding: 5, paddingHorizontal: 25 }}>{date}</Text>

      <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'center' }}>

        <Text style={{ borderColor: '#06BEBD', borderWidth: 1, width: '17%', textAlign: 'center' }}>DATE</Text>
        <Text style={styles.tableHeading}>P1</Text>
        <Text style={styles.tableHeading}>P2</Text>
        <Text style={styles.tableHeading}>P3</Text>
        <Text style={styles.tableHeading}>P4</Text>
        <Text style={styles.tableHeading}>P5</Text>
        <Text style={styles.tableHeading}>P6</Text>
      </View>

      <FlatList

        keyExtractor={(item, index) => index.toString()}
        data={punchRes}
        style={{ height: 'auto', }}
        renderItem={({ item, index }) => (
          // console.log("......",date),
          <View style={{
            flexDirection: 'row',
            // borderBottomWidth: 0.5,
            width: '95%',
            backgroundColor: '#fff',
            alignSelf: 'center',
            // margin: '',
          }}
          >
            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', width: '100%' }}>

              <Text style={{ borderColor: '#06BEBD', borderWidth: 1, width: '17%', textAlign: 'center', fontSize: 10 }}>{item.PUNCH_DATE}</Text>
              <Text style={{ ...styles.tableData, backgroundColor: tableColor(item.PUNCH[0])}}>{item.PUNCH[0]}</Text>
              <Text style={{ ...styles.tableData, backgroundColor: tableColor(item.PUNCH[1])  }}>{item.PUNCH[1]}</Text>
              <Text style={{ ...styles.tableData, backgroundColor: tableColor(item.PUNCH[2])  }}>{item.PUNCH[2]}</Text>
              <Text style={{ ...styles.tableData, backgroundColor: tableColor(item.PUNCH[3])  }}>{item.PUNCH[3]}</Text>
              <Text style={{ ...styles.tableData, backgroundColor: tableColor(item.PUNCH[4])  }}>{item.PUNCH[4]}</Text>
              <Text style={{ ...styles.tableData, backgroundColor: tableColor(item.PUNCH[5])  }}>{item.PUNCH[5]}</Text>
            </View>
          </View>
        )}
      />
      {/* </Vi/ew> */}

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
  switchTab: {
    // backgroundColor:'#fff',
    height: '85%',
    width: '45%',
    fontSize: 14,
    borderRadius: 50,
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 7,
  },
  tableHeading: {
    borderColor: '#06BEBD',
    borderWidth: 1.5,
    width: '13%',
    textAlign: 'center',

  },
  tableData: {
    borderColor: '#06BEBD',
    borderWidth: 1.5,
    width: '13%',
    textAlign: 'center',
  }
});

export default Punch;
