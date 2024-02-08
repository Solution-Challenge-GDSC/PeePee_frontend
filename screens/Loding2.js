import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Loding2 = () => {
  return (
    <View style={styles.loding}>
      <Image
        style={[styles.lodingChild, styles.lodingChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.sortLeftIcon, styles.lodingChildLayout]}
        contentFit="cover"
        source={require("../assets/sort-left.png")}
      />
      <View style={[styles.lodingItem, styles.parentLayout]} />
      <Text style={styles.vlalablalb}>vlalablalb</Text>
      <Text style={[styles.text, styles.textClr]}>
        이 시기 아동발달ㅇ는 이런 방향의 놀이를 하는게 좋다~ 부모님은 어떤
        식으로 아이들 대해야 한다~
      </Text>
      <Image
        style={[styles.image63Icon, styles.parentLayout]}
        contentFit="cover"
        source={require("../assets/image-63.png")}
      />
      <View style={[styles.parent, styles.parentLayout]}>
        <Text
          style={[styles.text1, styles.textClr]}
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
        <View style={styles.frameChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lodingChildLayout: {
    height: 30,
    width: 30,
    top: 28,
    position: "absolute",
  },
  parentLayout: {
    width: 300,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interRegular,
    width: 300,
    position: "absolute",
  },
  lodingChild: {
    left: 18,
  },
  sortLeftIcon: {
    left: 17,
  },
  lodingItem: {
    top: 251,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_600,
    height: 200,
    left: 30,
  },
  vlalablalb: {
    top: 78,
    left: 128,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 115,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 30,
  },
  image63Icon: {
    top: 285,
    left: 10,
    height: 166,
  },
  text1: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_mid,
    letterSpacing: 0.5,
    lineHeight: 25,
    textAlign: "left",
  },
  frameChild: {
    top: 508,
    left: 13,
    backgroundColor: Color.colorGoldenrod_100,
    width: 280,
    height: 67,
    position: "absolute",
  },
  parent: {
    top: 505,
    height: 575,
    left: 30,
  },
  loding: {
    backgroundColor: Color.colorLightseagreen,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Loding2;
