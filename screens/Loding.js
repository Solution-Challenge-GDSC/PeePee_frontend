import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles3";

const Loding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loding1}>
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
      <View style={styles.aMaskGameWrapper}>
        <Text style={styles.aMaskGame}>{`A mask game `}</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <View style={styles.groupItem} />
        <Text style={[styles.recognition, styles.emotionTypo]}>
          recognition
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={styles.groupItem} />
        <Text style={[styles.emotion, styles.emotionTypo]}>emotion</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChild1Border]} />
        <Text
          style={[styles.byChangingRoles, styles.maskPlayIsTypo]}
        >{`By changing roles with children, baby can develop social skills as well as understanding the other person. 

Through this play, you can indirectly know the feelings and complaints that the child usually had for the mother, and you can also know what kind of person the mother reflected in the child was.`}</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text
          style={[styles.maskPlayIs, styles.maskPlayIsPosition]}
        >{`Mask play is a game in which a child imitates his or her family and changes roles.

Let's make a family mask with the child and play a role.`}</Text>
        <Image
          style={[styles.image80Icon, styles.maskPlayIsPosition]}
          contentFit="cover"
          source={require("../assets/image-80.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout1: {
    width: 140,
    top: 122,
    height: 30,
    position: "absolute",
  },
  emotionTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: 7,
    position: "absolute",
  },
  rectangleLayout: {
    height: 160,
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
  maskPlayIsTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  groupLayout: {
    height: 253,
    width: 300,
    position: "absolute",
  },
  maskPlayIsPosition: {
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
    width: 31,
    height: 30,
    left: 17,
    position: "absolute",
  },
  aMaskGame: {
    left: 78,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  aMaskGameWrapper: {
    top: 72,
    left: 29,
    height: 27,
    width: 300,
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
    left: 35,
  },
  rectangleParent: {
    left: 30,
  },
  emotion: {
    left: 45,
  },
  rectangleGroup: {
    left: 190,
  },
  rectangleView: {
    height: 160,
    width: 300,
    position: "absolute",
  },
  byChangingRoles: {
    top: 8,
    color: Color.colorGray_100,
    width: 272,
    height: 147,
    left: 17,
    position: "absolute",
    fontWeight: "300",
  },
  rectangleContainer: {
    top: 172,
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
  maskPlayIs: {
    top: 147,
    height: 95,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
  },
  image80Icon: {
    top: 30,
    height: 100,
  },
  groupView: {
    top: 342,
    left: 30,
  },
  loding1: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Loding;
