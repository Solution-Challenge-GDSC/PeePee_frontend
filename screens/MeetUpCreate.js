import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MeetUpCreate = () => {
  return (
    <View style={styles.meetUpCreate}>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.sortLeftIcon, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </View>
      <Text style={styles.home}>Home</Text>
      <Text style={styles.createNewMeet}>Create New Meet UP!</Text>
      <Text style={styles.text}>
        어떤 활동을 하고싶은지, 어떤 활동을 할건지, 예상 인원 등을 상세히
        적어주세요
      </Text>
      <View style={[styles.meetUpCreateChild, styles.cafePosition]} />
      <TextInput
        style={styles.title}
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
      <View style={styles.meetUpCreateItem} />
      <Pressable style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.create, styles.text1Clr]}>Create</Text>
        <Image
          style={[styles.rightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.text1, styles.text1Clr]}>장소를 선택해주세요</Text>
      </Pressable>
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.cafe, styles.cafePosition]}>Cafe</Text>
      </Pressable>
      <Pressable style={[styles.groupPressable, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.cafe, styles.cafePosition]}>Restaurant</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentPosition]}
      >
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.cafe, styles.cafePosition]}>Activity</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentPosition]}
      >
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.cafe, styles.cafePosition]}>etc.</Text>
      </Pressable>
      <Pressable style={[styles.rectangleParent3, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.cafe, styles.cafePosition]}>Park</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 30,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  cafePosition: {
    left: 20,
    position: "absolute",
  },
  createTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupItemLayout: {
    height: 40,
    width: 300,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    width: 280,
    position: "absolute",
  },
  rectangleLayout: {
    height: 24,
    width: 90,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 211,
    height: 24,
    width: 90,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    top: 0,
    width: 30,
    height: 30,
  },
  sortLeftIcon: {
    width: 30,
    position: "absolute",
    height: 30,
  },
  ellipseParent: {
    top: 38,
    left: 17,
    width: 31,
    height: 30,
    position: "absolute",
  },
  home: {
    top: 44,
    left: 58,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  createNewMeet: {
    top: 88,
    left: 66,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    top: 125,
    color: "#6a6a6a",
    width: 300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 30,
    textAlign: "center",
    position: "absolute",
  },
  meetUpCreateChild: {
    top: 310,
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.colorFloralwhite,
    borderWidth: 3,
    width: 320,
    height: 380,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  title: {
    top: 332,
    left: 40,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  writeText: {
    top: 389,
    fontSize: 13,
    left: 40,
    position: "absolute",
  },
  meetUpCreateItem: {
    top: 368,
    left: 34,
    borderColor: "#f4f4f4",
    borderTopWidth: 2,
    width: 292,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  groupItem: {
    borderRadius: 100,
    backgroundColor: "#472e17",
    left: 0,
    top: 0,
  },
  create: {
    top: 12,
    left: 98,
    width: 79,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  rightIcon: {
    top: 8,
    left: 172,
    height: 25,
  },
  rectangleParent: {
    top: 700,
    left: 30,
    height: 40,
  },
  groupInner: {
    backgroundColor: "rgba(191, 184, 50, 0.8)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  text1: {
    top: 17,
    left: 16,
    width: 250,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  rectangleGroup: {
    top: 245,
    left: 40,
  },
  rectangleView: {
    backgroundColor: Color.colorGoldenrod_100,
    borderColor: Color.colorGainsboro,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  cafe: {
    top: 6,
    fontSize: FontSize.size_4xs,
    width: 50,
    fontFamily: FontFamily.interRegular,
    left: 20,
    textAlign: "center",
    color: Color.colorBlack,
  },
  rectangleContainer: {
    top: 181,
    width: 90,
    left: 40,
  },
  groupPressable: {
    left: 135,
    top: 181,
    width: 90,
  },
  rectangleParent1: {
    left: 85,
  },
  rectangleParent2: {
    left: 185,
  },
  rectangleParent3: {
    left: 230,
    top: 181,
    width: 90,
  },
  meetUpCreate: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MeetUpCreate;