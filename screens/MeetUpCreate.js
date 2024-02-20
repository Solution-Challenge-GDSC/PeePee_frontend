import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MeetUpCreate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetUpCreate}>
      <Image
        style={[styles.meetUpCreateChild, styles.sortLeftLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.sortLeft, styles.sortLeftLayout]}
        onPress={() => navigation.navigate("MeetUpCategory")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={[styles.home, styles.homeClr]}>Home</Text>
      <Text style={[styles.createNewMeet, styles.homeClr]}>
        Create New Meet UP!
      </Text>
      <Text style={styles.text}>
        어떤 활동을 하고싶은지, 어떤 활동을 할건지, 예상 인원 등을 상세히
        적어주세요
      </Text>
      <View style={[styles.meetUpCreateItem, styles.meetBorder]} />
      <TextInput
        style={[styles.title, styles.homeTypo]}
        placeholder="Title"
        multiline={true}
        placeholderTextColor="#9e9e9e"
      />
      <TextInput
        style={[styles.writeText, styles.createTypo]}
        placeholder="Write Text ..."
        multiline={true}
        placeholderTextColor="#9e9e9e"
      />
      <View style={[styles.meetUpCreateInner, styles.meetBorder]} />
      <View style={[styles.rectangleView, styles.titlePosition]} />
      <Pressable style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.create, styles.createTypo]}>Create</Text>
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
      <TextInput
        style={styles.textinput}
        placeholder="Enter place"
        multiline={true}
      />
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput
          style={styles.cafe}
          placeholder="Enter place"
          multiline={true}
          placeholderTextColor="#bbb"
        />
      </Pressable>
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <TextInput
          style={styles.cafe}
          placeholder="Enter place"
          multiline={true}
          placeholderTextColor="#000"
        />
      </Pressable>
      <Pressable style={[styles.groupPressable, styles.groupPressablePosition]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput
          style={styles.cafe}
          placeholder="Enter place"
          multiline={true}
          placeholderTextColor="#bbb"
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.groupPressablePosition]}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput
          style={styles.cafe}
          placeholder="Enter place"
          multiline={true}
          placeholderTextColor="#bbb"
        />
      </Pressable>
      <Pressable style={[styles.rectangleParent2, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput
          style={styles.cafe}
          placeholder="Enter place"
          multiline={true}
          placeholderTextColor="#bbb"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sortLeftLayout: {
    height: 30,
    top: 38,
    width: 30,
    position: "absolute",
  },
  homeClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  meetBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  createTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  titlePosition: {
    position: "absolute",
    left: 40,
  },
  rectangleLayout: {
    height: 24,
    width: 90,
    top: 181,
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro_100,
    height: 24,
    width: 90,
    left: 0,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupPressablePosition: {
    top: 211,
    height: 24,
    width: 90,
    position: "absolute",
  },
  meetUpCreateChild: {
    left: 18,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 17,
  },
  home: {
    top: 44,
    left: 58,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  createNewMeet: {
    top: 88,
    left: 66,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
  },
  text: {
    top: 125,
    color: "#6a6a6a",
    width: 300,
    left: 30,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  meetUpCreateItem: {
    top: 310,
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.colorFloralwhite,
    borderWidth: 3,
    width: 320,
    height: 380,
    borderRadius: Border.br_3xs,
    left: 20,
  },
  title: {
    top: 332,
    left: 40,
    position: "absolute",
  },
  writeText: {
    top: 389,
    fontSize: FontSize.size_smi,
    left: 40,
  },
  meetUpCreateInner: {
    top: 368,
    left: 34,
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 2,
    width: 292,
    height: 2,
  },
  rectangleView: {
    top: 245,
    backgroundColor: "rgba(191, 184, 50, 0.8)",
    width: 280,
    height: 50,
    left: 40,
    borderRadius: Border.br_3xs,
  },
  groupChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: "#472e17",
    left: 0,
    top: 0,
    height: 40,
    width: 300,
    position: "absolute",
  },
  create: {
    top: 12,
    left: 98,
    color: Color.colorWhite,
    width: 79,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    fontWeight: "500",
  },
  rightIcon: {
    top: 8,
    left: 172,
    height: 25,
    width: 30,
    position: "absolute",
  },
  rectangleParent: {
    top: 700,
    height: 40,
    width: 300,
    left: 30,
    position: "absolute",
  },
  textinput: {
    top: 262,
    left: 56,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
  },
  cafe: {
    top: 6,
    fontSize: FontSize.size_4xs,
    left: 20,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleGroup: {
    left: 40,
  },
  groupInner: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  rectangleContainer: {
    left: 135,
  },
  groupPressable: {
    left: 85,
  },
  rectangleParent1: {
    left: 185,
  },
  rectangleParent2: {
    left: 230,
  },
  meetUpCreate: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MeetUpCreate;
