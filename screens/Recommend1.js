import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Recommend1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommend}>
      <Pressable
        style={styles.ellipseParent}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.sortLeftIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/sort-left1.png")}
        />
        <Text style={styles.home}>Home</Text>
        <View style={styles.groupItem} />
      </Pressable>
      <Text
        style={[styles.whatKindOf, styles.whatKindOfPosition]}
      >{`What kind of 
development is my child in?`}</Text>
      <Text
        style={styles.itRecommendsThe}
      >{`It recommends the optimal play according 
to the child's developmental status. 
Select all that correspond 
to your child's response for each category.`}</Text>
      <Image
        style={styles.image66Icon}
        contentFit="cover"
        source={require("../assets/image-66.png")}
      />
      <View style={[styles.groupParent, styles.whatKindOfPosition]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <TextInput
            style={[styles.enterYourChilds, styles.goToRecommendTypo]}
            placeholder="Enter your child’s age"
            placeholderTextColor="#725233"
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <Pressable
            style={[styles.rectanglePressable, styles.groupInnerLayout]}
            onPress={() => navigation.navigate("RecommendInputage")}
          />
          <Text style={[styles.goToRecommend, styles.goToRecommendTypo]}>
            Go to Recommend
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 30,
    width: 30,
    top: 4,
    position: "absolute",
  },
  whatKindOfPosition: {
    left: 25,
    position: "absolute",
  },
  rectangleLayout: {
    height: 40,
    position: "absolute",
  },
  groupInnerLayout: {
    borderRadius: Border.br_81xl,
    height: 40,
    width: 300,
    top: 0,
    position: "absolute",
  },
  goToRecommendTypo: {
    top: 12,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupChild: {
    left: 1,
  },
  sortLeftIcon: {
    left: 0,
  },
  home: {
    top: 10,
    left: 41,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    left: 85,
    backgroundColor: Color.colorGainsboro_300,
    width: 230,
    top: 0,
    height: 38,
    position: "absolute",
  },
  ellipseParent: {
    left: 23,
    width: 315,
    height: 38,
    top: 50,
    position: "absolute",
  },
  whatKindOf: {
    top: 119,
    fontSize: 23,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_500,
    textAlign: "center",
  },
  itRecommendsThe: {
    top: 215,
    color: "#725233",
    width: 311,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    left: 25,
    position: "absolute",
  },
  image66Icon: {
    top: 325,
    left: -17,
    width: 395,
    height: 300,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: "#fff6d4",
    left: 0,
  },
  enterYourChilds: {
    left: 57,
  },
  rectangleParent: {
    width: 300,
    height: 40,
    left: 3,
    top: 0,
  },
  rectanglePressable: {
    backgroundColor: Color.colorGray_500,
    left: 3,
    borderRadius: Border.br_81xl,
  },
  goToRecommend: {
    color: "#ffe1c6",
    width: 311,
    textAlign: "center",
    left: 0,
  },
  rectangleGroup: {
    width: 311,
    left: 0,
    height: 40,
    top: 50,
  },
  groupParent: {
    top: 662,
    height: 90,
    width: 311,
  },
  recommend: {
    backgroundColor: Color.colorGoldenrod_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Recommend1;
