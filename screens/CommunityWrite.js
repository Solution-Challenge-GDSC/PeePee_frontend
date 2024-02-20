import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const CommynityWrite = () => {
  const navigation = useNavigation();

  const handleWritePress1 = () => {
    navigation.navigate("Community");
  };
  return (
    <View style={styles.commynityWrite}>
      <Image
        style={[styles.commynityWriteChild, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
                 <Pressable
            style={[styles.sortLeft, styles.sortLeftLayout]}
            onPress={() => navigation.navigate("Main")}
          >
      <Image
        style={[styles.sortLeftIcon, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/sort-left.png")}
      />
      </Pressable>


      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Image
        style={styles.padlockIcon}
        contentFit="cover"
        source={require("../assets/padlock.png")}
      />
      <View style={[styles.commynityWriteItem, styles.lineViewBorder]} />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Image
          style={styles.cameraIcon}
          contentFit="cover"
          source={require("../assets/camera.png")}
        />
        <Text style={[styles.inputPhoto, styles.uploadTypo]}>Input Photo</Text>
      </Pressable>

      <Pressable style={[styles.commynityWriteInner, styles.groupLayout]}
       onPress={handleWritePress1}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.upload, styles.uploadTypo]}>Upload</Text>
          <Image
            style={styles.rightIcon}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
      </Pressable>

      
      <TextInput
        style={[styles.title, styles.titlePosition]}
        placeholder="Title"
        multiline={true}
        placeholderTextColor="#9e9e9e"
      />
      <TextInput
        style={[styles.writeText, styles.titlePosition]}
        placeholder="Write Text ..."
        multiline={true}
        placeholderTextColor="#9e9e9e"
      />
      <View style={[styles.lineView, styles.lineViewBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  sortLeftIconLayout: {
    height: 30,
    top: 38,
    width: 30,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  lineViewBorder: {
    borderStyle: "solid",
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
  uploadTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 300,
    position: "absolute",
  },
  titlePosition: {
    left: 40,
    position: "absolute",
  },
  commynityWriteChild: {
    left: 18,
  },
  sortLeftIcon: {
    left: 17,
  },
  home: {
    top: 44,
    left: 58,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  padlockIcon: {
    top: 600,
    left: 314,
    width: 10,
    height: 10,
    position: "absolute",
  },
  commynityWriteItem: {
    top: 98,
    left: 20,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGoldenrod_200,
    borderWidth: 3,
    width: 320,
    height: 530,
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    backgroundColor: Color.colorGoldenrod_200,
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
    width: 85,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  rectangleParent: {
    top: 646,
    left: 105,
  },
  groupItem: {
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  upload: {
    top: 12,
    left: 98,
    textAlign: "center",
    width: 79,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
  },
  rightIcon: {
    top: 8,
    left: 172,
    height: 25,
    width: 30,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
    width: 300,
  },
  commynityWriteInner: {
    top: 706,
    left: 30,
  },
  title: {
    top: 118,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  writeText: {
    top: 184,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_smi,
  },
  lineView: {
    top: 163,
    left: 34,
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 2,
    width: 292,
    height: 2,
  },
  commynityWrite: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default CommynityWrite;
