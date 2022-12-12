import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Button,
  // ViewPagerAndroid,
} from "react-native";


// const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');

// const ViewPager = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;

//   const { width: windowWidth } = useWindowDimensions();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.scrollContainer}>
//         <ScrollView
//           horizontal={true}
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={Animated.event([
//             {
//               nativeEvent: {
//                 contentOffset: {
//                   x: scrollX
//                 }
//               }
//             }
//           ])}
//           scrollEventThrottle={1}
//         >
//           {images.map((image, imageIndex) => {
//             return (
//               <View
//                 style={{ width: windowWidth, height: 250 }}
//                 key={imageIndex}
//               >
//                 <ImageBackground source={{ uri: image }} style={styles.card}>
//                   <View style={styles.textContainer}>
//                     <Text style={styles.infoText}>
//                       {"Image - " + imageIndex}
//                     </Text>
//                   </View>
//                 </ImageBackground>
//               </View>
//             );
//           })}
//         </ScrollView>
//         <View style={styles.indicatorContainer}>
//           {images.map((image, imageIndex) => {
//             const width = scrollX.interpolate({
//               inputRange: [
//                 windowWidth * (imageIndex - 1),
//                 windowWidth * imageIndex,
//                 windowWidth * (imageIndex + 1)
//               ],
//               outputRange: [8, 16, 8],
//               extrapolate: "clamp"
//             });
//             return (
//               <Animated.View
//                 key={imageIndex}
//                 style={[styles.normalDot, { width }]}
//               />
//             );
//           })}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   scrollContainer: {
//     height: 300,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   card: {
//     flex: 1,
//     marginVertical: 4,
//     marginHorizontal: 16,
//     borderRadius: 5,
//     overflow: "hidden",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   textContainer: {
//     backgroundColor: "rgba(0,0,0, 0.7)",
//     paddingHorizontal: 24,
//     paddingVertical: 8,
//     borderRadius: 5
//   },
//   infoText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   normalDot: {
//     height: 8,
//     width: 8,
//     borderRadius: 4,
//     backgroundColor: "silver",
//     marginHorizontal: 4
//   },
//   indicatorContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default ViewPager;


export default ViewPager = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  let animate = React.useRef(new Animated.Value(180)).current;
  const myRef=useRef(null)

  animate.addListener(({ value }) => {
    current = value;
  });

  // const rotateValueHolder = React.useRef(new Animated.Value("0deg")).current;
  React.useEffect(() => {
    Animated.loop
      (Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.6,
          duration: 100,
          useNativeDriver: false
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 200,
          useNativeDriver: false
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 200,
          useNativeDriver: false
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 500,
          useNativeDriver: false
        })
      ]),
        { iterations: -1 }).start();
  },);
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animate, {
        toValue: 0,
        tension: 5,
        friction: 5,
        duration: 1000,
        useNativeDriver: false,
        iterations: -1
      })).start();
  });
  const setInterpolate = animate.interpolate({
    inputRange: [0, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160, 170, 180],
    outputRange: ['0deg', '30deg', '40deg', '50deg', '60deg', '70deg', '80deg', '90deg', '100deg', '120deg', '130deg', '140deg', '150deg', '160deg', '170deg', '180deg'],
    // outputRange: ['10deg','20deg','30deg','40deg','50deg','60deg','70deg','80deg','90deg'],
  });

  React.useEffect(() => {

    // console.
  })

  return (

    < View style={{ flex: 1, backgroundColor: '#000', }}>
      {/* <Animated.Text style={[styles.text,{ textShadowRadius: fadeAnim }]}>PRINCE </Animated.Text> */}
      <View style={{ flexDirection: 'row', alignSelf: 'center', top: '50%', backgroundColor: '#fff', height: 200, width: 200 }}>
        <Animated.View 
        ref={myRef}
        style={{
          height: 120, width: 120, backgroundColor: 'blue', marginLeft: 25, position: 'absolute',
           opacity: fadeAnim,
           transform: [{ rotateY: setInterpolate }]
        }} />
        <Animated.View style={{
          height: 120, width: 120, backgroundColor: 'royalblue', position: 'absolute', top: 25,
          transform: [{ rotateY: setInterpolate }]
        }} />
        <Animated.View style={{
          height: 120, width: 30, backgroundColor: 'blue', top: 25,
          transform: [{rotateY:setInterpolate},]
        }} />
      <Button title="ok" onPress={()=>{
        myRef.current._internalFiberInstanceHandleDEV.alternate.mode="hide",
        console.log(".....", myRef.current._internalFiberInstanceHandleDEV.alternate.mode);
      }}/>
      </View>
      {/* <Animated.Text style={[styles.text,{ textShadowRadius: fadeAnim }]}>PRINCE </Animated.Text> */}
    </View>
  )
}

const styles = StyleSheet.create({

  text:
  {
    fontSize: 30,
    backgroundColor: 'transparent',
    color: '#f0f',
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
    textShadowColor: '#red',
    textShadowOffset: {
      height: 15, width: 15
    },
    // textShadowRadius: 40,
    // shadowColor: 'red',
    // shadowOffset: {
    //   height: 30, width: 30
    // }
  }
})



