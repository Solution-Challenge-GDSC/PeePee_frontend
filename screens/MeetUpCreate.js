import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

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
      <Text style={styles.createNewMeet}>Create New Meet UP!</Text>
      <Text style={styles.text}>
        어떤 활동을 하고싶은지, 어떤 활동을 할건지, 예상 인원 등을 상세히
        적어주세요
      </Text>
      <View style={[styles.meetUpCreateItem, styles.meetBorder]} />
      <TextInput
        style={[styles.meetUpCreateInner, styles.rectangleViewLayout]}
        multiline={true}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Image
          style={styles.cameraIcon}
          contentFit="cover"
          source={require("../assets/camera.png")}
        />
        <Text style={[styles.inputPhoto, styles.createTypo]}>Input Photo</Text>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  sortLeftLayout: {
    height: 30,
    top: 50,
    width: 30,
    position: "absolute",
  },
  meetBorder: {
    borderWidth: 3,
    borderColor: Color.colorFloralwhite,
    borderStyle: "solid",
    backgroundColor: Color.colorFloralwhite,
  },
  rectangleViewLayout: {
    width: 280,
    left: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout: {
    width: 150,
    height: 30,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  createTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 300,
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
  createNewMeet: {
    top: 108,
    left: 66,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 145,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    width: 300,
    fontSize: FontSize.size_xs,
    left: 30,
    textAlign: "center",
    position: "absolute",
  },
  meetUpCreateItem: {
    top: 215,
    left: 20,
    width: 320,
    height: 410,
    borderRadius: Border.br_3xs,
    borderWidth: 3,
    borderColor: Color.colorFloralwhite,
    borderStyle: "solid",
    backgroundColor: Color.colorFloralwhite,
    position: "absolute",
  },
  meetUpCreateInner: {
    top: 295,
    height: 309,
    borderWidth: 3,
    borderColor: Color.colorFloralwhite,
    borderStyle: "solid",
    backgroundColor: Color.colorFloralwhite,
  },
  rectangleView: {
    top: 235,
    backgroundColor: "rgba(191, 184, 50, 0.8)",
    height: 50,
  },
  groupChild: {
    backgroundColor: Color.colorLightseagreen,
    width: 150,
    height: 30,
    position: "absolute",
  },
  cameraIcon: {
    top: 4,
    left: 24,
    width: 23,
    height: 23,
    position: "absolute",
  },
  inputPhoto: {
    top: 7,
    left: 53,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    width: 85,
  },
  rectangleParent: {
    top: 650,
    left: 105,
  },
  groupItem: {
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  create: {
    top: 12,
    left: 98,
    fontSize: FontSize.size_mini,
    width: 79,
    textAlign: "center",
  },
  rightIcon: {
    top: 8,
    left: 172,
    height: 25,
    width: 30,
    position: "absolute",
  },
  rectangleGroup: {
    top: 700,
    left: 30,
    height: 40,
  },
  textinput: {
    top: 252,
    left: 56,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  meetUpCreate: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MeetUpCreate;
