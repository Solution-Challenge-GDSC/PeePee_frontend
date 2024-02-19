import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.main, styles.mainFlexBox]}>
      <Image
        style={styles.image69Icon}
        contentFit="cover"
        source={require("../assets/image-69.png")}
      />
      <View style={[styles.wrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.text, styles.textFlexBox]}>로고</Text>
      </View>
      <View style={[styles.mainInner, styles.mainInnerPosition]}>
        <View style={styles.groupItemLayout}>
          <Text style={[styles.helloOoo, styles.textFlexBox]}>Hello, ooo!</Text>
          <ImageBackground
            style={styles.groupPosition}
            resizeMode="cover"
            source={require("../assets/ellipse38.png")}
          />
        </View>
      </View>
      <View style={styles.mainChild}>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.text1Position]}>어플 이름</Text>
          <Text style={[styles.text2, styles.textFlexBox]}>
            어플 소개소개소개소개소개소개소고새고새고쇄고새ㅗ개고새ㅗ개쇄고새ㅗ
            어플 소개소개소개소개소개소개소고새고새고쇄고새ㅗ개고새ㅗ개쇄고새ㅗ
          </Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.mainInnerPosition]}>
        <View style={styles.groupItemLayout}>
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <Pressable
            style={[styles.groupInner, styles.groupPosition]}
            onPress={() => navigation.navigate("Recommend1")}
          />
          <TextInput
            style={[styles.searchPlay, styles.textTypo]}
            placeholder="Search Play"
            multiline={true}
            placeholderTextColor="#dfe0df"
          />
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.mainInnerPosition]}>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <Pressable
            style={[styles.rectanglePressable, styles.rectangleLayout]}
            onPress={() => navigation.navigate("Recommend")}
          />
          <Text style={[styles.recommend, styles.recommendPosition]}>
            Recommend
          </Text>
          <Image
            style={[styles.searchForLove, styles.rightIconLayout]}
            contentFit="cover"
            source={require("../assets/search-for-love.png")}
          />
          <Image
            style={[styles.rightArrowIcon, styles.rightIconPosition]}
            contentFit="cover"
            source={require("../assets/right-arrow.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <Pressable
            style={[styles.rectanglePressable, styles.rectangleLayout]}
            onPress={() => navigation.navigate("DiaryCalender")}
          />
          <Text style={[styles.recommend, styles.recommendPosition]}>
            Diary
          </Text>
          <Image
            style={[styles.searchForLove, styles.rightIconLayout]}
            contentFit="cover"
            source={require("../assets/journal.png")}
          />
          <Image
            style={[styles.rightArrowIcon1, styles.rightIconLayout]}
            contentFit="cover"
            source={require("../assets/right-arrow.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Pressable
            style={[styles.rectanglePressable, styles.rectangleLayout]}
            onPress={() => navigation.navigate("Community")}
          />
          <Text style={[styles.recommend, styles.recommendPosition]}>
            Community
          </Text>
          <Image
            style={[styles.searchForLove, styles.rightIconLayout]}
            contentFit="cover"
            source={require("../assets/people.png")}
          />
          <Image
            style={[styles.rightArrowIcon2, styles.rightIconPosition]}
            contentFit="cover"
            source={require("../assets/right-arrow.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupViewPosition]}>
          <Pressable
            style={[styles.rectanglePressable, styles.rectangleLayout]}
            onPress={() => navigation.navigate("MeetUpIntrowbaby")}
          />
          <Text style={[styles.meetUp, styles.meetUpPosition]}>Meet Up</Text>
          <Image
            style={[styles.disneyMoviesIcon, styles.meetUpPosition]}
            contentFit="cover"
            source={require("../assets/disney-movies.png")}
          />
          <Image
            style={[styles.rightArrowIcon3, styles.rightIconLayout]}
            contentFit="cover"
            source={require("../assets/right-arrow.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorGainsboro_200,
  },
  mainInnerPosition: {
    left: 30,
    position: "absolute",
    justifyContent: "center",
  },
  text1Position: {
    top: 0,
    position: "absolute",
  },
  groupItemBg: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  groupPosition: {
    width: 50,
    left: 250,
    top: 0,
    height: 50,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleLayout: {
    height: 150,
    width: 140,
    top: 0,
    position: "absolute",
  },
  recommendPosition: {
    left: 10,
    position: "absolute",
  },
  rightIconLayout: {
    height: 30,
    width: 30,
  },
  rightIconPosition: {
    left: 94,
    height: 30,
    width: 30,
    position: "absolute",
  },
  groupViewPosition: {
    top: 170,
    height: 150,
    width: 140,
    position: "absolute",
  },
  meetUpPosition: {
    left: 15,
    position: "absolute",
  },
  image69Icon: {
    width: 785,
    height: 1046,
    zIndex: 0,
  },
  text: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  wrapper: {
    top: 17,
    left: 156,
    zIndex: 1,
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
  },
  helloOoo: {
    top: 29,
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    left: 0,
    position: "absolute",
  },
  groupItemLayout: {
    height: 50,
    width: 300,
  },
  mainInner: {
    top: 216,
    alignItems: "flex-end",
    zIndex: 2,
    flexDirection: "row",
    left: 30,
  },
  text1: {
    left: 102,
    fontSize: 30,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    textAlign: "left",
    color: Color.colorGainsboro_200,
  },
  text2: {
    top: 46,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.7,
    width: 320,
    left: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  parent: {
    height: 94,
    width: 320,
  },
  mainChild: {
    top: 75,
    left: 20,
    zIndex: 3,
    position: "absolute",
    alignItems: "center",
  },
  groupItem: {
    top: 0,
    position: "absolute",
    height: 50,
    width: 300,
  },
  groupInner: {
    borderRadius: Border.br_81xl,
    backgroundColor: "#ffd27c",
    shadowColor: "#ffd27c",
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  searchPlay: {
    top: 16,
    left: 37,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    position: "absolute",
  },
  searchIcon: {
    top: 13,
    left: 263,
    width: 25,
    height: 25,
    position: "absolute",
  },
  frameView: {
    top: 297,
    zIndex: 4,
    alignItems: "center",
  },
  rectanglePressable: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_11xl,
    left: 0,
  },
  recommend: {
    top: 102,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  searchForLove: {
    top: 60,
    left: 10,
    position: "absolute",
  },
  rightArrowIcon: {
    top: 8,
  },
  rectangleGroup: {
    left: 0,
    zIndex: 0,
  },
  rightArrowIcon1: {
    left: 98,
    top: 8,
    position: "absolute",
  },
  rectangleContainer: {
    left: 160,
    zIndex: 1,
  },
  rightArrowIcon2: {
    top: 10,
  },
  groupView: {
    left: 0,
    zIndex: 2,
  },
  meetUp: {
    top: 92,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  disneyMoviesIcon: {
    top: 50,
    height: 30,
    width: 30,
  },
  rightArrowIcon3: {
    left: 103,
    top: 0,
    position: "absolute",
  },
  rectangleParent1: {
    left: 160,
    zIndex: 3,
  },
  groupParent: {
    top: 420,
    zIndex: 5,
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  main: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default Main;
