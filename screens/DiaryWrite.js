import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DiaryWrite = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diaryWrite}>
      <View style={[styles.diaryWriteInner, styles.ellipseParentLayout]}>
        <View style={[styles.ellipseParent, styles.sortLeftPosition]}>
          <Image
            style={[styles.groupChild, styles.sortLeftLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Pressable
            style={[styles.sortLeft, styles.sortLeftLayout]}
            onPress={() => navigation.navigate("Diary")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/sort-left.png")}
            />
          </Pressable>
        </View>
      </View>
      <Text style={styles.writeYourDiary}>Write Your Diary</Text>
      <Text style={styles.writeYourDiary1}>
        Write your Diary Write your Diary Write your Diary Write your Diary
        Write your Diary Write y
      </Text>
      <View style={styles.diaryWriteChild} />
      <Pressable style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Image
          style={styles.cameraIcon}
          contentFit="cover"
          source={require("../assets/camera.png")}
        />
        <Text style={[styles.inputPhoto, styles.unlockFlexBox]}>
          Input Photo
        </Text>
      </Pressable>
      <Pressable style={[styles.groupPressable, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <Pressable
            style={[styles.groupInner, styles.groupLayout]}
            onPress={() => navigation.navigate("DiaryCalender")}
          />
          <Text style={styles.upload}>Upload</Text>
          <Image
            style={[styles.rightIcon, styles.sortLeftLayout]}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </Pressable>
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.unlock, styles.unlockPosition]}>unlock</Text>
        <Image
          style={[styles.padlockIcon, styles.unlockPosition]}
          contentFit="cover"
          source={require("../assets/padlock.png")}
        />
      </Pressable>
      <TextInput
        style={styles.diaryWriteItem}
        placeholder={`Enter Text >`}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseParentLayout: {
    width: 31,
    height: 30,
    position: "absolute",
  },
  sortLeftPosition: {
    left: 0,
    top: 0,
  },
  sortLeftLayout: {
    width: 30,
    position: "absolute",
  },
  groupItemLayout: {
    width: 150,
    height: 30,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  unlockFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  groupLayout: {
    height: 40,
    width: 300,
    position: "absolute",
  },
  rectangleLayout: {
    height: 20,
    width: 50,
    position: "absolute",
  },
  unlockPosition: {
    top: 5,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    top: 0,
    width: 30,
    height: 30,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 0,
    top: 0,
    height: 30,
  },
  ellipseParent: {
    height: 30,
    width: 31,
    position: "absolute",
  },
  diaryWriteInner: {
    top: 50,
    left: 17,
    height: 30,
  },
  writeYourDiary: {
    top: 98,
    left: 92,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  writeYourDiary1: {
    top: 135,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    width: 300,
    left: 30,
    textAlign: "center",
    position: "absolute",
  },
  diaryWriteChild: {
    top: 215,
    left: 20,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod_300,
    borderWidth: 3,
    width: 320,
    height: 410,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    backgroundColor: Color.colorGoldenrod_300,
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
    width: 85,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 640,
    left: 105,
  },
  groupInner: {
    backgroundColor: Color.colorGoldenrod_200,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  upload: {
    top: 12,
    left: 98,
    fontSize: FontSize.size_mini,
    width: 79,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  rightIcon: {
    top: 8,
    left: 172,
    height: 25,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupPressable: {
    top: 700,
    left: 30,
    height: 40,
  },
  rectangleView: {
    backgroundColor: Color.colorLightseagreen,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  unlock: {
    left: 7,
    fontSize: FontSize.size_5xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 29,
    textAlign: "left",
    color: Color.colorWhite,
  },
  padlockIcon: {
    left: 34,
    width: 10,
    height: 10,
  },
  rectangleContainer: {
    top: 595,
    left: 280,
  },
  diaryWriteItem: {
    top: 237,
    left: 41,
    width: 278,
    height: 347,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  diaryWrite: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default DiaryWrite;
