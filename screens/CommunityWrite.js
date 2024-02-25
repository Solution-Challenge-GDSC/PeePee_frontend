import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from "react-native";
import { Image } from "expo-image"; // Ensure this import is correct
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';

const CommynityWrite = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUri, setImageUri] = useState(""); // Assume single image for simplicity

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg', // Adjust based on actual image type
      name: 'photo.jpg',
    });

    formData.append('postBoardReq', JSON.stringify({
      title: title,
      content: content,
      boardType: "FREE_BOARD"
    }));

    try {
      const response = await axios({
        method: "post",
        url: "https://applemango.store/board",
        data: formData,
        headers: {
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDg5MDA2MzksImV4cCI6MTcwOTUwNTQzOX0.wY8J5ib9neNi-cn4sFODWe-bwHlMtaWmjwkw9KtRf5E`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        Alert.alert("Success", "Board created successfully");
        navigation.navigate("Community"); // Community 화면으로 이동
      } else {
        Alert.alert("Error", "Failed to create board");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while creating the board");
    }
  };

  return (
    <View style={styles.commynityWrite}>
      {/* Existing JSX */}
      <Pressable onPress={selectImage} style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Image style={styles.cameraIcon} contentFit="cover" source={require("../assets/camera.png")} />
        <Text style={[styles.inputPhoto, styles.uploadTypo]}>Input Photo</Text>
      </Pressable>

      <TextInput
        style={[styles.title, styles.titlePosition]}
        placeholder="Title"
        multiline={true}
        placeholderTextColor="#9e9e9e"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.writeText, styles.titlePosition]}
        placeholder="Write Text ..."
        multiline={true}
        placeholderTextColor="#9e9e9e"
        value={content}
        onChangeText={setContent}
      />
<Pressable 
  onPress={handleSubmit} 
  style={[styles.commynityWriteInner, styles.groupLayout]}
>
  <View style={[styles.rectangleGroup, styles.groupLayout]}>
    <View style={[styles.groupItem, styles.groupLayout]} />
    <Text style={[styles.upload, styles.uploadTypo]}>Upload</Text>
    <Image style={styles.rightIcon} contentFit="cover" source={require("../assets/right.png")} />
  </View>
</Pressable>

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