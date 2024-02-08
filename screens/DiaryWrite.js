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

<View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View style={styles.viewPosition}>
          <View style={[styles.rectangleView, styles.frameChildBorder]} />
          <TextInput
            style={[styles.year, styles.yearTypo]}
            placeholder="Year"
            placeholderTextColor="#838282"
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild1, styles.frameChildBorder]} />
          <TextInput
            style={[styles.month, styles.yearTypo]}
            placeholder="Month"
            placeholderTextColor="#838282"
          />
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupChild1, styles.frameChildBorder]} />
          <TextInput
            style={[styles.month, styles.yearTypo]}
            placeholder="Date"
            placeholderTextColor="#838282"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseParentLayout: {
    width: 31,
    height: 30,
    position: "absolute",
  },
  groupContainer: {
    top: 100,
    width: 300,
    left: 26,
  },
  groupParentLayout: {
    height: 31,
    position: "absolute",
  },
  rectangleParent1: {
    left: 130,
    top: 0,
    width: 80,
  },
  rectangleParent2: {
    left: 220,
    top: 0,
    width: 80,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  parentLayout: {
    height: 30,
    position: "absolute",
  },
  sortLeftLayout: {
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  groupItemLayout: {
    height: 300,
    width: 300,
    position: "absolute",
  },
  iHaveATypo: {
    width: 252,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    width: 60,
    position: "absolute",
  },
  editTypo: {
    width: 37,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    top: 2,
    lineHeight: 15,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupParentLayout: {
    height: 31,
    position: "absolute",
  },
  frameChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  yearTypo: {
    fontSize: FontSize.size_smi,
    top: 7,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  haveTypo: {
    left: 16,
    width: 126,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout1: {
    height: 74,
    width: 93,
    left: 144,
    position: "absolute",
  },
  iconLayout: {
    width: 44,
    left: 243,
    height: 74,
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
    top: 0,
  },
  diary: {
    top: 6,
    left: 41,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupParent: {
    top: 50,
    left: 17,
    width: 80,
  },
  groupItem: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  monday11March: {
    top: 16,
    color: Color.colorGray_300,
    width: 165,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    left: 24,
    textAlign: "left",
    position: "absolute",
  },
  iHaveA: {
    top: 36,
    left: 24,
    fontSize: FontSize.size_mini,
    width: 252,
    color: Color.colorDarkslategray_100,
  },
  iHaveA1: {
    top: 201,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    lineHeight: 15,
    width: 252,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs,
    left: 24,
    textAlign: "left",
    position: "absolute",
  },
  image49Icon: {
    top: 91,
    width: 150,
    height: 100,
    left: 24,
    position: "absolute",
  },
  image50Icon: {
    top: 89,
    left: 184,
    width: 70,
    height: 100,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: "#ff9900",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  delete: {
    left: 11,
  },
  rectangleGroup: {
    left: 164,
    top: 270,
    width: 60,
  },
  rectanglePressable: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGoldenrod_300,
    left: 0,
    top: 0,
  },
  edit: {
    left: 12,
  },
  rectangleContainer: {
    left: 230,
    top: 270,
    width: 60,
  },
  rectangleParent: {
    top: 143,
    left: 26,
  },
  rectangleView: {
    width: 120,
    height: 31,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  year: {
    left: 35,
  },
  viewPosition: {
    width: 120,
    height: 31,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    height: 31,
    position: "absolute",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 80,
  },
  month: {
    left: 15,
  },
  rectangleParent1: {
    left: 130,
    top: 0,
    width: 80,
  },
  rectangleParent2: {
    left: 220,
    top: 0,
    width: 80,
  },
  groupContainer: {
    top: 100,
    width: 300,
    left: 26,
  },
  otherMomsDiary: {
    fontSize: FontSize.size_mid,
    left: 0,
    top: 0,
  },
  frameChild: {
    zIndex: 0,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
  },
  frameItem: {
    zIndex: 1,
    marginTop: 18,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    backgroundColor: Color.colorWhite,
  },
  iHaveA2: {
    zIndex: 2,
    width: 126,
    marginTop: 18,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameInner: {
    top: 340,
    zIndex: 3,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    left: 0,
    position: "absolute",
  },
  frameChild1: {
    top: 450,
    zIndex: 4,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    left: 0,
    position: "absolute",
  },
  iHaveA3: {
    top: 355,
    zIndex: 5,
  },
  image70Icon: {
    top: 353,
    zIndex: 6,
  },
  image71Icon: {
    top: 352,
    zIndex: 7,
  },
  iHaveA4: {
    top: 465,
    zIndex: 8,
  },
  image72Icon: {
    top: 463,
    zIndex: 9,
  },
  image73Icon: {
    top: 462,
    zIndex: 10,
  },
  frameChild2: {
    top: 230,
    zIndex: 11,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    left: 0,
    position: "absolute",
  },
  image68Icon: {
    top: 243,
    zIndex: 12,
  },
  image69Icon: {
    top: 242,
    zIndex: 13,
  },
  iHaveA5: {
    top: 15,
    zIndex: 14,
  },
  image53Icon: {
    top: 13,
    zIndex: 15,
  },
  image54Icon: {
    top: 12,
    zIndex: 16,
  },
  iHaveA6: {
    top: 125,
    zIndex: 17,
  },
  image66Icon: {
    top: 123,
    zIndex: 18,
  },
  image67Icon: {
    top: 122,
    zIndex: 19,
  },
  iHaveA7: {
    top: 245,
    zIndex: 20,
  },
  frameScrollview: {
    top: 31,
    left: 4,
    position: "absolute",
    flex: 1,
  },
  otherMomsDiaryParent: {
    top: 470,
    width: 304,
    height: 318,
    left: 26,
    position: "absolute",
  },
  diaryCalender: {
    height: 800,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
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
