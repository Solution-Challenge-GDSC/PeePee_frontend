import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Recommend = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommend}>
      <Image
        style={[styles.sortLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sort-left.png")}
      />
      <Image
        style={[styles.sortLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.vlalablalbParent}>
        <Text style={styles.vlalablalb}>vlalablalb</Text>
        <Text style={styles.text}>
          이 시기 아동발달ㅇ는 이런 방향의 놀이를 하는게 좋다~ 부모님은 어떤
          식으로 아이들 대해야 한다~
        </Text>
      </View>
      <ScrollView
        style={styles.rectangleParent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Pressable
          style={[styles.frameChild, styles.frameChildShadowBox]}
          onPress={() => navigation.navigate("Loding")}
        />
        <Pressable
          style={[styles.frameItem, styles.frameShadowBox]}
          onPress={() => navigation.navigate("Loding")}
        />
        <View style={[styles.frameInner, styles.frameShadowBox]} />
        <View style={[styles.rectangleView, styles.frameShadowBox]} />
        <View style={[styles.frameChild1, styles.frameChildShadowBox]} />
        <Text style={[styles.vlalablalb1, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text1, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.lineView, styles.frameChildLayout]} />
        <View style={[styles.frameChild2, styles.frameChildShadowBox]} />
        <Text style={[styles.vlalablalb2, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text2, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m1, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon1, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <Image
          style={[styles.soSoIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/so-so.png")}
        />
        <Image
          style={[styles.voiceIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <View style={[styles.frameChild4, styles.frameChildShadowBox]} />
        <Text style={[styles.vlalablalb3, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text3, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m2, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon2, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild5, styles.frameChildLayout]} />
        <Image
          style={[styles.redditIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/reddit.png")}
        />
        <View style={[styles.frameChild6, styles.frameChildShadowBox]} />
        <Text style={[styles.vlalablalb4, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text4, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m3, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon3, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild7, styles.frameChildLayout]} />
        <View style={[styles.frameChild8, styles.frameChildShadowBox]} />
        <Text style={[styles.vlalablalb5, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text5, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m4, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon4, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild9, styles.frameChildLayout]} />
        <Image
          style={[styles.soSoIcon1, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/so-so.png")}
        />
        <Image
          style={[styles.voiceIcon1, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.text6, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m5, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon5, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild10, styles.frameChildLayout]} />
        <Image
          style={[styles.redditIcon1, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/reddit1.png")}
        />
        <Text style={[styles.vlalablalb6, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.vlalablalb7, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text7, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m6, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon6, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild11, styles.frameChildLayout]} />
        <Text style={[styles.vlalablalb8, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text8, styles.text8Position]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m7, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon7, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild12, styles.frameChildLayout]} />
        <Image
          style={[styles.soSoIcon2, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/so-so1.png")}
        />
        <Image
          style={[styles.voiceIcon2, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/voice1.png")}
        />
        <Text style={[styles.vlalablalb9, styles.vlalablalbTypo]}>
          vlalablalb
        </Text>
        <Text style={[styles.text9, styles.textTypo1]}>
          이 놀이는 아동 발달의 어떠한 부분의 증진에 도움을 줄 수 있습니다
        </Text>
        <Text style={[styles.m8, styles.mTypo]}>10M</Text>
        <Image
          style={[styles.wallClockIcon8, styles.wallIconLayout]}
          contentFit="cover"
          source={require("../assets/wall-clock.png")}
        />
        <View style={[styles.frameChild13, styles.frameChildLayout]} />
        <Image
          style={[styles.redditIcon2, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/reddit.png")}
        />
      </ScrollView>
      <View style={[styles.recommendItem, styles.recommendChildShadowBox]} />
      <View style={[styles.recommendInner, styles.recommendChildShadowBox]} />
      <View style={[styles.recommendChild1, styles.recommendChildShadowBox]} />
      <View style={[styles.recommendChild2, styles.recommendChildShadowBox]} />
      <View style={[styles.recommendChild3, styles.recommendChildShadowBox]} />
      <Image
        style={[styles.acrobaticsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/acrobatics.png")}
      />
      <Image
        style={[styles.bookIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/book.png")}
      />
      <Image
        style={[styles.voiceIcon3, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/voice2.png")}
      />
      <Image
        style={[styles.handmadeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/handmade.png")}
      />
      <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      <Text style={[styles.speech, styles.speechPosition]}>Speech</Text>
      <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
      <Text style={[styles.text10, styles.textTypo]}>90%</Text>
      <Image
        style={[styles.tongueOutIcon, styles.text8Position]}
        contentFit="cover"
        source={require("../assets/tongue-out.png")}
      />
      <View style={[styles.recommendChild4, styles.recommendChildLayout]} />
      <Text style={[styles.text11, styles.textTypo]}>110%</Text>
      <View style={[styles.recommendChild5, styles.recommendChildLayout]} />
      <Text style={[styles.text12, styles.textTypo]}>100%</Text>
      <View style={[styles.recommendChild6, styles.recommendChildLayout]} />
      <Text style={[styles.text13, styles.textTypo]}>120%</Text>
      <View style={[styles.recommendChild7, styles.recommendChildLayout]} />
      <Text style={[styles.text14, styles.textTypo]}>70%</Text>
      <View style={[styles.recommendChild8, styles.recommendChildLayout]} />
      <View style={styles.recommendChild9} />
      <Image
        style={styles.rectangleIconLayout}
        contentFit="cover"
        source={require("../assets/rectangle-99.png")}
      />
      <View style={[styles.recommendChild10, styles.rectangleIconLayout]} />
      <Text
        style={styles.yourKidNeed}
      >{`Your kid need to play for increase recognition.

and we recommend to outdoor play more than indoor play. and your kind age are need to ~~.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  frameChildShadowBox: {
    height: 70,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    width: 300,
    backgroundColor: Color.colorWhite,
  },
  frameShadowBox: {
    marginTop: 10,
    height: 70,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    width: 300,
    backgroundColor: Color.colorWhite,
  },
  vlalablalbTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 73,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo1: {
    width: 150,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    left: 73,
  },
  mTypo: {
    width: 50,
    left: 242,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  wallIconLayout: {
    height: 35,
    width: 35,
    left: 250,
    position: "absolute",
  },
  frameChildLayout: {
    height: 42,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorSilver_200,
    borderStyle: "solid",
    left: 234,
    position: "absolute",
  },
  iconPosition1: {
    left: 20,
    height: 35,
    width: 35,
    position: "absolute",
  },
  text8Position: {
    top: 197,
    position: "absolute",
  },
  recommendChildShadowBox: {
    height: 100,
    width: 55,
    borderRadius: Border.br_81xl,
    top: 181,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    position: "absolute",
  },
  iconPosition: {
    top: 194,
    height: 30,
    width: 30,
    position: "absolute",
  },
  senseTypo: {
    height: 10,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 227,
    textAlign: "left",
    position: "absolute",
  },
  speechPosition: {
    left: 169,
    color: Color.colorDarkgray_100,
  },
  textTypo: {
    top: 256,
    height: 10,
    width: 25,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    position: "absolute",
  },
  recommendChildLayout: {
    height: 1,
    width: 31,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    top: 246,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleIconLayout: {
    display: "none",
    height: 150,
    left: 32,
    top: 311,
    borderRadius: Border.br_3xs,
    width: 300,
    position: "absolute",
  },
  sortLeftIcon: {
    top: 50,
    left: 17,
    position: "absolute",
  },
  vlalablalb: {
    top: 0,
    left: 98,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    top: 27,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "center",
    width: 300,
    position: "absolute",
  },
  vlalablalbParent: {
    top: 104,
    height: 57,
    width: 300,
    left: 30,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  frameItem: {
    zIndex: 1,
  },
  frameInner: {
    zIndex: 2,
  },
  rectangleView: {
    zIndex: 3,
  },
  frameChild1: {
    top: 320,
    zIndex: 4,
    left: 0,
    height: 70,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vlalablalb1: {
    top: 335,
    zIndex: 5,
  },
  text1: {
    top: 357,
    zIndex: 6,
    position: "absolute",
  },
  m: {
    top: 367,
    zIndex: 7,
  },
  wallClockIcon: {
    top: 328,
    zIndex: 8,
  },
  lineView: {
    top: 334,
    zIndex: 9,
  },
  frameChild2: {
    top: 400,
    zIndex: 10,
    left: 0,
    height: 70,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vlalablalb2: {
    top: 415,
    zIndex: 11,
  },
  text2: {
    top: 437,
    zIndex: 12,
    position: "absolute",
  },
  m1: {
    top: 447,
    zIndex: 13,
  },
  wallClockIcon1: {
    top: 408,
    zIndex: 14,
  },
  frameChild3: {
    top: 414,
    zIndex: 15,
  },
  soSoIcon: {
    top: 340,
    zIndex: 16,
  },
  voiceIcon: {
    top: 420,
    zIndex: 17,
  },
  frameChild4: {
    top: 480,
    zIndex: 18,
    left: 0,
    height: 70,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vlalablalb3: {
    top: 495,
    zIndex: 19,
  },
  text3: {
    top: 517,
    zIndex: 20,
    position: "absolute",
  },
  m2: {
    top: 527,
    zIndex: 21,
  },
  wallClockIcon2: {
    top: 488,
    zIndex: 22,
  },
  frameChild5: {
    top: 494,
    zIndex: 23,
  },
  redditIcon: {
    top: 497,
    zIndex: 24,
  },
  frameChild6: {
    top: 560,
    zIndex: 25,
    left: 0,
    height: 70,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vlalablalb4: {
    top: 575,
    zIndex: 26,
  },
  text4: {
    top: 597,
    zIndex: 27,
    position: "absolute",
  },
  m3: {
    top: 607,
    zIndex: 28,
  },
  wallClockIcon3: {
    top: 568,
    zIndex: 29,
  },
  frameChild7: {
    top: 574,
    zIndex: 30,
  },
  frameChild8: {
    top: 640,
    zIndex: 31,
    left: 0,
    height: 70,
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vlalablalb5: {
    top: 655,
    zIndex: 32,
  },
  text5: {
    top: 677,
    zIndex: 33,
    position: "absolute",
  },
  m4: {
    top: 687,
    zIndex: 34,
  },
  wallClockIcon4: {
    top: 648,
    zIndex: 35,
  },
  frameChild9: {
    top: 654,
    zIndex: 36,
  },
  soSoIcon1: {
    top: 580,
    zIndex: 37,
  },
  voiceIcon1: {
    top: 660,
    zIndex: 38,
  },
  text6: {
    top: 37,
    zIndex: 39,
    position: "absolute",
  },
  m5: {
    top: 47,
    zIndex: 40,
  },
  wallClockIcon5: {
    top: 8,
    zIndex: 41,
  },
  frameChild10: {
    top: 14,
    zIndex: 42,
  },
  redditIcon1: {
    top: 17,
    zIndex: 43,
  },
  vlalablalb6: {
    top: 95,
    zIndex: 44,
  },
  vlalablalb7: {
    top: 15,
    zIndex: 45,
  },
  text7: {
    top: 117,
    zIndex: 46,
    position: "absolute",
  },
  m6: {
    top: 127,
    zIndex: 47,
  },
  wallClockIcon6: {
    top: 88,
    zIndex: 48,
  },
  frameChild11: {
    top: 94,
    zIndex: 49,
  },
  vlalablalb8: {
    top: 175,
    zIndex: 50,
  },
  text8: {
    zIndex: 51,
    width: 150,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    left: 73,
  },
  m7: {
    top: 207,
    zIndex: 52,
  },
  wallClockIcon7: {
    top: 168,
    zIndex: 53,
  },
  frameChild12: {
    top: 174,
    zIndex: 54,
  },
  soSoIcon2: {
    top: 100,
    zIndex: 55,
  },
  voiceIcon2: {
    top: 180,
    zIndex: 56,
  },
  vlalablalb9: {
    top: 255,
    zIndex: 57,
  },
  text9: {
    top: 277,
    zIndex: 58,
    position: "absolute",
  },
  m8: {
    top: 287,
    zIndex: 59,
  },
  wallClockIcon8: {
    top: 248,
    zIndex: 60,
  },
  frameChild13: {
    top: 254,
    zIndex: 61,
  },
  redditIcon2: {
    top: 257,
    zIndex: 62,
  },
  rectangleParent: {
    top: 490,
    left: 30,
    position: "absolute",
    flex: 1,
  },
  recommendItem: {
    left: 33,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    height: 100,
    width: 55,
    borderRadius: Border.br_81xl,
    top: 181,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  recommendInner: {
    left: 94,
    backgroundColor: Color.colorLightseagreen,
    height: 100,
    width: 55,
    borderRadius: Border.br_81xl,
    top: 181,
  },
  recommendChild1: {
    left: 155,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    height: 100,
    width: 55,
    borderRadius: Border.br_81xl,
    top: 181,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  recommendChild2: {
    left: 216,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    height: 100,
    width: 55,
    borderRadius: Border.br_81xl,
    top: 181,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  recommendChild3: {
    left: 277,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    height: 100,
    width: 55,
    borderRadius: Border.br_81xl,
    top: 181,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    left: 46,
  },
  bookIcon: {
    left: 106,
  },
  voiceIcon3: {
    left: 167,
  },
  handmadeIcon: {
    left: 228,
  },
  motion: {
    width: 25,
    height: 10,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    left: 48,
    top: 227,
  },
  recognition: {
    left: 100,
    width: 42,
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 227,
    height: 10,
  },
  speech: {
    width: 27,
    height: 10,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 227,
    textAlign: "left",
    position: "absolute",
  },
  emotion: {
    left: 229,
    width: 29,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 227,
    height: 10,
  },
  sense: {
    left: 293,
    width: 22,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 227,
    height: 10,
  },
  text10: {
    color: Color.colorDarkgray_100,
    left: 48,
    top: 256,
  },
  tongueOutIcon: {
    left: 289,
    height: 30,
    width: 30,
  },
  recommendChild4: {
    left: 46,
  },
  text11: {
    left: 169,
    color: Color.colorDarkgray_100,
  },
  recommendChild5: {
    left: 167,
  },
  text12: {
    left: 230,
    color: Color.colorDarkgray_100,
  },
  recommendChild6: {
    left: 228,
  },
  text13: {
    left: 291,
    color: Color.colorDarkgray_100,
  },
  recommendChild7: {
    left: 289,
  },
  text14: {
    left: 108,
    color: Color.colorWhite,
  },
  recommendChild8: {
    left: 106,
  },
  recommendChild9: {
    height: 150,
    left: 32,
    top: 311,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  recommendChild10: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  yourKidNeed: {
    top: 331,
    left: 50,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 260,
    height: 95,
    textAlign: "left",
    color: Color.colorDimgray_200,
    position: "absolute",
  },
  recommend: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend;
