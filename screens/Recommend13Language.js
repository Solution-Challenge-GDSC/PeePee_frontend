import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Recommend13Language = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommend13language}>
      <Image
        style={[styles.recommend13languageChild, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.sortLeftIcon, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/sort-left1.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleGroupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={styles.text}>
          기분이 좋을 때는 입을 오물거리며 옹알이를 한다
        </Text>
      </Pressable>
      <Text style={[styles.category, styles.homeTypo]}>Category</Text>
      <Text style={[styles.languageDevelopment, styles.homeTypo]}>
        Language Development
      </Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text
          style={[styles.text1, styles.textTypo]}
        >{`엄마가 아기의 옹알이를 응답하면 신이 나서 알 수 
없는 말을 옹알거리거나 기뻐서 크게 웃기도 한다`}</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleGroupLayout]}
      >
        <View style={styles.groupShadowBox} />
        <Text
          style={[styles.text2, styles.textTypo]}
        >{`엄마 얼굴을 보고 웃는 사회적 미소가 나타나기도 하며 
소리가 나는 쪽으로 머리를 돌린다`}</Text>
      </Pressable>
      <Pressable style={[styles.groupPressable, styles.rectangleGroupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.text3, styles.textTypo]}>
          구르르 하면서 목을 울리는 소리를 낸다
        </Text>
      </Pressable>
      <Text style={[styles.text4, styles.text4Layout]}>
        아래의 항목 중 아이의 발달 상태에 해당하는 항목을 모두 골라주세요
      </Text>
      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Movement")}
        />
        <Image
          style={[styles.acrobaticsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild1, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Recognition")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild3, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Emotion")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild4, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Sense")}
        />
        <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/tongue-out.png")}
        />
      </View>
      <View style={[styles.rectangleParent5, styles.groupChild5Layout]}>
        <View style={[styles.groupChild5, styles.groupChild5Layout]} />
        <Text style={[styles.finish, styles.text4Layout]}>Finish</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortLeftIconLayout: {
    height: 30,
    top: 28,
    width: 30,
    position: "absolute",
  },
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
  textTypo: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  text4Layout: {
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
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    top: 10,
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
  groupChildPosition: {
    backgroundColor: Color.colorDarkslateblue,
    left: 0,
    top: 0,
  },
  groupChild5Layout: {
    height: 37,
    width: 105,
    position: "absolute",
  },
  recommend13languageChild: {
    left: 18,
  },
  sortLeftIcon: {
    left: 17,
  },
  home: {
    top: 34,
    left: 58,
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
    left: 0,
    top: 0,
    height: 50,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    left: 21,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 17,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 274,
  },
  category: {
    top: 88,
    left: 30,
  },
  languageDevelopment: {
    top: 236,
    left: 30,
  },
  text1: {
    left: 16,
    top: 9,
  },
  rectangleGroup: {
    top: 334,
  },
  text2: {
    left: 7,
    top: 9,
  },
  rectangleContainer: {
    top: 394,
  },
  text3: {
    left: 48,
    top: 17,
    textAlign: "center",
  },
  groupPressable: {
    top: 454,
  },
  text4: {
    top: 760,
    left: 36,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
  },
  rectanglePressable: {
    left: 0,
    top: 0,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    left: 13,
    width: 30,
    position: "absolute",
    top: 10,
  },
  motion: {
    left: 15,
  },
  groupView: {
    left: 30,
  },
  groupChild1: {
    left: 0,
    top: 0,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
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
  groupChild2: {
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
    position: "absolute",
  },
  speech: {
    left: 14,
  },
  rectangleParent2: {
    left: 152,
  },
  groupChild3: {
    left: 0,
    top: 0,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent3: {
    left: 213,
  },
  groupChild4: {
    left: 0,
    top: 0,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
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
  groupChild5: {
    backgroundColor: Color.colorDarkslateblue,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    width: 105,
  },
  finish: {
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    top: 9,
    left: 30,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
  },
  rectangleParent5: {
    top: 713,
    left: 224,
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
