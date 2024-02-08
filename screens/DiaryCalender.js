import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DiaryCalender = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diaryCalender}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.ellipseParent, styles.parentLayout]}>
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
        <Text style={styles.diary}>Diary</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={styles.monday11March}>Monday, 11 March 2023</Text>
        <Text
          style={[styles.iHaveA, styles.iHaveATypo]}
        >{`I have a happy day with my baby w
how to blablabla `}</Text>
        <Text style={styles.iHaveA1}>
          I have a happy day with my baby wow I have ath my baby wow:) I have a
          happy day with my baby wow:) I have a happy day with my baby wow I
          have ath my baby wow:) I have a happy ...
        </Text>
        <Image
          style={styles.image49Icon}
          contentFit="cover"
          source={require("../assets/image-49.png")}
        />
        <Image
          style={styles.image50Icon}
          contentFit="cover"
          source={require("../assets/image-50.png")}
        />
        <ImageBackground
          style={styles.image49Icon}
          resizeMode="cover"
          source={require("../assets/image-49.png")}
        />
        <ImageBackground
          style={styles.image50Icon}
          resizeMode="cover"
          source={require("../assets/image-50.png")}
        />
        <Pressable style={[styles.rectangleGroup, styles.groupLayout]}>
          <Pressable style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
        </Pressable>
        <Pressable style={[styles.rectangleContainer, styles.groupLayout]}>
          <Pressable
            style={[styles.rectanglePressable, styles.groupLayout]}
            onPress={() => navigation.navigate("Diary")}
          />
          <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
        </Pressable>
      </View>
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
      <View style={styles.otherMomsDiaryParent}>
        <Text style={[styles.otherMomsDiary, styles.iHaveATypo]}>
          Other Mom’s Diary
        </Text>
        <ScrollView
          style={styles.frameScrollview}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <View style={styles.frameItem} />
          <Text style={styles.iHaveA2}>{`I have a happy day with my baby w
how to blablabla `}</Text>
          <View style={[styles.frameInner, styles.frameChildBorder]} />
          <View style={[styles.frameChild1, styles.frameChildBorder]} />
          <Text
            style={[styles.iHaveA3, styles.haveTypo]}
          >{`I have a happy day with my baby w
how to blablabla `}</Text>
          <Image
            style={[styles.image70Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-70.png")}
          />
          <Image
            style={[styles.image71Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-71.png")}
          />
          <Text
            style={[styles.iHaveA4, styles.haveTypo]}
          >{`I have a happy day with my baby w
how to blablabla `}</Text>
          <Image
            style={[styles.image72Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-70.png")}
          />
          <Image
            style={[styles.image73Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-71.png")}
          />
          <View style={[styles.frameChild2, styles.frameChildBorder]} />
          <Image
            style={[styles.image68Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-70.png")}
          />
          <Image
            style={[styles.image69Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-71.png")}
          />
          <Text
            style={[styles.iHaveA5, styles.haveTypo]}
          >{`I have a happy day with my baby w
how to blablabla `}</Text>
          <Image
            style={[styles.image53Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-70.png")}
          />
          <Image
            style={[styles.image54Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-71.png")}
          />
          <Text
            style={[styles.iHaveA6, styles.haveTypo]}
          >{`I have a happy day with my baby w
how to blablabla `}</Text>
          <Image
            style={[styles.image66Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-70.png")}
          />
          <Image
            style={[styles.image67Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-71.png")}
          />
          <Text
            style={[styles.iHaveA7, styles.haveTypo]}
          >{`I have a happy day with my baby w
how to blablabla `}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default DiaryCalender;
