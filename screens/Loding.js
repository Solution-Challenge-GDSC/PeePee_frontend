import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Loding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loding}>
      <Image
        style={[styles.lodingChild, styles.sortLeftLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.sortLeft, styles.sortLeftLayout]}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <View style={[styles.vlalablalbParent, styles.frameItemLayout]}>
        <Text style={styles.vlalablalb}>vlalablalb</Text>
        <Text style={[styles.text, styles.textPosition]}>
          이 시기 아동발달ㅇ는 이런 방향의 놀이를 하는게 좋다~ 부모님은 어떤
          식으로 아이들 대해야 한다~
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.image61Icon}
          contentFit="cover"
          source={require("../assets/image-61.png")}
        />
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text
          style={[styles.text1, styles.textPosition]}
        >{`놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법
놀이방법놀이방법놀이방법놀이방법놀이방법`}</Text>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortLeftLayout: {
    height: 30,
    width: 30,
    top: 28,
    position: "absolute",
  },
  frameItemLayout: {
    height: 67,
    position: "absolute",
  },
  textPosition: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interRegular,
    left: 0,
    width: 300,
    position: "absolute",
  },
  parentLayout: {
    width: 300,
    left: 30,
  },
  lodingChild: {
    left: 18,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 17,
  },
  vlalablalb: {
    left: 98,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  text: {
    top: 37,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  vlalablalbParent: {
    top: 78,
    width: 300,
    left: 30,
  },
  frameChild: {
    top: 16,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_600,
    height: 200,
    left: 0,
    width: 300,
    position: "absolute",
  },
  image61Icon: {
    width: 254,
    height: 250,
    top: 0,
    left: 30,
    position: "absolute",
  },
  rectangleParent: {
    top: 217,
    height: 232,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0.5,
    lineHeight: 25,
    textAlign: "left",
    top: 0,
  },
  frameItem: {
    top: 508,
    left: 10,
    backgroundColor: Color.colorGoldenrod_100,
    width: 280,
  },
  parent: {
    top: 505,
    height: 575,
    position: "absolute",
  },
  loding: {
    backgroundColor: Color.colorGoldenrod_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Loding;
