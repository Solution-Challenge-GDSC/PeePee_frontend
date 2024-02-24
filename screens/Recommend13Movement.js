import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";

const Recommend13Movement = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { childAge } = route.params || {}; 
  console.log("Child's Age:", childAge); 


  const [isBackgroundVisible1, setBackgroundVisible1] = useState(false);
  const [isBackgroundVisible2, setBackgroundVisible2] = useState(false);
  const [isBackgroundVisible3, setBackgroundVisible3] = useState(false);
  const [isBackgroundVisible4, setBackgroundVisible4] = useState(false);
  const [isBackgroundVisible5, setBackgroundVisible5] = useState(false);
  const [isBackgroundVisible6, setBackgroundVisible6] = useState(false);
  const [isBackgroundVisible7, setBackgroundVisible7] = useState(false);


  const toggleBackground1 = () => {
    setBackgroundVisible1(!isBackgroundVisible1);
  };
  const toggleBackground2 = () => {
    setBackgroundVisible2(!isBackgroundVisible2);
  };
  const toggleBackground3 = () => {
    setBackgroundVisible3(!isBackgroundVisible3);
  };
  const toggleBackground4 = () => {
    setBackgroundVisible4(!isBackgroundVisible4);
  };
  const toggleBackground5 = () => {
    setBackgroundVisible5(!isBackgroundVisible5);
  };
  const toggleBackground6 = () => {
    setBackgroundVisible6(!isBackgroundVisible6);
  };
  const toggleBackground7 = () => {
    setBackgroundVisible7(!isBackgroundVisible7);
  };


  return (
    <View style={styles.recommend13movement}>
      <Text style={[styles.movementDevelopment, styles.homeTypo]}>
        Movement Development
      </Text>

      <Pressable 
        style={[
          styles.rectangleParent, 
          styles.rectangleGroupLayout,
        ]}
        onPress={toggleBackground1} // 클릭할 때마다 배경색상을 토글합니다.
      >
        <View style={[styles.groupChildShadowBox1, isBackgroundVisible1 && { backgroundColor: '#FAF4C0' }]} />
        <Text
          style={[styles.theBabysHand, styles.theTypo]}
        >{`The baby's hand begins to stretch out,
 and sometimes he is sucking his fingers`}</Text>
      </Pressable>
      
      <Pressable 
  style={[
    styles.rectangleGroup, 
    styles.rectangleGroupLayout,
  ]}
  onPress={toggleBackground2} // 클릭할 때마다 배경색상을 토글합니다.
>
  <View style={[styles.groupChildShadowBox1, isBackgroundVisible2 && { backgroundColor: '#FAF4C0' }]} />
  <Text style={[styles.armsAndLegs, isBackgroundVisible2 && { color: '#000' }]}>Arms and legs become active</Text>
</Pressable>

<Pressable
  style={[
    styles.rectangleContainer, 
    styles.rectangleGroupLayout
  ]}
  onPress={toggleBackground3} // 클릭할 때마다 배경색상을 토글합니다.
>
  <View style={[styles.groupChildShadowBox1, isBackgroundVisible3 && { backgroundColor: '#FAF4C0' }]} />
  <Text 
    style={[
      styles.theHipAnd, 
      styles.theTypo, 
      isBackgroundVisible3 && { color: '#000' } // 배경색상이 보이는 경우에만 텍스트 색상을 변경합니다.
    ]}
  >
    {`The hip and knee joints become more flexible,
    and the kicking power becomes stronger`}
  </Text>
</Pressable>

<Pressable 
  style={[
    styles.groupPressable, 
    styles.rectangleGroupLayout
  ]}
  onPress={toggleBackground4} // 클릭할 때마다 배경색상을 토글합니다.
>
  <View style={[styles.groupChildShadowBox1, isBackgroundVisible4 && { backgroundColor: '#FAF4C0' }]} />
  <Text 
    style={[
      styles.youCanTurn, 
      styles.theTypo, 
      isBackgroundVisible4 && { color: '#000' } // 배경색상이 보이는 경우에만 텍스트 색상을 변경합니다.
    ]}
  >
    {`You can turn your head from
    side to side in a prone position`}
  </Text>
</Pressable>

<Pressable 
  style={[
    styles.rectangleParent1, 
    styles.rectangleGroupLayout
  ]}
  onPress={toggleBackground5} // 클릭할 때마다 배경색상을 토글합니다.
>
  <View style={[styles.groupChildShadowBox1, isBackgroundVisible5 && { backgroundColor: '#FAF4C0' }]} />
  <Text 
    style={[
      styles.imStartingTo, 
      styles.myLegsBeginTypo, 
      isBackgroundVisible5 && { color: '#000' } // 배경색상이 보이는 경우에만 텍스트 색상을 변경합니다.
    ]}
  >
    I'm starting to gradually cut my throat
  </Text>
</Pressable>

<Pressable 
  style={[
    styles.rectangleParent2, 
    styles.rectangleGroupLayout
  ]}
  onPress={toggleBackground6} // 클릭할 때마다 배경색상을 토글합니다.
>
  <View style={[styles.groupChildShadowBox1, isBackgroundVisible6 && { backgroundColor: '#FAF4C0' }]} />
  <Text 
    style={[
      styles.myLegsBegin, 
      styles.myLegsBeginTypo, 
      isBackgroundVisible6 && { color: '#000' } // 배경색상이 보이는 경우에만 텍스트 색상을 변경합니다.
    ]}
  >
    My legs begin to straighten out
  </Text>
</Pressable>

<Pressable 
  style={[
    styles.rectangleParent3, 
    styles.rectangleGroupLayout
  ]}
  onPress={toggleBackground7} // 클릭할 때마다 배경색상을 토글합니다.
>
  <View style={[styles.groupChildShadowBox1, isBackgroundVisible7 && { backgroundColor: '#FAF4C0' }]} />
  <Text 
    style={[
      styles.theHipAnd, 
      styles.theTypo, 
      isBackgroundVisible7 && { color: '#000' } // 배경색상이 보이는 경우에만 텍스트 색상을 변경합니다.
    ]}
  >
    Movement becomes active, such as swinging arms at moving objects
  </Text>
</Pressable>



      <View style={styles.pleaseSelectAllOfTheItemsWrapper}>
        <Text
          style={[styles.pleaseSelectAll, styles.finishLayout]}
        >{`Please select all of the items below 
that correspond to your child's developmental status`}</Text>
      </View>


      <Text style={[styles.category, styles.homeTypo]}>Category</Text>


      <Pressable
        style={[styles.rectangleParent4, styles.rectangleParentLayout]}
      >
        <View style={[styles.groupChild4, styles.groupChildShadowBox, {backgroundColor: '#1F1F45'}]} />
        <Image
          style={[styles.acrobaticsIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent5, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Recognition")}
      >
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent6, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Language")}
      >
        <Pressable
          style={[styles.groupChild5, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent7, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Emotion")}
      >
        <Pressable
          style={[styles.groupChild6, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent8, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Sense")}
      >
        <Pressable
          style={[styles.groupChild7, styles.groupChildShadowBox]}
         
        />
        <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/tongue-out.png")}
        />
      </Pressable>

      
      <View style={[styles.ellipseParent, styles.ellipseIconLayout]}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.sortLeftIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <View style={styles.groupChild8} />
      </View>
      <Text style={[styles.finish, styles.finishLayout]}>Finish</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleGroupLayout: {
    height: 50,
    width: 300,
    left: 29,
    position: "absolute",
  },
  theTypo: {
    textAlign: "center",
    top: 9,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  myLegsBeginTypo: {
    top: 17,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  finishLayout: {
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 80,
    width: 55,
    top: 126,
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 7,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    height: 80,
    width: 55,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition1: {
    top: 10,
    height: 40,
  },
  senseTypo: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 52,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: 12,
    width: 30,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 30,
    position: "absolute",
  },
  movementDevelopment: {
    top: 236,
    left: 29,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupChildShadowBox1: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 50,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  theBabysHand: {
    left: 27,
  },
  rectangleParent: {
    top: 274,
  },
  armsAndLegs: {
    top: 18,
    left: 74,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 334,
  },
  theHipAnd: {
    left: 10,
  },
  rectangleContainer: {
    top: 394,
  },
  youCanTurn: {
    left: 55,
  },
  groupPressable: {
    top: 454,
  },
  imStartingTo: {
    left: 35,
  },
  rectangleParent1: {
    top: 514,
  },
  myLegsBegin: {
    left: 55,
  },
  rectangleParent2: {
    top: 574,
  },
  rectangleParent3: {
    top: 634,
  },
  pleaseSelectAll: {
    left: 28,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
    top: 0,
  },
  pleaseSelectAllOfTheItemsWrapper: {
    top: 743,
    width: 303,
    height: 40,
    left: 13,
    position: "absolute",
  },
  category: {
    top: 88,
    left: 30,
  },
  groupChild4: {
    backgroundColor: Color.colorDarkslateblue,
  },
  acrobaticsIcon: {
    width: 30,
    left: 13,
    position: "absolute",
  },
  motion: {
    left: 15,
  },
  rectangleParent4: {
    left: 30,
  },
  rectanglePressable: {
    backgroundColor: Color.colorWhite,
  },
  bookIcon: {
    top: 10,
    height: 40,
  },
  recognition: {
    left: 6,
  },
  rectangleParent5: {
    left: 91,
  },
  groupChild5: {
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  rectangleParent6: {
    left: 152,
  },
  groupChild6: {
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent7: {
    left: 213,
  },
  groupChild7: {
    backgroundColor: Color.colorWhite,
  },
  sense: {
    left: 16,
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
  },
  rectangleParent8: {
    left: 274,
  },
  ellipseIcon: {
    left: 1,
    width: 30,
    top: 0,
  },
  sortLeftIcon: {
    width: 30,
    left: 0,
    height: 30,
    top: 0,
  },
  home: {
    top: 6,
    left: 41,
  },
  groupChild8: {
    top: 3,
    left: 84,
    backgroundColor: "rgba(217, 217, 217, 0)",
    width: 230,
    height: 27,
    position: "absolute",
  },
  ellipseParent: {
    top: 28,
    left: 17,
    width: 314,
  },
  finish: {
    top: 722,
    left: 254,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
  },
  recommend13movement: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend13Movement;
