import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const MeetUpCreate = () => {
  // const formattedDate = `${year}-${month}-${day}`;
  const navigation = useNavigation();
  const route = useRoute();
  const { latitude, longitude } = route.params;
  const nowlatitude = latitude;
  const nowlongitude = longitude;
  // 상태 추가
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState(null);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [mom, setMom] = useState('');
  const [baby, setBaby] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createMeeting = () => {
    navigation.navigate('MeetUpCategory');
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory); // 선택된 카테고리를 상태에 저장
  };

  useEffect(() => {
    console.log('현재 선택된 카테고리:', category);
    const { location } = route.params || {};
    const { latitude, longitude } = location || {};
     
    if (location) {
      setLocation(location); // 위치 상태 업데이트
      console.log(location);
      console.log(latitude, longitude);
    }
  }, [category, route.params]); // 올바른 의존성 배열

 
  const handleSubmit = async () => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDgzMTczOTcsImV4cCI6MTcwODkyMjE5N30.Rl-gOj2E5T-Gjp6YP_qnVxZ8cct0Kys9jrxf4YiidSk'; 
    const formData = new FormData();

    // `location` 상태에서 `latitude`와 `longitude` 추출
    const { latitude, longitude } = location || {};
    const activityDay = `${year}-${month}-${day}`; // 활동 날짜 포맷

    formData.append('postMeetupReq', JSON.stringify({
      title: title,
      content: content,
      activityDay: activityDay,
      parents: mom,
      baby: baby,
      latitude: latitude, // 수정: 상태에서 위도 가져오기
      longitude: longitude, // 수정: 상태에서 경도 가져오기
      category: category // 수정: 상태에서 카테고리 가져오기
    }));

    try {
      const response = await axios({
        method: "post",
        url: "https://applemango.store/meetup",
        data: formData,
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      

      console.log('API 응답:', response.data);
      if (response.status === 200) {
         navigation.navigate("MeetUpCategory", {latitude:nowlatitude, longitude:nowlongitude});
      } else {
        console.log("Error", "Failed to create meetup");
      }
    } catch (error) {
      console.error(error);
      console.log("Error", "An error occurred while creating the meetup");
    }
  };

  return (
    <View style={styles.meetUpCreate}>
      <Pressable style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.sortLeftIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={styles.home}>Home</Text>
      <Text style={styles.createNewMeet}>Create New Meet UP!</Text>
      <Text style={styles.text}>
        어떤 활동을 하고싶은지, 어떤 활동을 할건지, 예상 인원 등을 상세히
        적어주세요
      </Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <TextInput
          style={[styles.title, styles.cafePosition]}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          multiline={true}
          placeholderTextColor="#9e9e9e"
        />
        <TextInput
          style={styles.writeText}
          placeholder="Write Text ..."
          value={content}
          onChangeText={setContent}
          multiline={true}
          placeholderTextColor="#9e9e9e"
        />
        <View style={[styles.groupInner, styles.groupBorder]} />
      </View>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}
      onPress={handleSubmit}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.create, styles.text1Clr]}>Create</Text>
        <Image
          style={[styles.rightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/right.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("SelectPoint")}>
      <View style={[styles.rectangleContainer, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Text style={[styles.text1, styles.text1Clr]}>장소를 선택해주세요</Text>
      </View>
      </Pressable>


    <Pressable onPress={() => handleCategorySelect('Cafe')}
  style={[styles.groupPressable, styles.rectangleParentLayout1]}>
    <View style={styles.groupChild2} />
    <Text style={[styles.cafe, styles.cafePosition]}>Cafe</Text>
</Pressable>
<Pressable onPress={() => handleCategorySelect('Restaurant')}
  style={[styles.rectangleParent1, styles.rectangleParentLayout1]}>
    <View style={styles.groupChild2} />
    <Text style={[styles.cafe, styles.cafePosition]}>Restaurant</Text>
</Pressable>
<Pressable onPress={() => handleCategorySelect('Activity')}
  style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
    <View style={styles.groupChild2} />
    <Text style={[styles.cafe, styles.cafePosition]}>Activity</Text>
</Pressable>
<Pressable onPress={() => handleCategorySelect('etc.')}
  style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
    <View style={styles.groupChild2} />
    <Text style={[styles.cafe, styles.cafePosition]}>etc.</Text>
</Pressable>
<Pressable onPress={() => handleCategorySelect('Park')}
  style={[styles.rectangleParent4, styles.rectangleParentLayout1]}>
    <View style={styles.groupChild2} />
    <Text style={[styles.cafe, styles.cafePosition]}>Park</Text>
</Pressable>


      
      <View style={[styles.meetUpCreateChild, styles.meetLayout]} />
      <View style={[styles.meetUpCreateItem, styles.meetLayout]} />
      <Text style={[styles.mom, styles.momLayout]}>{`Mom : `}</Text>
      <TextInput
        style={[styles.input, styles.momTypo]}
        placeholder="       "
        value={mom}
        onChangeText={setMom}
        multiline={true}
        placeholderTextColor="#838282"
      />
      <TextInput
        style={[styles.input1, styles.babyPosition]}
        placeholder="       "
        value={baby}
        onChangeText={setBaby}
        multiline={true}
        placeholderTextColor="#838282"
      />
      <Text style={[styles.baby, styles.bebe]}>{`Baby : `}</Text>
      <View style={styles.groupParent}>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild7, styles.groupChildBorder]} />
          <TextInput
            style={[styles.year, styles.yearPosition]}
            placeholder="Year"
            value={year}
            onChangeText={setYear}
            placeholderTextColor="#838282"
          />
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild8, styles.rectangleParentLayout]} />
          <TextInput
            style={[styles.month, styles.yearPosition]}
            placeholder="Month"
            value={month}
            onChangeText={setMonth}
            placeholderTextColor="#838282"
          />
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild8, styles.rectangleParentLayout]} />
          <TextInput
            style={[styles.month, styles.yearPosition]}
            placeholder="Day"
            value={day}
            onChangeText={setDay}
            placeholderTextColor="#838282"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 30,
    position: "absolute",
  },
  groupItemLayout: {
    height: 295,
    width: 320,
  },
  groupBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  cafePosition: {
    left: 20,
    position: "absolute",
  },
  rectangleLayout: {
    height: 40,
    width: 300,
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  groupChild1Layout: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  rectangleParentLayout1: {
    height: 24,
    width: 90,
    top: 171,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 201,
    height: 24,
    width: 90,
    position: "absolute",
  },
  meetLayout: {
    width: 137,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 30,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  momLayout: {
    width: 49,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  momTypo: {
    fontSize: FontSize.size_2xs,
    top: 303,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  babyPosition: {
    top: 303,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupLayout: {
    width: 120,
    height: 31,
    top: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  yearPosition: {
    top: 7,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 80,
    height: 31,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    top: 0,
    height: 30,
  },
  sortLeftIcon: {
    left: 0,
    top: 0,
    height: 30,
  },
  ellipseParent: {
    top: 38,
    left: 17,
    width: 31,
    height: 30,
    position: "absolute",
  },
  home: {
    top: 44,
    left: 58,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  createNewMeet: {
    top: 88,
    left: 66,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    top: 125,
    color: "#6a6a6a",
    width: 300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 30,
    textAlign: "center",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.colorFloralwhite,
    borderWidth: 3,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 295,
    width: 320,
  },
  title: {
    top: 20,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    left: 20,
  },
  writeText: {
    top: 77,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 20,
    position: "absolute",
  },
  groupInner: {
    top: 56,
    left: 14,
    borderColor: "#f4f4f4",
    borderTopWidth: 2,
    width: 292,
    height: 2,
  },
  rectangleParent: {
    top: 395,
    left: 20,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: 100,
    backgroundColor: "#472e17",
    left: 0,
    top: 0,
  },
  create: {
    top: 12,
    left: 98,
    width: 79,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  rightIcon: {
    top: 8,
    left: 172,
    height: 25,
  },
  rectangleGroup: {
    top: 706,
    left: 31,
  },
  groupChild1: {
    backgroundColor: "rgba(191, 184, 50, 0.8)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  text1: {
    top: 17,
    width: 250,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    left: 30,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  rectangleContainer: {
    top: 335,
    left: 31,
  },
  groupChild2: {
    backgroundColor: Color.colorGoldenrod_100,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro,
    height: 24,
    width: 90,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cafe: {
    top: 6,
    fontSize: FontSize.size_4xs,
    width: 50,
    fontFamily: FontFamily.interRegular,
    left: 20,
    textAlign: "center",
    color: Color.colorBlack,
  },
  groupPressable: {
    left: 40,
  },
  rectangleParent1: {
    left: 135,
  },
  rectangleParent2: {
    left: 85,
  },
  rectangleParent3: {
    left: 185,
  },
  rectangleParent4: {
    left: 230,
  },
  meetUpCreateChild: {
    top: 299,
    left: 31,
  },
  meetUpCreateItem: {
    top: 298,
    left: 192,
  },
  mom: {
    left: 54,
    fontSize: FontSize.size_2xs,
    top: 307,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  bebe: {
    left: 213,
    fontSize: FontSize.size_2xs,
    top: 307,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  input: {
    left: 97,
  },
  input1: {
    left: 256,
  },
  baby: {
    left: 214,
    width: 49,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  groupChild7: {
    width: 120,
    height: 31,
    top: 0,
    position: "absolute",
  },
  year: {
    left: 35,
  },
  groupView: {
    left: 0,
  },
  groupChild8: {
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  month: {
    left: 15,
  },
  rectangleParent5: {
    left: 130,
  },
  rectangleParent6: {
    left: 220,
  },
  groupParent: {
    top: 258,
    height: 31,
    left: 31,
    width: 300,
    position: "absolute",
  },
  meetUpCreate: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MeetUpCreate;