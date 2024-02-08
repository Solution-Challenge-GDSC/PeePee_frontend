import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Diary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diary}>
      <View style={styles.groupParent}>
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.groupChild, styles.sortLeftLayout]}
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
        </View>
        <Text style={styles.home}>Home</Text>
      </View>
      <Image
        style={styles.doubleLeftIcon}
        contentFit="cover"
        source={require("../assets/double-left.png")}
      />
      <Text
        style={[styles.howWouldYou, styles.todayIFellFlexBox]}
      >{`How would you 
describe your mood?`}</Text>
      <Text style={[styles.todayIFell, styles.todayIFellFlexBox]}>
        Today I Fell umm
      </Text>
      <View style={styles.groupContainer}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <View style={[styles.neutralParent, styles.frameItemLayout]}>
          <Image
            style={[styles.neutralIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/neutral.png")}
          />
          <Image
            style={[styles.cryingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/crying.png")}
          />
          <Image
            style={[styles.neutralIcon1, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/neutral1.png")}
          />
          <Image
            style={[styles.disappointedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/disappointed.png")}
          />
          <Image
            style={[styles.happyIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/happy.png")}
          />
        </View>
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </View>
      <Pressable
        style={styles.neutral}
        onPress={() => navigation.navigate("DiaryWrite")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/neutral2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    top: 0,
    position: "absolute",
  },
  sortLeftLayout: {
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  todayIFellFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  frameItemLayout: {
    height: 228,
    width: 437,
    position: "absolute",
  },
  iconLayout1: {
    height: 112,
    width: 112,
    top: 22,
    position: "absolute",
  },
  iconLayout: {
    height: 101,
    width: 101,
    position: "absolute",
  },
  groupChild: {
    left: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 0,
  },
  ellipseParent: {
    width: 31,
    left: 0,
    height: 30,
  },
  home: {
    top: 6,
    left: 41,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupParent: {
    top: 50,
    left: 17,
    width: 84,
    height: 30,
    position: "absolute",
  },
  doubleLeftIcon: {
    top: 488,
    left: 163,
    width: 35,
    height: 35,
    position: "absolute",
  },
  howWouldYou: {
    top: 98,
    left: 57,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  todayIFell: {
    top: 241,
    left: 108,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#656565",
  },
  frameChild: {
    width: 625,
    height: 635,
    left: 0,
  },
  neutralIcon: {
    left: 45,
  },
  cryingIcon: {
    top: 117,
    left: 336,
  },
  neutralIcon1: {
    left: 169,
    width: 80,
    height: 80,
  },
  disappointedIcon: {
    top: 127,
    left: 0,
  },
  happyIcon: {
    left: 263,
  },
  neutralParent: {
    top: 90,
    left: 97,
  },
  frameItem: {
    top: 317,
    left: 94,
  },
  groupContainer: {
    top: 499,
    left: -132,
    width: 616,
    height: 301,
    position: "absolute",
  },
  neutral: {
    left: 105,
    top: 288,
    width: 150,
    height: 150,
    position: "absolute",
  },
  diary: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Diary;
