import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";

const Recommend13Emotion = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { childAge } = route.params || {}; 
  
  return (
    <View style={styles.recommend13emotion}>
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
      <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text
          style={[styles.theBabyCan, styles.theTypo]}
        >{`The baby can soothe himself for a moment
 by taking his hand to his mouth and 
withdrawing it`}</Text>
      </Pressable>
      <Text style={[styles.category, styles.homeFlexBox]}>Category</Text>
      <Text style={[styles.emotionDevelopment, styles.homeFlexBox]}>
        Emotion Development
      </Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text
          style={[styles.theBabyStarts, styles.theTypo]}
        >{`The baby starts to smile 
at people and tries to see their parents`}</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleContainer, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Movement")}
      >
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.acrobaticsIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.motionTypo]}>Motion</Text>
      </Pressable>


      <Pressable style={[styles.groupPressable, styles.rectangleParentLayout]}
       onPress={() => navigation.navigate("Recommend13Recognition")}>
        <Pressable
          style={[styles.groupChild1, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.motionTypo]}>Recognition</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Language")}
      >
        <Pressable
          style={[styles.groupChild2, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.motionTypo]}>Speech</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentLayout]}
      >
        <View style={[styles.rectangleView, styles.groupChildShadowBox, {backgroundColor: '#1F1F45'}]} />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.motionTypo]}>Emotion</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent3, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Sense")}
      >
        <Pressable
          style={[styles.groupChild3, styles.groupChildShadowBox]}
        />
        <Text style={styles.sense}>Sense</Text>
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
  theTypo: {
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
  motionTypo: {
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
    width: 31,
    height: 30,
    left: 17,
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
  theBabyCan: {
    top: 2,
    left: 17,
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
  emotionDevelopment: {
    top: 236,
    left: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  theBabyStarts: {
    top: 9,
    left: 31,
  },
  rectangleGroup: {
    top: 334,
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
  rectangleContainer: {
    left: 30,
  },
  groupChild1: {
    backgroundColor: Color.colorWhite,
  },
  bookIcon: {
    height: 40,
    top: 10,
  },
  recognition: {
    left: 6,
  },
  groupPressable: {
    left: 91,
  },
  groupChild2: {
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  rectangleParent1: {
    left: 152,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkslateblue,
  },
  emotion: {
    left: 13,
  },
  rectangleParent2: {
    left: 213,
  },
  groupChild3: {
    backgroundColor: Color.colorWhite,
  },
  sense: {
    left: 16,
    color: "#e5d2c4",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 52,
    textAlign: "left",
    position: "absolute",
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
  },
  rectangleParent3: {
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
  recommend13emotion: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend13Emotion;
