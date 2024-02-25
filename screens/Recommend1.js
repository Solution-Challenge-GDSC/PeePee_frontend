import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Recommend1 = () => {
  const navigation = useNavigation();
  const [childAge, setChildAge] = useState('');

  const goToRecommend13Move = () => {
    // childAge 값을 다음 화면으로 전달하면서 네비게이션을 수행합니다.
    navigation.navigate("Recommend13Movement", { childAge });
  };

  
  return (
    <View style={styles.recommend}>
      <Image
        style={styles.image74Icon}
        contentFit="cover"
        source={require("../assets/image-744.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <Pressable style={styles.ellipseParent}
         onPress={() => navigation.navigate("Main")}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.sortLeftIcon, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/sort-left.png")}
          />
        </Pressable>
        <Text style={styles.home}>Home</Text>
        <View style={[styles.groupItem, styles.groupLayout1]} />
      </View>
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
      <View style={[styles.rectangleParent, styles.whatKindOfPosition]}>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <TextInput
          style={[styles.enterYourChilds, styles.goToRecommendTypo, { paddingLeft: 52}]}
          placeholder="Enter your child’s age"
          placeholderTextColor="#000"
          value={childAge}
          onChangeText={text => setChildAge(text)}
        />

        <Pressable 
          style={[styles.rectangleGroup, styles.groupLayout]} 
          onPress={goToRecommend13Move} // 수정
        >
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Text style={[styles.goToRecommend, styles.goToRecommendTypo]}>
            Go to Recommend
          </Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 38,
    position: "absolute",
  },
  groupChildLayout: {
    width: 30,
    height: 30,
    top: 0,
    position: "absolute",
  },
  whatKindOfPosition: {
    left: 25,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    position: "absolute",
  },
  goToRecommendTypo: {
    top: 12,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  image74Icon: {
    width: 460,
    height: 867,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 1,
  },
  sortLeftIcon: {
    left: 0,
  },
  ellipseParent: {
    top: 4,
    width: 31,
    height: 30,
    left: 0,
    position: "absolute",
  },
  home: {
    top: 10,
    left: 41,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  groupItem: {
    left: 85,
    backgroundColor: "rgba(217, 217, 217, 0)",
    width: 230,
    top: 0,
  },
  groupParent: {
    top: 44,
    left: 23,
    width: 315,
  },
  whatKindOf: {
    top: 119,
    fontSize: 23,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGoldenrod,
    textAlign: "center",
  },
  itRecommendsThe: {
    top: 215,
    width: 311,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    left: 25,
    color: Color.colorWhite,
    position: "absolute",
  },
  groupInner: {
    width: 300,
    borderRadius: Border.br_81xl,
    left: 3,
    height: 40,
    top: 0,
    backgroundColor: Color.colorGoldenrod,
  },
  enterYourChilds: {
    left: 40,
  },
  rectangleView: {
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_81xl,
    left: 3,
    height: 40,
    top: 0,
  },
  goToRecommend: {
    color: "#000",
    width: 311,
    textAlign: "center",
    left: 0,
  },
  rectangleGroup: {
    top: 50,
    width: 311,
    left: 0,
  },
  rectangleParent: {
    top: 662,
    height: 90,
    width: 311,
  },
  recommend: {
    flex: 1,
    width: "100%",
    height: 860,
    overflow: "hidden",
    backgroundColor: Color.colorGoldenrod,
  },
});

export default Recommend1;
