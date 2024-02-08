import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RecommendInputage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommendInputage}>
      <View style={styles.movementDevelopmentParent}>
        <Text style={styles.movementDevelopment}>Movement Development</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <Text style={[styles.text, styles.textTypo]}>
            목 가누기를 할 수 있으며 그 시도가 활발하다
          </Text>
          <Text style={styles.text1}>
            목 가누기를 할 수 있으며 그 시도가 활발하다
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>
            목 가누기를 할 수 있으며 그 시도가 활발하다
          </Text>
          <View style={[styles.rectangleView, styles.groupShadowBox]} />
          <Text style={[styles.text3, styles.textTypo]}>
            목 가누기를 할 수 있으며 그 시도가 활발하다
          </Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text4}>
          아래의 항목 중 아이의 발달 상태에 해당하는 항목을 모두 골라주세요
        </Text>
      </View>
      <View style={styles.categoryParent}>
        <Text style={styles.movementDevelopment}>Category</Text>
        <View style={styles.groupParent}>
          <Pressable
            style={[styles.rectangleGroup, styles.rectangleGroupLayout]}
          >
            <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
            <Image
              style={[styles.acrobaticsIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/acrobatics1.png")}
            />
            <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
          </Pressable>
          <Pressable
            style={[styles.rectangleContainer, styles.rectangleGroupLayout]}
          >
            <Pressable
              style={[styles.rectanglePressable, styles.groupChildShadowBox]}
              onPress={() => navigation.navigate("RecommendInputage4")}
            />
            <Image
              style={[styles.bookIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/book1.png")}
            />
            <Text style={[styles.recognition, styles.senseTypo]}>
              Recognition
            </Text>
          </Pressable>
          <Pressable
            style={[styles.groupPressable, styles.rectangleGroupLayout]}
          >
            <Pressable
              style={[styles.groupChild2, styles.groupChildShadowBox]}
              onPress={() => navigation.navigate("RecommendInputage3")}
            />
            <Image
              style={[styles.bookIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/voice3.png")}
            />
            <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
          </Pressable>
          <Pressable
            style={[styles.rectangleParent1, styles.rectangleGroupLayout]}
          >
            <Pressable
              style={[styles.groupChild3, styles.groupChildShadowBox]}
              onPress={() => navigation.navigate("RecommendInputage2")}
            />
            <Image
              style={[styles.bookIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/handmade1.png")}
            />
            <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
          </Pressable>
          <Pressable
            style={[styles.rectangleParent2, styles.rectangleGroupLayout]}
          >
            <Pressable
              style={[styles.groupChild4, styles.groupChildShadowBox]}
              onPress={() => navigation.navigate("RecommendInputage1")}
            />
            <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
            <Image
              style={[styles.tongueOutIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/tongue-out1.png")}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.ellipseParent, styles.ellipseIconLayout]}
        onPress={() => navigation.navigate("Recommend1")}
      >
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
        <View style={styles.groupChild5} />
      </Pressable>
      <View style={[styles.groupView, styles.groupLayout]}>
        <Pressable
          style={[styles.groupChild6, styles.groupLayout]}
          onPress={() => navigation.navigate("Recommend")}
        />
        <Text style={styles.finish}>Finish</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    height: 50,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    left: 0,
    width: 300,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    left: 25,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroupLayout: {
    width: 55,
    height: 80,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderRadius: Border.br_81xl,
    width: 55,
    height: 80,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition1: {
    top: 10,
    height: 40,
  },
  senseTypo: {
    color: Color.colorGainsboro_200,
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
  groupLayout: {
    height: 37,
    width: 105,
    position: "absolute",
  },
  movementDevelopment: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    height: 50,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  groupItem: {
    top: 60,
    backgroundColor: Color.colorGoldenrod_200,
    height: 50,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  groupInner: {
    top: 120,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    height: 50,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 17,
  },
  text1: {
    top: 77,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    left: 25,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text2: {
    top: 138,
  },
  rectangleView: {
    top: 180,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    height: 50,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorWhite,
  },
  text3: {
    top: 198,
  },
  rectangleParent: {
    height: 230,
    top: 38,
    left: 0,
    width: 300,
    position: "absolute",
  },
  movementDevelopmentParent: {
    top: 258,
    left: 29,
    height: 268,
    width: 300,
    position: "absolute",
  },
  text4: {
    left: 10,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
    lineHeight: 20,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  wrapper: {
    top: 750,
    left: 26,
    width: 303,
    height: 40,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorLightseagreen,
  },
  acrobaticsIcon: {
    width: 30,
    left: 13,
    position: "absolute",
  },
  motion: {
    left: 15,
  },
  rectangleGroup: {
    left: 0,
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
  rectangleContainer: {
    left: 61,
  },
  groupChild2: {
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  groupPressable: {
    left: 122,
  },
  groupChild3: {
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent1: {
    left: 183,
  },
  groupChild4: {
    backgroundColor: Color.colorWhite,
  },
  sense: {
    left: 16,
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
  },
  rectangleParent2: {
    left: 244,
  },
  groupParent: {
    height: 80,
    width: 299,
    top: 38,
    left: 0,
    position: "absolute",
  },
  categoryParent: {
    top: 110,
    height: 118,
    width: 299,
    left: 30,
    position: "absolute",
  },
  ellipseIcon: {
    left: 1,
    width: 30,
    top: 0,
  },
  sortLeftIcon: {
    width: 30,
    left: 0,
    top: 0,
  },
  groupChild5: {
    top: 3,
    left: 84,
    backgroundColor: Color.colorGainsboro_300,
    width: 230,
    height: 27,
    position: "absolute",
  },
  ellipseParent: {
    top: 50,
    left: 17,
    width: 314,
  },
  groupChild6: {
    backgroundColor: Color.colorGoldenrod_300,
    borderRadius: Border.br_3xs,
    height: 37,
    width: 105,
    left: 0,
    top: 0,
  },
  finish: {
    top: 9,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    left: 30,
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupView: {
    top: 713,
    left: 224,
  },
  recommendInputage: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default RecommendInputage;
