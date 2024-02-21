import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Recommend13Sense = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommend13sense}>
      <View style={styles.categoryParent}>
        <Text style={[styles.category, styles.homeTypo]}>Category</Text>
        <View style={[styles.ellipseParent, styles.sortLeftIconPosition]}>
          <Image
            style={[styles.groupChild, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.sortLeftIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/sort-left1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </View>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <Pressable
            style={styles.groupShadowBox}
            onPress={() => navigation.navigate("Recommend13Movement")}
          />
          <Image
            style={[styles.acrobaticsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/acrobatics.png")}
          />
          <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
          <Pressable
            style={styles.groupShadowBox}
            onPress={() => navigation.navigate("Recommend13Recognition")}
          />
          <Image
            style={[styles.bookIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/book.png")}
          />
          <Text style={[styles.recognition, styles.senseTypo]}>
            Recognition
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <Pressable
            style={styles.groupShadowBox}
            onPress={() => navigation.navigate("Recommend13Language")}
          />
          <Image
            style={[styles.bookIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/voice.png")}
          />
          <Text style={[styles.speech, styles.speechPosition]}>Speech</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Pressable
            style={styles.groupShadowBox}
            onPress={() => navigation.navigate("Recommend13Emotion")}
          />
          <Image
            style={[styles.bookIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/handmade.png")}
          />
          <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={styles.rectangleView} />
          <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
          <Image
            style={[styles.tongueOutIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/tongue-out.png")}
          />
        </View>
        <Text style={[styles.senseDevelopment, styles.homeTypo]}>
          Sense Development
        </Text>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <Pressable style={[styles.groupPressable, styles.groupChildLayout]}>
            <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
            <Text style={[styles.text, styles.textTypo2]}>
              장난감의 움직임을 눈으로 좇을 수 있다.
            </Text>
          </Pressable>
          <Text style={styles.text1}>시각</Text>
          <Pressable style={styles.groupChild12Position}>
            <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
            <Text style={[styles.text2, styles.textTypo2]}>
              30㎝ 범위 내에 있는 물체는 뚜렷하게 볼 수 있다
            </Text>
          </Pressable>
          <Pressable style={[styles.rectangleParent3, styles.groupChildLayout]}>
            <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
            <Text
              style={[styles.text3, styles.textTypo2]}
            >{`누운 자세에서 눈앞에서 천천히 움직이는 물체를 
180도 따라 볼 수 있다`}</Text>
          </Pressable>
          <Pressable style={styles.groupChild9Position}>
            <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
            <Text
              style={[styles.text4, styles.textTypo1]}
            >{`모빌(흑백모빌->색깔모빌)을 달아주면 쳐다본다`}</Text>
          </Pressable>
        </View>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <Pressable style={[styles.groupPressable, styles.groupChildLayout]}>
            <View style={[styles.groupChild6, styles.groupChildShadowBox]} />
            <Text style={[styles.text5, styles.textTypo2]}>
              엄마의 목소리를 구분하여 반응한다
            </Text>
          </Pressable>
          <Text style={styles.text1}>청각</Text>
          <View style={styles.groupChild12Position}>
            <Pressable
              style={[styles.groupChild7, styles.groupChildShadowBox]}
            />
            <Text style={[styles.text7, styles.textTypo2]}>
              소리가 나는 쪽으로 고개를 돌린다
            </Text>
          </View>
          <Pressable style={[styles.rectangleParent3, styles.groupChildLayout]}>
            <View style={[styles.groupChild8, styles.groupChildShadowBox]} />
            <Text style={[styles.text8, styles.textTypo1]}>
              엄마가 어르는 소리에 얌전해지고 옹알이를 한다
            </Text>
          </Pressable>
          <View style={[styles.groupChild9, styles.groupChild9Position]} />
          <Text style={[styles.text9, styles.textTypo2]}>
            {" "}
            초인종 소리와 전화벨 소리를 구별하여 들을 수 있다
          </Text>
        </View>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild10, styles.groupChildShadowBox]} />
          <Text style={[styles.text10, styles.textTypo]}>
            냄새가 나는 쪽으로 고개를 돌릴 만큼 후각이 민감하다
          </Text>
          <Text style={styles.text1}>후각</Text>
        </View>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild11, styles.groupChildShadowBox]} />
          <Text style={[styles.text12, styles.textTypo]}>
            선호하는 특정 맛이 있다
          </Text>
          <View style={[styles.groupChild12, styles.groupChild12Position]} />
          <Text style={[styles.text13, styles.textTypo2]}>
            피부 촉각이 발달해 기저귀가 젖으면 보채기도 한다
          </Text>
          <Text style={styles.text1}>미각/촉각</Text>
        </View>
        <View style={[styles.lineView, styles.frameLayout]} />
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text15, styles.text15Layout]}>
          아래의 항목 중 아이의 발달 상태에 해당하는 항목을 모두 골라주세요
        </Text>
        <View style={styles.groupChild13} />
        <Text style={[styles.finish, styles.text15Layout]}>Finish</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  sortLeftIconPosition: {
    height: 30,
    left: 0,
    top: 0,
  },
  iconLayout1: {
    width: 30,
    position: "absolute",
  },
  groupParentLayout: {
    height: 80,
    width: 55,
    top: 98,
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
    position: "absolute",
  },
  iconPosition: {
    left: 12,
    width: 30,
    position: "absolute",
  },
  speechPosition: {
    left: 14,
    textAlign: "left",
  },
  groupLayout: {
    height: 256,
    width: 300,
    left: 12,
    position: "absolute",
  },
  groupChildLayout: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
  },
  textTypo2: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  textTypo1: {
    left: 23,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    borderTopWidth: 1,
    width: 300,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 13,
    position: "absolute",
  },
  groupChild9Position: {
    top: 206,
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
  },
  rectangleParentPosition: {
    width: 300,
    left: 12,
    position: "absolute",
  },
  textTypo: {
    top: 43,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupChild12Position: {
    top: 86,
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
  },
  text15Layout: {
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  category: {
    top: 60,
    textAlign: "left",
    left: 13,
  },
  groupChild: {
    left: 1,
    width: 30,
    height: 30,
    top: 0,
  },
  sortLeftIcon: {
    height: 30,
    left: 0,
    top: 0,
  },
  home: {
    left: 41,
    top: 6,
    textAlign: "left",
  },
  ellipseParent: {
    width: 84,
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    height: 80,
    width: 55,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    width: 30,
    position: "absolute",
    left: 13,
  },
  motion: {
    left: 15,
    textAlign: "left",
  },
  rectangleParent: {
    left: 13,
  },
  bookIcon: {
    height: 40,
    top: 10,
  },
  recognition: {
    left: 6,
    textAlign: "left",
  },
  rectangleGroup: {
    left: 74,
  },
  speech: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 52,
    position: "absolute",
  },
  rectangleContainer: {
    left: 135,
  },
  emotion: {
    textAlign: "left",
    left: 13,
  },
  groupView: {
    left: 196,
  },
  rectangleView: {
    backgroundColor: Color.colorDarkslateblue,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    height: 80,
    width: 55,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sense: {
    left: 16,
    textAlign: "left",
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
  },
  rectangleParent1: {
    left: 257,
  },
  senseDevelopment: {
    top: 208,
    textAlign: "left",
    left: 13,
  },
  groupChild2: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
  },
  text: {
    left: 44,
    top: 14,
    textAlign: "left",
  },
  groupPressable: {
    top: 26,
    height: 50,
  },
  text1: {
    fontSize: FontSize.size_smi,
    left: 1,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild3: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
  },
  text2: {
    left: 19,
    top: 14,
    textAlign: "left",
  },
  groupChild4: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
  },
  text3: {
    left: 21,
    textAlign: "center",
    top: 6,
  },
  rectangleParent3: {
    top: 146,
  },
  groupChild5: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
  },
  text4: {
    top: 15,
    textAlign: "left",
  },
  groupParent: {
    top: 256,
  },
  frameChild: {
    top: 236,
  },
  groupChild6: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
  },
  text5: {
    left: 56,
    top: 14,
    textAlign: "left",
  },
  groupChild7: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
  },
  text7: {
    left: 59,
    top: 14,
    textAlign: "left",
  },
  groupChild8: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 0,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
  },
  text8: {
    textAlign: "center",
    top: 14,
  },
  groupChild9: {
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
  },
  text9: {
    top: 220,
    left: 11,
    textAlign: "left",
  },
  groupContainer: {
    top: 559,
  },
  frameItem: {
    top: 542,
  },
  groupChild10: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 26,
  },
  text10: {
    left: 7,
  },
  rectangleParent8: {
    top: 862,
    height: 76,
  },
  frameInner: {
    top: 845,
  },
  groupChild11: {
    height: 50,
    width: 300,
    left: 0,
    position: "absolute",
    top: 26,
  },
  text12: {
    left: 85,
  },
  groupChild12: {
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
  },
  text13: {
    top: 103,
    left: 14,
    textAlign: "left",
  },
  rectangleParent9: {
    top: 985,
    height: 136,
  },
  lineView: {
    top: 968,
  },
  categoryParent: {
    top: 28,
    left: 17,
    width: 312,
    height: 772,
    position: "absolute",
  },
  text15: {
    top: 47,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
    left: 0,
    lineHeight: 20,
  },
  groupChild13: {
    left: 188,
    width: 105,
    height: 37,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslateblue,
    top: 0,
    position: "absolute",
  },
  finish: {
    top: 9,
    left: 218,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
  },
  parent: {
    top: 1199,
    left: 24,
    width: 293,
    height: 67,
    position: "absolute",
  },
  recommend13sense: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend13Sense;
