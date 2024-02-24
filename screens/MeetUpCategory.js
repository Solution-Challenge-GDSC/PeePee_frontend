import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";


const MeetUpCategory = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [meetups, setMeetups] = useState([]);
  const { latitude, longitude } = route.params;
  // const accessToken = AsyncStorage.getItem('accessToken');
  const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDgzMTczOTcsImV4cCI6MTcwODkyMjE5N30.Rl-gOj2E5T-Gjp6YP_qnVxZ8cct0Kys9jrxf4YiidSk'; 
  const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
  const GOOGLE_API_KEY ="AIzaSyAAwjAjwIqxQgPEd-k6msmxcwqQC5uXnEM"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://applemango.store/meetup/meetups`, {
          params: { latitude, longitude },
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        const meetupsWithAddresses = await Promise.all(response.data.result.map(async (item) => {
          const address = await fetchAddress(item.latitude, item.longitude);
          return { ...item, address };
        }));
        console.log(meetupsWithAddresses)
        setMeetups(meetupsWithAddresses);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };
  
    fetchData();
  }, []);

  const fetchAddress = async (latitude, longitude) => {
    try {
      // 주의: 실제 앱에서는 환경 변수를 사용하여 API 키를 안전하게 관리하세요.
       const response = await axios.get(`${GOOGLE_API_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`);
       return response.data.results[0]?.formatted_address || "주소 정보 없음";
    } catch (error) {
      console.error("주소 가져오기 실패:", error);
      return "주소 정보 없음";
    }
  };


  

  if (meetups.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.meetUpCategory}>
   
    <ScrollView
      style={styles.frameParent}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.frameScrollViewContent}
    >
      {meetups.map((meetup) => (
        
      
        <Pressable
          key={meetup.id}
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("MeetUpDetail", { meetupId: meetup.meetupId,  address: meetup.address, latitude:meetup.latitude, longitude:meetup.longitude , nowlatitude:latitude, nowlongitude:longitude })}
        >
      
        <Text style={[styles.near, styles.nearTypo]}>Near</Text>

        <ImageBackground
        source={require("../assets/rectangle-44.png")}
        style={[styles.image78Icon, styles.image78Layout]}
        blurRadius={4} // 흐림 효과의 강도
        resizeMode="cover" // 이미지 크기 조정 방식
        ><View></View>
        </ImageBackground>
          <Text style={[styles.titleTitleTitle, styles.titleClr]}>
            {'  '+ meetup.title}
          </Text>
          <Text
            style={[
              styles.jibongRo51beonGilBucheon,
              styles.locationIconPosition,
            ]}
          >
            {'\n' + meetup.address}
          </Text>
          <Image
            style={[styles.locationIcon, styles.locationIconPosition]}
            contentFit="cover"
            source={require("../assets/location.png")} 
          />
        </Pressable>
      ))}
    </ScrollView>


      <View style={styles.groupParent}>
        <Pressable style={styles.ellipseParent}>
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
        <TextInput
          style={[styles.select, styles.titleTypo]}
          placeholder="Select"
          placeholderTextColor="#000"
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <TextInput
          style={styles.searchPlayground}
          placeholder="Search Playground"
          multiline={true}
          placeholderTextColor="#818181"
        />
      </View>
      <Pressable style={[styles.groupPressable, styles.groupLayout]}>
      <Pressable
          style={[styles.groupInner, styles.groupLayout]}
          onPress={() => navigation.navigate("MeetUpCreate", {latitude:latitude, longitude:longitude})}
        />
        <Image
          style={[styles.quillPenIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/quill-pen.png")}
        />
        <Text style={[styles.createNew, styles.nearTypo]}>Create New</Text>
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
  nearTypo: {
    textAlign: "left",
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  titleClr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  locationIconPosition: {
    top: 99,
    position: "absolute",
  },
  image78Layout: {
    height: 130,
    width: 300,
    zIndex: 0,
  },
  groupChildLayout: {
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout1: {
    height: 45,
    width: 300,
    position: "absolute",
  },
  groupBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  iconLayout: {
    height: 25,
    position: "absolute",
  },
  groupLayout: {
    width: 100,
    height: 30,
    position: "absolute",
  },
  frameChild: {
    left: 230,
    borderRadius: 100,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 50,
    zIndex: 0,
    height: 20,
    top: 10,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  near: {
    left: 245,
    color: "#747474",
    zIndex: 1,
    top: 14,
  },
  rectangleParent: {
    top: 151,
    left: 19,
    height: 617,
    flexDirection: "row",
    position: "absolute",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_mini,
    width: "100%",
  },
  titleTitleTitle: {
    top: 77,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: 13,
    zIndex: 1,
  },
  jibongRo51beonGilBucheon: {
    left: 36,
    fontSize: FontSize.size_5xs,
    zIndex: 2,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 99,
  },
  locationIcon: {
    width: 20,
    zIndex: 3,
    left: 13,
    top: 99,
    height: 20,
  },
  rectangleGroup: {
    marginTop: 23,
  },
  image78Icon: {
    borderRadius: Border.br_mini,
  },
  frameParent: {
    top: 163,
    left: 30,
    position: "absolute",
    flex: 1,
  },
  groupChild: {
    left: 3,
  },
  sortLeftIcon: {
    left: 0,
  },
  ellipseParent: {
    width: 33,
    left: 0,
    top: 0,
    height: 30,
    position: "absolute",
  },
  select: {
    top: 6,
    left: 43,
    fontSize: FontSize.size_mini,
  },
  groupParent: {
    top: 38,
    left: 15,
    width: 89,
    height: 30,
    position: "absolute",
  },
  groupItem: {
    borderColor: "#b4b4b4",
    borderWidth: 1,
    height: 45,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  searchIcon: {
    left: 20,
    width: 25,
    top: 10,
    height: 25,
  },
  searchPlayground: {
    left: 55,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_smi,
    top: 14,
    position: "absolute",
  },
  groupView: {
    top: 98,
    left: 30,
  },
  groupInner: {
    backgroundColor: "#f8f8f8",
    borderColor: "#dfe0df",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  quillPenIcon: {
    top: 3,
    left: 10,
    width: 21,
  },
  createNew: {
    top: 9,
    left: 39,
    color: Color.colorBlack,
  },
  groupPressable: {
    top: 740,
    left: 130,
  },
  meetUpCategory: {
    height: 1909,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default MeetUpCategory;