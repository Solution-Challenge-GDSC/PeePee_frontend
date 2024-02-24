import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles3";

const Loding4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loding5}>
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
      <View style={styles.aFlashlightPlayWrapper}>
        <Text style={styles.aFlashlightPlay}>A flashlight Play</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <View style={styles.groupItem} />
        <Text style={[styles.recognition, styles.languageTypo]}>
          recognition
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={styles.groupItem} />
        <Text style={[styles.language, styles.languageTypo]}>language</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChild1Border]} />
        <Text
          style={[styles.childrenInThis, styles.weShowTheTypo]}
        >{`Children in this period know that things have names and are interested in calling them by name. 

Play the game of guessing the name of the object while shadowing with a flashlight.`}</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text
          style={[styles.weShowThe, styles.weShowTheTypo]}
        >{`1. We show the child a flashlight and we talk, "What's this? Should we try putting the button up here?" "Wow -- the light is on." 

2. Give the child some time to explore the flashlight, then turn it off and darken the room. If the light in the room is suddenly turned off, children may be surprised, so talk to the child and turn it off.`}</Text>
        <Image
          style={styles.image81Icon}
          contentFit="cover"
          source={require("../assets/image-81.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout1: {
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
  rectangleLayout: {
    height: 142,
    width: 300,
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
  weShowTheTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupLayout: {
    height: 316,
    width: 300,
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
  aFlashlightPlay: {
    left: 63,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  aFlashlightPlayWrapper: {
    top: 78,
    height: 27,
    width: 300,
    left: 30,
    position: "absolute",
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
  recognition: {
    left: 41,
  },
  rectangleParent: {
    left: 30,
  },
  language: {
    left: 42,
  },
  rectangleGroup: {
    left: 190,
  },
  rectangleView: {
    height: 142,
    width: 300,
    position: "absolute",
  },
  childrenInThis: {
    top: 14,
    left: 18,
    color: Color.colorGray_100,
    width: 260,
    height: 128,
  },
  rectangleContainer: {
    top: 175,
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
  weShowThe: {
    top: 149,
    left: 15,
    width: 270,
    height: 155,
    color: Color.colorBlack,
  },
  image81Icon: {
    top: 25,
    left: 16,
    width: 271,
    height: 100,
    position: "absolute",
  },
  groupView: {
    top: 335,
    left: 30,
  },
  loding5: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Loding4;
