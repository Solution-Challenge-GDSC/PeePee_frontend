import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles3";

const Loding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loding3}>
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
      <View style={styles.beCarefulOfColdWrapper}>
        <Text style={styles.beCarefulOf}>Be careful of cold</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <View style={styles.groupItem} />
        <Text style={[styles.language, styles.languageTypo]}>language</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={styles.groupItem} />
        <Text style={[styles.exercise, styles.languageTypo]}>exercise</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChild1Border]} />
        <Text
          style={[styles.whenMakingAny, styles.outOfTheTypo]}
        >{`When making any movement or content, please reflect your child's opinion as much as possible and enjoy it.

If your child is able to write or is interested in writing, it is also good to help him write on a large drawing paper and decorate it with crayons or colored pencils.`}</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <Text
          style={[styles.outOfThe, styles.outOfThePosition]}
        >{`1. Out of the window: Point forward with the child and the index finger of the right hand.

2. It's raining: Move both your fingers quickly and lower from top of your head. 

3. My mom and dad told me not to play: Pretend to wipe your tears with both hands. 

4. Secretly: Pretending to sneak out.`}</Text>
        <Image
          style={[styles.image80Icon, styles.outOfThePosition]}
          contentFit="cover"
          source={require("../assets/image-802.png")}
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
    height: 150,
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
  outOfTheTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  groupLayout: {
    height: 323,
    width: 300,
    position: "absolute",
  },
  outOfThePosition: {
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
  beCarefulOf: {
    top: -7,
    left: 57,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  beCarefulOfColdWrapper: {
    top: 78,
    height: 29,
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
    left: 23,
    color: Color.colorGray_100,
    width: 260,
    height: 135,
    position: "absolute",
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
  outOfThe: {
    top: 149,
    height: 174,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_smi,
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
  loding3: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Loding2;
