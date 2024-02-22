import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Recommend13Emotion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommend13emotion}>
      <Image
        style={[styles.recommend13emotionChild, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.sortLeftIcon, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/sort-left1.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text
          style={[styles.text, styles.textTypo]}
        >{`손을 입으로 가져가서 손을 빠는 행위를 통해 
잠깐 스스로를 달랠 수 있다`}</Text>
      </Pressable>
      <Text style={[styles.category, styles.homeTypo]}>Category</Text>
      <Text style={[styles.emotionDevelopment, styles.homeTypo]}>
        Emotion Development
      </Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text
          style={[styles.text1, styles.textTypo]}
        >{`사람들에게 미소를 짓기 시작하며 
부모를 보려고 노력한다`}</Text>
      </Pressable>
      <Text style={[styles.text2, styles.text2Layout]}>
        아래의 항목 중 아이의 발달 상태에 해당하는 항목을 모두 골라주세요
      </Text>
      <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupInner, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Movement")}
        />
        <Image
          style={[styles.acrobaticsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.motionTypo]}>Motion</Text>
      </View>
      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Recognition")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.motionTypo]}>Recognition</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild1, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Language")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.motionTypo]}>Speech</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.rectangleView, styles.rectangleViewBg]} />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.motionTypo]}>Emotion</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild2, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Sense")}
        />
        <Text style={styles.sense}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/tongue-out.png")}
        />
      </View>
      <View style={[styles.recommend13emotionItem, styles.rectangleViewBg]} />
      <Text style={[styles.finish, styles.text2Layout]}>Finish</Text>
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
  rectangleLayout: {
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
    top: 9,
    position: "absolute",
  },
  text2Layout: {
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
  },
  iconLayout: {
    height: 40,
    top: 10,
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
  rectangleViewBg: {
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  recommend13emotionChild: {
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
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    height: 50,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    left: 30,
  },
  rectangleParent: {
    top: 274,
  },
  category: {
    top: 88,
    left: 30,
  },
  emotionDevelopment: {
    top: 236,
    left: 30,
  },
  text1: {
    left: 60,
  },
  rectangleGroup: {
    top: 334,
  },
  text2: {
    top: 760,
    left: 36,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
  },
  groupInner: {
    position: "absolute",
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    left: 13,
    width: 30,
    top: 10,
    position: "absolute",
  },
  motion: {
    left: 15,
  },
  rectangleContainer: {
    left: 30,
  },
  rectanglePressable: {
    position: "absolute",
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
  groupView: {
    left: 91,
  },
  groupChild1: {
    position: "absolute",
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  rectangleParent1: {
    left: 152,
  },
  rectangleView: {
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
  },
  emotion: {
    left: 13,
  },
  rectangleParent2: {
    left: 213,
  },
  groupChild2: {
    position: "absolute",
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
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
  recommend13emotionItem: {
    top: 713,
    left: 224,
    width: 105,
    height: 37,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslateblue,
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
  recommend13emotion: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend13Emotion;
