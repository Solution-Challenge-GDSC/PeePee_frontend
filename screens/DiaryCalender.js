import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const DiaryCalender = () => {
  const navigation = useNavigation();
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState(('0' + (new Date().getMonth() + 1)).slice(-2));
  const [day, setDay] = useState(('0' + new Date().getDate()).slice(-2));
  const [diaryData, setDiaryData] = useState(null);
  const [otherDiaries, setOtherDiaries] = useState([]);

  const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MTE1NDI5MTgsImV4cCI6MTcxNDIyMTMxOH0.oUED6drqUs90fqtOTi1ULOlCDDW5JTKywUO4aYRb6yQ';

  useEffect(() => {
    loadDiaryData();
  }, []);

  const loadDiaryData = async () => {
    try {
      const formattedDate = `${year}-${month}-${day}`;
      const response = await axios.get('https://applemango.store/diary', {
        params: { date: formattedDate },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.data.isSuccess) {
        setDiaryData(response.data.result.myDiary);
        setOtherDiaries(response.data.result.otherDiaries);
      } else {
        Alert.alert("Error", response.data.message || "Failed to load data");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to process data");
    }
  };

  const handleDeletePress = (diaryId) => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this diary?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => deleteDiary(diaryId) }
      ]
    );
  };

  const deleteDiary = async (diaryId) => {
    try {
      const response = await axios.delete(`https://applemango.store/diary/${diaryId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.data.isSuccess) {
        Alert.alert("Success", "Diary deleted successfully");
        loadDiaryData(); // Refresh data
      } else {
        Alert.alert("Error", response.data.message || "Failed to delete diary");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to delete diary");
    }
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
          {/* diaryData가 있을 경우 파라미터로 보낸 date 값을 표시, 없으면 빈 문자열을 표시 */}
          <Text style={styles.monday11March}>
            {diaryData ? diaryData.date : ''}
          </Text>
          {/* diaryData가 있을 경우 content의 처음 10글자를 표시, 없으면 빈 문자열을 표시 */}
          <Text style={[styles.iHaveA, styles.iHaveATypo]}>
            {diaryData ? `${diaryData.content.substring(0, 10)}...` : ''}
          </Text>
          {/* diaryData가 있을 경우 content 전체를 표시, 없으면 빈 문자열을 표시 */}
          <Text style={styles.iHaveA1}>
            {diaryData ? diaryData.content : ''}
          </Text>


          {
        diaryData && diaryData.getDiaryPost && diaryData.getDiaryPost.length > 0 && (
          <Image
            style={styles.image49Icon}
            contentFit="cover"
            source={{ uri: diaryData.getDiaryPost[0].imgUrl }}
          />
        )
      }

      {
        diaryData && diaryData.getDiaryPost && diaryData.getDiaryPost.length > 0 && (
          <ImageBackground
            style={styles.image49Icon}
            resizeMode="cover"
            source={{ uri: diaryData.getDiaryPost[0].imgUrl }}
          />
        )
      }



<Pressable style={[styles.rectangleGroup, styles.groupLayout]} onPress={() => handleDeletePress(diaryData.diaryId)}>
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
              onChangeText={setYear}
              value={year}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild2, styles.frameChildBorder]} />
          <TextInput
              style={[styles.month, styles.havePosition]}
              placeholder="Month"
              onChangeText={setMonth}
              value={month}
          />
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupChild2, styles.frameChildBorder]} />
          <TextInput
              style={[styles.date, styles.yearTypo]}
              placeholder="Date"
              onChangeText={setDay}
              value={day}
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
          contentContainerStyle={[styles.frameScrollViewContent, { flexGrow: 1 }]}
        >
          
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <View style={[styles.frameItem, styles.frameChildBorder]} />
          
  {/* Diary5 */}
  {otherDiaries.length > 4 && (
    <Text style={[styles.iHaveA4, styles.haveTypo]}>
      {otherDiaries[4].content}
    </Text>
  )}

          <View style={[styles.frameInner, styles.frameChildBorder]} />
          <View style={[styles.frameChild1, styles.frameChildBorder]} />

  {/* Diary4 */}
  {otherDiaries.length > 3 && (
    <Text style={[styles.iHaveA3, styles.haveTypo]}>
      {otherDiaries[3].content}
    </Text>
  )}

  {/* image 3 */}
{otherDiaries.length > 2 && otherDiaries[2].getDiaryPost.length > 0 && (
    <Image
      style={[styles.image70Icon, styles.iconLayout1]}
      contentFit="cover"
      source={{ uri: otherDiaries[2].getDiaryPost[0].imgUrl }}
    />
  )}


          <View style={[styles.frameChild2, styles.frameChildBorder]} />


  {otherDiaries.length > 4 && otherDiaries[4].getDiaryPost.length > 0 && (
    <Image
      style={[styles.image68Icon, styles.iconLayout1]}
      contentFit="cover"
      source={{ uri: otherDiaries[4].getDiaryPost[0].imgUrl }}
    />
  )}

{otherDiaries.length > 0 && (
    <Text style={[styles.iHaveA5, styles.haveTypo]}>
      {otherDiaries[0].content}
    </Text>
  )}

 {otherDiaries.length > 0 && otherDiaries[0].getDiaryPost.length > 0 && (
    <Image
      style={[styles.image53Icon, styles.iconLayout1]}
      contentFit="cover"
      source={{ uri: otherDiaries[0].getDiaryPost[0].imgUrl }}
    />
  )}


  {/* Diary2 */}
  {otherDiaries.length > 1 && (
    <Text style={[styles.iHaveA6, styles.haveTypo]}>
      {otherDiaries[1].content}
    </Text>
  )}
  {otherDiaries.length > 3 && otherDiaries[3].getDiaryPost.length > 0 && (
    <Image
      style={[styles.image66Icon, styles.iconLayout1]}
      contentFit="cover"
      source={{ uri: otherDiaries[3].getDiaryPost[0].imgUrl }}
    />
  )}
          
  {otherDiaries.length > 1 && otherDiaries[1].getDiaryPost.length > 0 && (
    <Image
      style={[styles.image66Icon, styles.iconLayout1]}
      contentFit="cover"
      source={{ uri: otherDiaries[1].getDiaryPost[0].imgUrl }}
    />
  )}
 
  {/* Diary3 */}
  {otherDiaries.length > 2 && (
    <Text style={[styles.iHaveA7, styles.haveTypo]}>
      {otherDiaries[2].content}
    </Text>
  )}
        </ScrollView>
        

        
      </View>
      <Pressable style={[styles.groupPressable, styles.groupLayout]}
      onPress={handleWritePress1}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Write</Text>
      </Pressable>

      {/* 데이터 로드 버튼 */}
      <Pressable style={[styles.rectangleParent3, styles.groupChild5Layout]} onPress={loadDiaryData}>
        <Image
          style={styles.image74Icon}
          source={require("../assets/image-74.png")}
        />
      </Pressable>

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
  groupChild5Layout: {
    width: 35,
    height: 30,
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
    top: 100,
    width: 258,
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
  width: "100%", // 너비를 100%로 설정하여 화면 전체 너비를 차지하도록 함
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
  groupChild5: {
    backgroundColor: "#d9d9d9",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  image74Icon: {
    top: 4,
    left: 5,
    width: 24,
    height: 23,
    position: "absolute",
  },
  rectangleParent3: {
    top: 101,
    left: 290,
  },
  diaryCalender: {
    width: "100%",
    height: 800,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default DiaryCalender;