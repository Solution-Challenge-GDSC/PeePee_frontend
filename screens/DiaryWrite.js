import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';

const DiaryWrite = () => {
  const navigation = useNavigation();
  const [content, setContent] = React.useState("");
  const [opened, setOpened] = React.useState(false);
  const [resizedUri, setResizedUri] = React.useState(null);
  const [isUploading, setIsUploading] = useState(false); 
  const CameraPress = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const handlePress = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 0.5,
      });
  
      console.log(result);

      if (!result.cancelled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        // 이미지를 조절할 해상도 크기 설정
        const resolution = { width: 500, height: 500 }; // 원하는 해상도로 설정

       // ImageManipulator를 사용하여 이미지 해상도 조절
        const manipResult = await ImageManipulator.manipulateAsync(
         imageUri,
         [{ resize: resolution }],
         { compress: 1, format: ImageManipulator.SaveFormat.JPEG } // 필요에 따라 압축도 설정 가능
        );

       // 조절된 이미지를 사용하거나 저장 등의 작업 수행
       setResizedUri(manipResult.uri);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };
  
  const handleSubmit = async () => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVrcWxzNjIwNDVAZ21haWwuY29tIiwiaWF0IjoxNzEwMjYzNTU2LCJleHAiOjE3MTI5NDE5NTZ9.wZ6i-CdjE-K4qhRNk0Jc9JziwOeR-eFgoNdJj7KVnnY'; 
    const formData = new FormData();
  
    const postDiaryReq = {
      content: content,
      mood: 0,
      opened: opened,
      date: new Date().toISOString().split("T")[0],
    };

    if(resizedUri){
      formData.append('image', {
        uri: resizedUri,
        type: 'image/jpeg', // 실제 이미지 타입에 따라 변경할 수 있습니다.
        name: 'image.jpg', // 실제 파일 이름이나 임의의 이름을 사용할 수 있습니다.
      });
    }
  
    formData.append('postDiaryReq', JSON.stringify(postDiaryReq));
 
    try {
      const response = await axios({
        method: "post",
        url: "https://applemango.store/diary",
        data: formData,
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
    
  
      console.log('API 응답:', response.data);
      setIsUploading(false); // 업로드 종료
      navigation.navigate("DiaryCalender"); // 업로드 성공 후 DiaryCalender 페이지로 이동
    } catch (error) {
      console.error('요청 중 오류 발생:', error);
      setIsUploading(false); // 업로드 종료
    }
  }; 

  

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
      
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={handlePress} // 이미지 선택 버튼에 handlePress 이벤트 추가
      >
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


      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={handleSubmit} // 업로드 버튼 클릭 시 handleSubmit 호출
        disabled={isUploading} // isUploading 상태에 따라 버튼 비활성화
      >
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
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}
      onPress={CameraPress} >
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
        value={content} // state에 연결된 값 사용
        onChangeText={setContent} // 입력 내용이 변경될 때마다 state 업데이트
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