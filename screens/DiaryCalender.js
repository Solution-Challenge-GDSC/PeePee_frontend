import * as React from "react";
import { Image, Alert } from "react-native"; // Alert 추가
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const DiaryCalender = () => {
  const navigation = useNavigation();

  const handleDeletePress = () => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            // 여기에 삭제하는 로직 추가
            console.log("Deleting..."); // 예시로 console에 출력
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleWritePress1 = () => {
    navigation.navigate("Diary");
  };

  const handleWritePress2 = () => {
      navigation.navigate("Diary");
    };

  return (
    <View style={styles.diaryCalender}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.ellipseParent, styles.parentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Pressable
            style={[styles.sortLeft, styles.sortLeftLayout]}
            onPress={() => navigation.navigate("Main")}
          >
          <Image
            style={[styles.sortLeftIcon, styles.groupChildLayout]}
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


        <Pressable style={[styles.rectangleGroup, styles.groupLayout]}
         onPress={handleDeletePress}>
          <Pressable style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
        </Pressable>


        <Pressable style={[styles.rectangleContainer, styles.groupLayout]}
        onPress={handleWritePress2}>
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
        </Pressable>


      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild1, styles.frameChildBorder]} />
          <TextInput
            style={[styles.year, styles.yearTypo]}
            placeholder="Year"
            placeholderTextColor="#838282"
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild2, styles.frameChildBorder]} />
          <TextInput
            style={[styles.month, styles.havePosition]}
            placeholder="Month"
            placeholderTextColor="#838282"
          />
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupChild2, styles.frameChildBorder]} />
          <TextInput
            style={[styles.date, styles.yearTypo]}
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
          <View style={[styles.frameItem, styles.frameChildBorder]} />
          <Text
            style={[styles.iHaveA2, styles.haveTypo]}
          >{`I have a happy day with my baby w
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

      <Pressable style={[styles.groupPressable, styles.groupLayout]}
      onPress={handleWritePress1}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Write</Text>
      </Pressable>

      
      <Image
        style={styles.diaryCalenderChild}
        contentFit="cover"
        source={require("../assets/group-191.png")}
      />
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
  groupChildLayout: {
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
    color: Color.colorDarkslategray,
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
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  yearTypo: {
    fontSize: FontSize.size_smi,
    top: 7,
    fontFamily: FontFamily.interRegular,
  },
  havePosition: {
    left: 16,
    position: "absolute",
  },
  haveTypo: {
    width: 126,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
  sortLeftIcon: {
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
    color: "#000",
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
    backgroundColor: "#f8f4f1",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  monday11March: {
    top: 16,
    color: "#838282",
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
    color: Color.colorDarkslategray,
  },
  iHaveA1: {
    top: 201,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    lineHeight: 15,
    width: 252,
    color: Color.colorDarkslategray,
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
  rectangleView: {
    borderRadius: 100,
    backgroundColor: "#bfb832",
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
  groupChild1: {
    width: 84,
    height: 31,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  year: {
    left: 21,
    position: "absolute",
  },
  groupPosition: {
    width: 84,
    height: 31,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild2: {
    height: 31,
    position: "absolute",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    width: 80,
  },
  month: {
    fontSize: FontSize.size_smi,
    top: 7,
    fontFamily: FontFamily.interRegular,
  },
  rectangleParent1: {
    left: 91,
    top: 0,
    width: 80,
  },
  date: {
    left: 15,
    position: "absolute",
  },
  rectangleParent2: {
    left: 178,
    top: 0,
    width: 80,
  },
  groupContainer: {
    width: 258,
    top: 100,
    left: 26,
  },
  otherMomsDiary: {
    fontSize: 17,
    left: 0,
    top: 0,
  },
  frameChild: {
    zIndex: 0,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  frameItem: {
    zIndex: 1,
    marginTop: 18,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  iHaveA2: {
    zIndex: 2,
    marginTop: 18,
  },
  frameInner: {
    top: 340,
    zIndex: 3,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameChild1: {
    top: 450,
    zIndex: 4,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 300,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  iHaveA3: {
    top: 355,
    zIndex: 5,
    left: 16,
    position: "absolute",
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
    left: 16,
    position: "absolute",
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
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
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
    left: 16,
    position: "absolute",
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
    left: 16,
    position: "absolute",
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
    left: 16,
    position: "absolute",
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
  groupChild4: {
    backgroundColor: "#6073d5",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  groupPressable: {
    top: 413,
    left: 122,
  },
  diaryCalenderChild: {
    left: 290,
    width: 32,
    height: 28,
    top: 100,
    position: "absolute",
  },
  diaryCalender: {
    width: "100%",
    height: 800,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default DiaryCalender;
