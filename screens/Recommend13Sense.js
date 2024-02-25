import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles2";
import { useRoute } from "@react-navigation/native";


const Recommend13Sensee = () => {
  const navigation = useNavigation();

  
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


  const route = useRoute();
const { childAge } = route.params || {}; // "childAge"가 없는 경우에 대비하여 기본값으로 빈 객체를 설정합니다.

  const loadings = ["Loding", "Loding1", "Loding2", "Loding3", "Loding4"];

  const goToRandomLoadingPage = () => {
    // loadings 배열에서 랜덤하게 페이지를 선택합니다.
    const randomIndex = Math.floor(Math.random() * loadings.length);
    const randomLoadingPage = loadings[randomIndex];

    // 선택된 페이지로 네비게이션을 수행합니다.
    navigation.navigate(randomLoadingPage);
  };
  
  return (
    <View style={styles.recommend13sensee}>
      <Pressable style={styles.ellipseParent}
       onPress={() => navigation.navigate("Main")}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.sortLeftIcon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.category, styles.homeTypo]}>Category</Text>
      <Text style={[styles.senseDevelopment, styles.homeTypo]}>
        Sense Development
      </Text>


      <Pressable
      style={[
        styles.rectangleParent, styles.rectangleParentLayout1
          ]}
          onPress={toggleBackground1}
        >
          <View style={[styles.groupChildShadowBox1  ,  { backgroundColor: isBackgroundVisible1 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.theBabyCan, styles.theTypo]}
        >{`The baby can follow the movement
 of the toy with its eyes.`}</Text>
      </Pressable>

      <Pressable 
      style={[
      styles.rectangleGroup, styles.rectanglePosition ]}
     onPress={toggleBackground2}
      >
     <View style={[styles.groupChildShadowBox1  ,  { backgroundColor: isBackgroundVisible2 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.whenAChild, styles.theTypo]}
        >{`When a child wears a mobile
 (black and white mobile -> color mobile),
 he looks at it`}</Text>
      </Pressable>


      <Pressable
      style={[
        styles.rectangleContainer, styles.groupPressablePosition]}
       onPress={toggleBackground3}
        >
       <View style={[styles.groupChildShadowBox1  ,  { backgroundColor: isBackgroundVisible3 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.theBabyReacts, styles.thePosition]}
        >{`The baby reacts by separating
 the mother's voice`}</Text>
      </Pressable>
    
      <Pressable
      style={[
        styles.groupPressable, styles.groupPressablePosition]}
       onPress={toggleBackground4}
        >
       <View style={[styles.groupChildShadowBox1  ,  { backgroundColor: isBackgroundVisible4 ? '#FFC045' : 'transparent' }]} />
        <Text style={styles.theBabyTurns}>{`The baby turns his head
 toward the sound.`}</Text>
      </Pressable>

      <Pressable
      style={[
        styles.rectangleParent1, styles.rectangleParentLayout1]}
       onPress={toggleBackground5}
        >
       <View style={[styles.groupChildShadowBox1  ,  { backgroundColor: isBackgroundVisible5 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.theBabyCan1, styles.thePosition]}
        >{`The baby can hear the doorbell 
and the telephone ringing distinctly`}</Text>
      </Pressable>


      <Pressable
      style={[
        styles.rectangleParent2, styles.rectangleParentLayout1]}
       onPress={toggleBackground6}
        >
       <View style={[styles.groupChildShadowBox1  ,  { backgroundColor: isBackgroundVisible6 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.theBabysSense, styles.thePosition]}
        >{`The baby's sense of smell is sensitive 
enough to turn his head toward the smell`}</Text>
      </Pressable>



      <Pressable
      style={[
        styles.rectangleParent3, styles.rectanglePosition]}
       onPress={toggleBackground7}
        >
       <View style={[styles.groupChildShadowBox1  ,  { backgroundColor: isBackgroundVisible7 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.thereAreCertain, styles.theTypo]}
        >{`There are certain flavors that 
the baby prefers.`}</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent4, styles.rectangleParentLayout]}
      >
        <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
        <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/tongue-out.png")}
        />
      </Pressable>


      <Pressable
        style={[styles.rectangleParent5, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Movement")}
      >
        <View style={[styles.groupChild6, styles.groupChildShadowBox]} />
        <Image
          style={[styles.acrobaticsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent6, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Recognition")}
      >
        <View style={[styles.groupChild7, styles.groupChildShadowBox]} />
        <Image
          style={[styles.bookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent7, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Language")}
      >
        <View style={[styles.groupChild8, styles.groupChildShadowBox]} />
        <Image
          style={[styles.bookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent8, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Emotion")}
      >
        <View style={[styles.groupChild9, styles.groupChildShadowBox]} />
        <Image
          style={[styles.bookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      </Pressable>


      <Pressable style={[styles.rectangleParent9, styles.groupChild10Layout]} onPress={goToRandomLoadingPage}>
      <View style={[styles.groupChild10, styles.groupChild10Layout]} />
      <Text style={[styles.finish, styles.thePosition]}>Finish</Text>
    </Pressable>


    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 30,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  rectangleParentLayout1: {
    height: 50,
    width: 300,
    left: 28,
    position: "absolute",
  },
  theTypo: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  rectanglePosition: {
    left: 27,
    height: 50,
    width: 300,
    position: "absolute",
  },
  groupPressablePosition: {
    left: 29,
    height: 50,
    width: 300,
    position: "absolute",
  },
  thePosition: {
    top: 9,
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
    borderColor: Color.colorGainsboro,
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
  senseTypo: {
    color: Color.colorGainsboro,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 52,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    top: 10,
    width: 30,
    position: "absolute",
  },
  groupChild10Layout: {
    height: 37,
    width: 105,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    top: 0,
    width: 30,
    height: 30,
  },
  sortLeftIcon: {
    left: 0,
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  ellipseParent: {
    top: 28,
    left: 17,
    width: 31,
    height: 30,
    position: "absolute",
  },
  home: {
    top: 34,
    left: 58,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  category: {
    top: 88,
    left: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  senseDevelopment: {
    top: 236,
    left: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupChildShadowBox1: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
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
    height: 50,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  theBabyCan: {
    left: 44,
    top: 8,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 274,
  },
  whenAChild: {
    top: 1,
    left: 23,
    position: "absolute",
    textAlign: "center",
  },
  rectangleGroup: {
    top: 334,
  },
  theBabyReacts: {
    left: 56,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  rectangleContainer: {
    top: 394,
  },
  theBabyTurns: {
    left: 72,
    top: 10,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupPressable: {
    top: 454,
  },
  theBabyCan1: {
    left: 45,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 9,
    textAlign: "left",
  },
  rectangleParent1: {
    top: 514,
  },
  theBabysSense: {
    left: 24,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  rectangleParent2: {
    top: 574,
  },
  thereAreCertain: {
    left: 55,
    top: 8,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent3: {
    top: 635,
  },
  groupChild5: {
    backgroundColor: Color.colorDarkslateblue,
  },
  sense: {
    left: 16,
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
    left: 12,
  },
  rectangleParent4: {
    left: 274,
  },
  groupChild6: {
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    left: 13,
  },
  motion: {
    left: 15,
  },
  rectangleParent5: {
    left: 30,
  },
  groupChild7: {
    backgroundColor: Color.colorWhite,
  },
  bookIcon: {
    left: 12,
  },
  recognition: {
    left: 6,
  },
  rectangleParent6: {
    left: 91,
  },
  groupChild8: {
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  rectangleParent7: {
    left: 152,
  },
  groupChild9: {
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent8: {
    left: 213,
  },
  groupChild10: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_3xs,
    width: 105,
    left: 0,
    top: 0,
  },
  finish: {
    letterSpacing: 0.5,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    left: 30,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: 9,
  },
  rectangleParent9: {
    top: 715,
    left: 135,
  },
  recommend13sensee: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend13Sensee;
