import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios"; // axios import
import MapView, { Marker } from 'react-native-maps';
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";


const MeetUpDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { meetupId, address, latitude, longitude, nowlatitude, nowlongitude } = route.params; // 이렇게 수정
  console.log(meetupId, address, latitude, longitude);

  const [meetupDetail, setMeetupDetail] = useState(null); // 상세 정보를 저장할 상태
  const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDg5MDA2MzksImV4cCI6MTcwOTUwNTQzOX0.wY8J5ib9neNi-cn4sFODWe-bwHlMtaWmjwkw9KtRf5E'; 
  
  useEffect(() => {
    const fetchMeetupDetail = async () => {
      try {
        const response = await axios.get(`https://applemango.store/meetup/one/${meetupId}`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        console.log(response.data)
        setMeetupDetail(response.data.result);
        console.log(meetupDetail);
      } catch (error) {
        console.error("Meetup 상세 정보를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchMeetupDetail();
  }, []); // postId가 변경될 때마다 요청을 다시 보냅니다.

  if (!meetupDetail) {
    return <Text>Loading...</Text>; // 데이터 로딩 중 표시
  }

  return (
    <View style={styles.meetUpDetail}>
       <MapView
        style={[styles.image53Icon]}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: latitude, longitude: longitude}} />
      </MapView>
      <View style={styles.meetUpDetailChild} />
      <Pressable style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
         <Pressable
        style={[styles.sortLeft, styles.sortLeftLayout]}
        onPress={() => navigation.navigate("MeetUpCategory", { latitude:nowlatitude, longitude:nowlongitude})}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      </Pressable>
      <Text style={[styles.category, styles.categoryTypo]}>Category</Text>
      <Text style={[styles.whatDoWe, styles.categoryTypo]}>What do we do?</Text>
      <Text
        style={[styles.wePlayIn, styles.textTypo]}
      >
          {`${meetupDetail.content}`}</Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.yeokgokPark, styles.yeokgokParkClr]}>
        {`${meetupDetail.category}`}
        </Text>
        <Text style={[styles.jibongRo51beonGilBucheon, styles.yeokgokParkClr]}>
        {address}
        </Text>
        <Image
          style={[styles.locationIcon, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
      </View>
      <Pressable style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.joinIn, styles.joinInTypo]}>Join In</Text>
        <Image
          style={[styles.queryInnerJoinRight, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/query-inner-join-right.png")}
        />
      </Pressable>
      <Text style={styles.name}>{`${meetupDetail.nickName}`}</Text>
      <Text style={[styles.text, styles.textTypo]}>{`${meetupDetail.activityDay}`}</Text>
      <ImageBackground
        style={styles.meetUpDetailItem}
        resizeMode="cover"
       // source={{ uri: meetupDetail.profileImage }}
       source={require("../assets/ellipse38.png")}

      />
      <View style={[styles.rectangleContainer, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <Text style={[styles.mom15, styles.mom15Typo]}>{`Mom ${meetupDetail.parents}`}</Text>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <Text style={[styles.baby5, styles.mom15Typo]}>{`Baby ${meetupDetail.baby}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  categoryTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupItemLayout: {
    height: 70,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  yeokgokParkClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  locationIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  groupLayout: {
    height: 55,
    width: 80,
    position: "absolute",
  },
  joinInTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  viewLayout: {
    height: 25,
    width: 81,
    position: "absolute",
  },
  mom15Typo: {
    color: Color.colorDimgray_100,
    top: 4,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  image53Icon: {
    top: -32,
    left: -10,
    width: 410,
    height: 659,
    position: "absolute",
  },
  meetUpDetailChild: {
    top: 500,
    borderRadius: 20,
    width: 388,
    height: 559,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 1,
  },
  sortLeftIcon: {
    left: 0,
    width: 30,
  },
  ellipseParent: {
    left: 17,
    width: 31,
    height: 30,
    top: 38,
    position: "absolute",
  },
  category: {
    top: 44,
    left: 58,
    fontSize: 15,
  },
  whatDoWe: {
    top: 652,
    fontSize: 18,
    left: 30,
  },
  wePlayIn: {
    top: 688,
    color: "#5e5e5e",
    width: 300,
    left: 30,
  },
  groupItem: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: 200,
    height: 70,
    position: "absolute",
  },
  yeokgokPark: {
    top: 13,
    fontSize: 19,
    left: 20,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  jibongRo51beonGilBucheon: {
    top: 43,
    left: 43,
    fontSize: 8,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 181,
  },
  locationIcon: {
    left: 20,
    top: 38,
    height: 20,
    width: 20,
  },
  rectangleParent: {
    width: 224,
    top: 98,
    left: 30,
  },
  groupInner: {
    backgroundColor: "rgba(255, 199, 0, 0.6)",
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  joinIn: {
    top: 32,
    left: 25,
    fontSize: 9,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  queryInnerJoinRight: {
    top: 11,
    left: 30,
  },
  rectangleGroup: {
    left: 258,
    top: 98,
  },
  name: {
    top: 559,
    left: 224,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "right",
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    top: 540,
    left: 32,
    color: Color.colorBlack,
  },
  meetUpDetailItem: {
    top: 546,
    left: 290,
    width: 50,
    height: 50,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    width: 81,
    top: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  mom15: {
    left: 16,
  },
  rectangleContainer: {
    top: 563,
    left: 33,
    width: 81,
  },
  baby5: {
    left: 19,
  },
  groupView: {
    top: 593,
    left: 33,
    width: 81,
  },
  meetUpDetail: {
    backgroundColor: "#f8f4f1",
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default MeetUpDetail;