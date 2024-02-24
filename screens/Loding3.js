import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles3";

const Loding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loding4}>
      <Pressable
        style={styles.ellipseParent}
        onPress={() => navigation.navigate("Recommend13Sense")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.sortLeftIcon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <View
        style={[styles.letsHaveFunTogetherWrapper, styles.rectangleLayout1]}
      >
        <Text style={styles.letsHaveFun}>Let's have fun together</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.language, styles.languageTypo]}>language</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.exercise, styles.languageTypo]}>exercise</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout1]}>
        <View style={[styles.rectangleView, styles.groupChild1Border]} />
        <Text
          style={[styles.whenMakingAny, styles.myToyHitTypo]}
        >{`When making any movement or content, please reflect your child's opinion as much as possible and enjoy it.

If your child is able to write or is interested in writing, it is also good to help him write on a large drawing paper and decorate it with crayons or colored pencils.`}</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text
          style={[styles.myToyHit, styles.myToyHitPosition]}
        >{`1. My Toy: Hit the chest 3 times with both hands. 

2. If I play alone: Shake the toy with both hands. 

3. Greedy: With your lips forward, your face crushed, your stomach out, you hit your stomach with both hands.`}</Text>
        <Image
          style={[styles.image80Icon, styles.myToyHitPosition]}
          contentFit="cover"
          source={require("../assets/image-803.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout1: {
    width: 300,
    position: "absolute",
  },
  rectangleLayout: {
    width: 140,
    top: 125,
    height: 30,
    position: "absolute",
  },
  languageTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 7,
    position: "absolute",
  },
  groupChild1Border: {
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  myToyHitTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  groupLayout: {
    height: 316,
    width: 300,
    position: "absolute",
  },
  myToyHitPosition: {
    width: 270,
    left: 15,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
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
  letsHaveFun: {
    left: 26,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  letsHaveFunTogetherWrapper: {
    top: 78,
    height: 27,
    left: 30,
  },
  groupItem: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGoldenrod,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    width: 140,
    left: 0,
    top: 0,
    height: 30,
    position: "absolute",
  },
  language: {
    left: 41,
  },
  rectangleParent: {
    left: 30,
  },
  exercise: {
    left: 45,
  },
  rectangleGroup: {
    left: 190,
  },
  rectangleView: {
    height: 150,
    width: 300,
    position: "absolute",
  },
  whenMakingAny: {
    top: 9,
    left: 20,
    color: Color.colorGray_100,
    width: 260,
    height: 141,
    position: "absolute",
    fontWeight: "300",
  },
  rectangleContainer: {
    top: 175,
    height: 150,
    left: 30,
  },
  groupChild1: {
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  myToyHit: {
    top: 149,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
    height: 150,
    color: Color.colorBlack,
  },
  image80Icon: {
    top: 29,
    height: 100,
  },
  groupView: {
    top: 346,
    left: 30,
  },
  loding4: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Loding3;
