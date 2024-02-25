import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles4";

const Diary2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diary}>
      <Pressable
        style={styles.ellipseParent}
        onPress={() => navigation.navigate("Diary")}
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
      <Text style={[styles.nameWhatAre, styles.sadFlexBox]}>{`Name, What are you
like today?`}</Text>
      <Pressable style={[styles.diaryInner, styles.groupItemLayout]}
                   onPress={() => navigation.navigate("DiaryWrite")}>
        <View style={[styles.rectangleParent, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.continue, styles.sadFlexBox]}>Continue</Text>
          <Image
            style={[styles.rightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.vectorParent, styles.vectorLayout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Diary")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-1082.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Diary1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-1092.png")}
          />
        </Pressable>
        <View style={[styles.vectorGroup, styles.vectorLayout]}>
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/rectangle-1072.png")}
          />
          <Text style={[styles.sad, styles.sadFlexBox]}>Sad</Text>
          <Image
            style={styles.kakaotalk202402242146136663Icon}
            contentFit="cover"
            source={require("../assets/kakaotalk-20240224-214613666-3.png")}
          />
        </View>
      </View>
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
  sadFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupItemLayout: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  vectorLayout: {
    height: 243,
    position: "absolute",
  },
  wrapperLayout: {
    height: 179,
    width: 179,
    top: 43,
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
  groupItem: {
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
  groupInner: {
    top: 1,
    width: 242,
    height: 242,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  sad: {
    top: 185,
    left: 105,
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
  kakaotalk202402242146136663Icon: {
    left: 20,
    width: 264,
    height: 197,
    top: 0,
    position: "absolute",
  },
  vectorGroup: {
    left: 184,
    width: 284,
    top: 0,
  },
  vectorParent: {
    top: 279,
    left: -124,
    width: 609,
  },
  diary: {
    backgroundColor: Color.colorKhaki,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Diary2;
