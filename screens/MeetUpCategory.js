import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MeetUpCategory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetUpCategory}>
      <View style={[styles.image78Parent, styles.groupParentLayout]}>
        <Image
          style={[styles.image78Icon, styles.parentPosition]}
          contentFit="cover"
          source={require("../assets/image-78.png")}
        />
        <Text style={styles.titleTitleTitle}>Title Title Title</Text>
        <Text
          style={styles.jibongRo51beonGilBucheon}
        >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
        <Image
          style={[styles.locationIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
      </View>
      <ScrollView
        style={styles.groupParent}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupContainer}>
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-35.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.image78Group, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/image-78.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-35.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-35.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.image78Container, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/image-78.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.image78Parent1, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/image-78.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
          <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
            <Image
              style={[styles.image78Icon, styles.parentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-35.png")}
            />
            <Text style={styles.titleTitleTitle}>Title Title Title</Text>
            <Text
              style={styles.jibongRo51beonGilBucheon}
            >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
            <Image
              style={[styles.locationIcon, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
        </View>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.near, styles.nearTypo]}>Near</Text>
      </ScrollView>
      <View style={styles.groupParent1}>
        <View style={[styles.ellipseParent, styles.parentPosition]}>
          <Image
            style={[styles.ellipseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.sortLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/sort-left.png")}
          />
        </View>
        <Text style={[styles.select, styles.selectClr]}>Select</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
        <Image
          style={[styles.searchIcon, styles.quillPenLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <TextInput
          style={[styles.searchPlayground, styles.nearPosition]}
          placeholder="Search Playground"
          multiline={true}
          placeholderTextColor="#818181"
        />
      </View>
      <View style={[styles.meetUpCategoryChild, styles.rectangleViewBorder]} />
      <Text style={[styles.createNew, styles.selectClr]}>Create New</Text>
      <Pressable
        style={[styles.quillPen, styles.quillPenLayout]}
        onPress={() => navigation.navigate("MeetUpCreate")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/quill-pen.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupParentLayout: {
    height: 130,
    width: 300,
    position: "absolute",
  },
  parentPosition: {
    top: 0,
    left: 0,
  },
  frameChildLayout: {
    height: 20,
    position: "absolute",
  },
  nearTypo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iconLayout: {
    width: 30,
    height: 30,
    top: 0,
    position: "absolute",
  },
  selectClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 45,
    width: 300,
  },
  rectangleViewBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  quillPenLayout: {
    height: 25,
    position: "absolute",
  },
  nearPosition: {
    top: 14,
    position: "absolute",
  },
  image78Icon: {
    borderRadius: Border.br_mini,
    left: 0,
    height: 130,
    width: 300,
    position: "absolute",
  },
  titleTitleTitle: {
    top: 77,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    left: 13,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  jibongRo51beonGilBucheon: {
    left: 36,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 99,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  locationIcon: {
    width: 20,
    top: 99,
    height: 20,
    left: 13,
  },
  image78Parent: {
    top: 873,
    left: 30,
  },
  rectangleParent: {
    left: 0,
    height: 130,
    width: 300,
    position: "absolute",
  },
  image78Group: {
    top: 140,
    left: 0,
  },
  rectangleGroup: {
    top: 280,
    left: 0,
  },
  rectangleContainer: {
    top: 420,
    left: 0,
  },
  groupView: {
    top: 1260,
    left: 0,
  },
  rectangleParent1: {
    top: 560,
    left: 0,
  },
  image78Container: {
    top: 980,
    left: 0,
  },
  rectangleParent2: {
    top: 1120,
    left: 0,
  },
  rectangleParent3: {
    top: 1540,
    left: 0,
  },
  image78Parent1: {
    top: 840,
    left: 0,
  },
  rectangleParent4: {
    top: 1400,
    left: 0,
  },
  groupContainer: {
    height: 1670,
    zIndex: 0,
    width: 300,
  },
  frameChild: {
    left: 230,
    borderRadius: Border.br_81xl,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 50,
    zIndex: 1,
    top: 10,
    backgroundColor: Color.colorWhite,
  },
  near: {
    left: 245,
    color: "#747474",
    zIndex: 2,
    top: 14,
    position: "absolute",
    textAlign: "left",
  },
  groupParent: {
    top: 173,
    left: 30,
    position: "absolute",
    flex: 1,
  },
  ellipseIcon: {
    left: 3,
  },
  sortLeftIcon: {
    left: 0,
  },
  ellipseParent: {
    width: 33,
    height: 30,
    left: 0,
    position: "absolute",
  },
  select: {
    top: 6,
    left: 43,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  groupParent1: {
    top: 38,
    left: 15,
    width: 89,
    height: 30,
    position: "absolute",
  },
  rectangleView: {
    borderColor: "#b4b4b4",
    borderWidth: 1,
    height: 45,
    width: 300,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  searchIcon: {
    left: 20,
    width: 25,
    top: 10,
  },
  searchPlayground: {
    left: 55,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_smi,
  },
  rectangleParent5: {
    top: 98,
    left: 30,
    position: "absolute",
  },
  meetUpCategoryChild: {
    top: 740,
    left: 130,
    backgroundColor: "#f8f8f8",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 0.5,
    width: 100,
    height: 30,
  },
  createNew: {
    top: 749,
    left: 169,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  quillPen: {
    left: 140,
    top: 743,
    width: 21,
  },
  meetUpCategory: {
    height: 800,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default MeetUpCategory;
