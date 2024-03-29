import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles3";

const Loding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loding2}>
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
      <View style={styles.buyAScarfWrapper}>
        <Text style={styles.buyAScarf}>Buy a scarf</Text>
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
          style={[styles.playThatDramatizes, styles.fillTheEmptyTypo]}
        >{`Play that dramatizes real situations not only gives pleasure, but through understanding the situation, the child learns comprehension and appropriate behavior for the situation. 

In addition, scarves are colorful as well as touch, which helps children develop their senses.`}</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text
          style={[styles.fillTheEmpty, styles.image80IconPosition]}
        >{`Fill the empty tissue box (or basket) with the scarf.
Speak like a scarf seller to a child.

"I sell scarves. Buy a scarf!"

If your child takes a scarf out of the tissue box, say, "Give me money, it's 100 won," etc.

When you pull all the scarves out of the box, decorate your body with the scarves.

Please allow the child to see the child wearing the scarf here and there through the mirror. 

After wearing a scarf, have your child put the scarf back in the box.`}</Text>
        <Image
          style={[styles.image80Icon, styles.image80IconPosition]}
          contentFit="cover"
          source={require("../assets/image-801.png")}
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
    height: 164,
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
  fillTheEmptyTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  groupLayout: {
    height: 439,
    width: 300,
    position: "absolute",
  },
  image80IconPosition: {
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
  buyAScarf: {
    left: 90,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  buyAScarfWrapper: {
    top: 73,
    left: 31,
    height: 35,
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
    height: 164,
    width: 300,
    position: "absolute",
  },
  playThatDramatizes: {
    top: 10,
    left: 20,
    color: Color.colorGray_100,
    width: 260,
    height: 149,
    position: "absolute",
    fontWeight: "300",
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
  fillTheEmpty: {
    top: 127,
    height: 312,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
  },
  image80Icon: {
    top: 21,
    height: 97,
  },
  groupView: {
    top: 350,
    left: 30,
  },
  loding2: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Loding1;
