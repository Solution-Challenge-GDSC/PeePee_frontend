import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Recommend13Movement = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommend13movement}>
      <Text style={[styles.movementDevelopment, styles.homeTypo]}>
        Movement Development
      </Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleGroupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Text
          style={[styles.text, styles.textTypo1]}
        >{`꼭 오므리고 있던 아기의 손이 차츰 펴지기 시작하며 
손가락을 빨기도 한다`}</Text>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Text style={styles.text1}>팔과 다리 운동이 활발해진다</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleGroupLayout]}
      >
        <View style={styles.groupChildShadowBox1} />
        <Text
          style={[styles.text2, styles.textTypo1]}
        >{`엉덩이와 무릎관절이 유연해지며 
발차는 힘이 강해진다`}</Text>
      </Pressable>
      <Pressable style={[styles.groupPressable, styles.rectangleGroupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Text style={[styles.text3, styles.textTypo]}>
          엎드린 자세에서 머리를 좌우로 돌릴 수 있다
        </Text>
      </Pressable>
      <Pressable style={[styles.rectangleParent1, styles.rectangleGroupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Text style={[styles.text4, styles.textTypo]}>
          차츰 목을 가누기 시작한다
        </Text>
      </Pressable>
      <Pressable style={[styles.rectangleParent2, styles.rectangleGroupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Text style={[styles.text5, styles.textTypo]}>
          다리가 곧게 펴지기 시작한다
        </Text>
      </Pressable>
      <Pressable style={[styles.rectangleParent3, styles.rectangleGroupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Text
          style={[styles.text6, styles.textTypo1]}
        >{`움직이는 물체를 향해 팔을 휘젓기도 하는 등 
움직임이 활발해진다`}</Text>
      </Pressable>
      <View style={styles.wrapper}>
        <Text style={[styles.text7, styles.text7Layout]}>
          아래의 항목 중 아이의 발달 상태에 해당하는 항목을 모두 골라주세요
        </Text>
      </View>
      <Text style={[styles.category, styles.homeTypo]}>Category</Text>
      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
        <Image
          style={styles.acrobaticsIcon}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Recognition")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild5, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Language")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild6, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Emotion")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      </View>
      <View style={[styles.rectangleParent7, styles.rectangleParentLayout]}>
        <Pressable
          style={[styles.groupChild7, styles.groupChildShadowBox]}
          onPress={() => navigation.navigate("Recommend13Sense")}
        />
        <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/tongue-out.png")}
        />
      </View>
      <View style={[styles.ellipseParent, styles.ellipseIconLayout]}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.sortLeftIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/sort-left1.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <View style={styles.groupChild8} />
      </View>
      {/* <Pressable style={[styles.rectangleParent8, styles.groupChild9Layout]}>
        <View style={[styles.groupChild9, styles.groupChild9Layout]} />
        <Text style={[styles.finish, styles.text7Layout]}>Finish</Text>
      </Pressable> */}
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
  textTypo1: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 9,
    position: "absolute",
  },
  textTypo: {
    top: 17,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  text7Layout: {
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
  groupChild9Layout: {
    height: 37,
    width: 105,
    position: "absolute",
  },
  movementDevelopment: {
    top: 236,
    left: 29,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
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
  text: {
    left: 13,
  },
  rectangleParent: {
    top: 274,
  },
  text1: {
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
  text2: {
    left: 63,
  },
  rectangleContainer: {
    top: 394,
  },
  text3: {
    left: 33,
  },
  groupPressable: {
    top: 454,
  },
  text4: {
    left: 81,
  },
  rectangleParent1: {
    top: 514,
  },
  text5: {
    left: 75,
  },
  rectangleParent2: {
    top: 574,
  },
  text6: {
    left: 32,
  },
  rectangleParent3: {
    top: 634,
  },
  text7: {
    left: 10,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
    top: 10,
  },
  wrapper: {
    top: 750,
    left: 26,
    width: 303,
    height: 40,
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
    top: 10,
    height: 40,
    left: 13,
    position: "absolute",
  },
  motion: {
    left: 15,
  },
  groupView: {
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
  rectangleParent4: {
    left: 91,
  },
  groupChild5: {
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  rectangleParent5: {
    left: 152,
  },
  groupChild6: {
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent6: {
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
  rectangleParent7: {
    left: 274,
  },
  ellipseIcon: {
    left: 1,
    width: 30,
    top: 0,
    height: 30,
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
    backgroundColor: Color.colorGainsboro_200,
    width: 230,
    height: 27,
    position: "absolute",
  },
  ellipseParent: {
    top: 28,
    left: 17,
    width: 314,
  },
  groupChild9: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_3xs,
    width: 105,
    left: 0,
    top: 0,
  },
  finish: {
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    left: 30,
    top: 9,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
  },
  rectangleParent8: {
    top: 713,
    left: 224,
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
