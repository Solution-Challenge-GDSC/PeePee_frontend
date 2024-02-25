import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles4";

const Diary1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diary}>
      <Pressable
        style={styles.ellipseParent}
        onPress={() => navigation.navigate("Diary2")}
      >
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.sortLeftIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text
        style={[styles.nameWhatAre, styles.upsetFlexBox]}
      >{`Name, What are you
like today?`}</Text>
      <View style={styles.vectorParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Diary")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-1081.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Diary2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-1091.png")}
          />
        </Pressable>
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1071.png")}
          />
          <Text style={[styles.upset, styles.upsetFlexBox]}>Upset</Text>
          <Image
            style={styles.kakaotalk202402242146136664Icon}
            contentFit="cover"
            source={require("../assets/kakaotalk-20240224-214613666-4.png")}
          />
        </View>
      </View>
      <Pressable style={[styles.diaryInner, styles.innerLayout]}
                   onPress={() => navigation.navigate("DiaryWrite")}>
        <View style={[styles.rectangleParent, styles.innerLayout]}>
          <View style={[styles.groupInner, styles.innerLayout]} />
          <Text style={[styles.continue, styles.upsetFlexBox]}>Continue</Text>
          <Image
            style={[styles.rightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 30,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  upsetFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  wrapperLayout: {
    height: 179,
    width: 179,
    top: 37,
    position: "absolute",
  },
  groupLayout: {
    width: 242,
    height: 242,
    top: 0,
    position: "absolute",
  },
  innerLayout: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    top: 0,
    height: 30,
  },
  sortLeftIcon: {
    left: 0,
    top: 0,
    height: 30,
  },
  ellipseParent: {
    top: 50,
    left: 17,
    width: 31,
    height: 30,
    position: "absolute",
  },
  home: {
    top: 56,
    left: 58,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  nameWhatAre: {
    top: 163,
    left: 69,
    fontSize: FontSize.size_3xl,
    letterSpacing: 0.4,
    lineHeight: 27,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  wrapper: {
    left: 430,
  },
  container: {
    left: 0,
  },
  groupItem: {
    borderRadius: Border.br_xl,
    left: 0,
  },
  upset: {
    top: 185,
    left: 94,
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    transform: [
      {
        rotate: "-4deg",
      },
    ],
    color: Color.colorBlack,
  },
  kakaotalk202402242146136664Icon: {
    top: 16,
    left: 41,
    width: 160,
    height: 157,
    position: "absolute",
  },
  vectorGroup: {
    left: 183,
  },
  vectorParent: {
    top: 279,
    left: -124,
    width: 609,
    height: 242,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  continue: {
    top: 15,
    left: 92,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    width: 79,
    height: 23,
    fontSize: FontSize.size_mini,
  },
  rightIcon: {
    top: 8,
    left: 180,
    height: 31,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  diaryInner: {
    top: 640,
    left: 30,
  },
  diary: {
    backgroundColor: Color.colorKhaki,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Diary1;
