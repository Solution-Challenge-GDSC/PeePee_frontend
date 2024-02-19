import * as React from "react";
import { ImageBackground, View, Text, Pressable, TextInput, ScrollView, StyleSheet, Image, Alert } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'; // axios 라이브러리를 import

const DiaryCalender = () => {
  const navigation = useNavigation();
  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [day, setDay] = React.useState('');
  const [diaryData, setDiaryData] = React.useState(null);

// 서버로부터 다이어리 데이터를 불러오는 함수
const loadDiaryData = async () => {
  try {
    // 사용자가 선택한 year, month, day를 YYYY-MM-DD 형태로 변환
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDgzMTczOTcsImV4cCI6MTcwODkyMjE5N30.Rl-gOj2E5T-Gjp6YP_qnVxZ8cct0Kys9jrxf4YiidSk'; 

    const formattedMonth = month.padStart(2, '0'); // 한 자리 숫자일 경우 앞에 0 추가
    const formattedDay = day.padStart(2, '0'); // 한 자리 숫자일 경우 앞에 0 추가
    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
    const response = await axios.get('https://applemango.store/diary', {
      params: {
        date: formattedDate
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('API 응답:', response.data);
    console.log('getDiaryPost:', response.data.result.getDiaryPost);

    // 응답의 데이터를 변수에 할당
    const jsonData = response.data;

    // jsonData.isSuccess 값을 이용하여 데이터가 유효한지 확인하고 처리
    if (jsonData.isSuccess) {
      setDiaryData(jsonData.result.myDiary);
    } else {
      Alert.alert("Error", jsonData.message || "Failed to load data");
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to process data");
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



        <Pressable style={[styles.rectangleGroup, styles.groupLayout]}>
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