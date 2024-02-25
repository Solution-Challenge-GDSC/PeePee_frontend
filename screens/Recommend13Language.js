import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { toggleBackground, isBackgroundVisible, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";


const Recommend13Language = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { childAge } = route.params || {}; 
  
  const [isBackgroundVisible1, setBackgroundVisible1] = useState(false);
  const [isBackgroundVisible2, setBackgroundVisible2] = useState(false);
  const [isBackgroundVisible3, setBackgroundVisible3] = useState(false);
  const [isBackgroundVisible4, setBackgroundVisible4] = useState(false);

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
  return (
    <View style={styles.recommend13language}>
                <Pressable
    onPress={() => navigation.navigate("Main")}
  >
      <View style={styles.ellipseParent}>
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
      </View>
      </Pressable>
      <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>


      <Pressable 
      style={[
        styles.rectangleParent,
        styles.rectangleLayout,
      ]}
      onPress={toggleBackground1}
    >
      <View style={[styles.groupShadowBox  ,  { backgroundColor: isBackgroundVisible1 ? '#FFC045' : 'transparent' }]} />
        <Text style={styles.whenABaby}>{`When a baby is in a good mood, 
he mumbles and babbles`}</Text>
      </Pressable>

      <Text style={[styles.category, styles.homeFlexBox]}>Category</Text>
      <Text style={[styles.languageDevelopment, styles.homeFlexBox]}>
        Speech Development
      </Text>


      <Pressable 
      style={[ styles.rectangleGroup, styles.rectangleLayout  ]}
      onPress={toggleBackground2}
    >
      <View style={[styles.groupShadowBox  ,  { backgroundColor: isBackgroundVisible2 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.whenAMother, styles.whenAMotherTypo]}
        >{`When a mother responds to her 
baby's babbling, she mumbles or laughs loudly
 with joy`}</Text>
      </Pressable>

      <Pressable
      style={[styles.recommend13languageInner, styles.rectangleLayout ]}
      onPress={toggleBackground4}
    >
    <View style={[styles.groupShadowBox  ,  { backgroundColor: isBackgroundVisible4 ? '#FFC045' : 'transparent' }]} />
              <Text
           style={[styles.ifActivitiesDo, styles.ifActivitiesDoTypo]}
      >{`A baby sometimes has a social smile
 on his mother's face and turns his head
 toward the sound`}</Text>
      </Pressable>


      <Pressable       
        style={[styles.rectangleContainer, styles.rectangleLayout ]}
        onPress={toggleBackground3}
      >
      <View style={[styles.groupShadowBox  ,  { backgroundColor: isBackgroundVisible3 ? '#FFC045' : 'transparent' }]} />
        <Text style={[styles.makeARoaring, styles.whenAMotherTypo]}>
          Make a roaring sound
        </Text>
      </Pressable>

      <Pressable style={[styles.groupPressable, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Movement")}
        />
        <Image
          style={[styles.acrobaticsIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Recognition")}
      >
        <Pressable
          style={[styles.groupChild2, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentLayout]}
      >
        <View style={[styles.groupChild3, styles.groupChildShadowBox, {backgroundColor: '#1F1F45'}]} />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent3, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Emotion")}
      >
        <Pressable
          style={[styles.groupChild4, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent4, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Sense")}
      >
        <Pressable
          style={[styles.groupChild5, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Sense")}
        />
        <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/tongue-out.png")}
        />
      </Pressable>


      <View style={styles.pleaseSelectAllOfTheItemsWrapper}>
        <Text
          style={[styles.pleaseSelectAll, styles.homeFlexBox]}
        >{`Please select all of the items below 
that correspond to your child's developmental status`}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 30,
    position: "absolute",
  },
  ifActivitiesDoTypo: {
    textAlign: "center",
    top: 2,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  ifActivitiesDo: {
    left: 23,
  },
  homeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 50,
    width: 300,
    left: 29,
    position: "absolute",
  },
  whenAMotherTypo: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
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
  groupChild: {
    left: 1,
    top: 0,
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
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  groupShadowBox: {
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
    height: 50,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  whenABaby: {
    top: 9,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 274,
  },
  category: {
    top: 88,
    left: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  languageDevelopment: {
    top: 236,
    left: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  whenAMother: {
    top: 1,
    left: 4,
  },
  rectangleGroup: {
    top: 334,
  },
  recommend13languageInner: {
    top: 394,
  },
  makeARoaring: {
    top: 17,
    left: 85,
  },
  rectangleContainer: {
    top: 454,
  },
  rectanglePressable: {
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    height: 40,
    left: 13,
    width: 30,
    position: "absolute",
  },
  motion: {
    left: 15,
  },
  groupPressable: {
    left: 30,
  },
  groupChild2: {
    backgroundColor: Color.colorWhite,
  },
  bookIcon: {
    height: 40,
    top: 10,
  },
  recognition: {
    left: 6,
  },
  rectangleParent1: {
    left: 91,
  },
  groupChild3: {
    backgroundColor: Color.colorDarkslateblue,
  },
  speech: {
    left: 14,
  },
  rectangleParent2: {
    left: 152,
  },
  groupChild4: {
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent3: {
    left: 213,
  },
  groupChild5: {
    backgroundColor: Color.colorWhite,
  },
  sense: {
    left: 16,
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
  },
  rectangleParent4: {
    left: 274,
  },
  pleaseSelectAll: {
    left: 28,
    fontSize: FontSize.size_3xs,
    lineHeight: 20,
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
  aBabySometimes: {
    top: 395,
    left: 50,
    textAlign: "center",
  },
  recommend13language: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend13Language;
