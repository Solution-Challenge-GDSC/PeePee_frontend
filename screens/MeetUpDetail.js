import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios"; // axios import
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { add } from "react-native-reanimated";

const MeetUpDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { meetupId, address } = route.params; // 이렇게 수정
  console.log(meetupId, address);

  const [meetupDetail, setMeetupDetail] = useState(null); // 상세 정보를 저장할 상태
  const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDgzMTczOTcsImV4cCI6MTcwODkyMjE5N30.Rl-gOj2E5T-Gjp6YP_qnVxZ8cct0Kys9jrxf4YiidSk'; 
  
  useEffect(() => {
    const fetchMeetupDetail = async () => {
      try {
        const response = await axios.get(`https://applemango.store/meetup/one/${meetupId}`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        setMeetupDetail(response.data);
        console.log(meetupDetail);
      } catch (error) {
        console.error("Meetup 상세 정보를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchMeetupDetail();
  }, [meetupId]); // postId가 변경될 때마다 요청을 다시 보냅니다.

  if (!meetupDetail) {
    return <Text>Loading...</Text>; // 데이터 로딩 중 표시
  }

  return (
    <View style={styles.meetUpDetail}>
      <Image
        style={[styles.meetUpDetailChild, styles.meetPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-363.png")}
      />
      <View style={[styles.meetUpDetailItem, styles.meetPosition]} />
      <Image
        style={[styles.meetUpDetailInner, styles.sortLeftLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.sortLeft, styles.sortLeftLayout]}
        onPress={() => navigation.navigate("MeetUpCategory")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={[styles.howManyPeople, styles.whatDoWeFlexBox]}>
        How many people in here?
      </Text>
      <Text style={[styles.whatDoWe, styles.whatDoWeFlexBox]}>
        What do we do?
      </Text>
      <Text style={[styles.mom30Baby, styles.wePlayInTypo]}>{`15 Mom 
30 Baby`}</Text>
      <Text
        style={[styles.wePlayIn, styles.wePlayInTypo]}
      >{`We play in the park among our children, 
and parents have time to talk

Baby can do a lot of Activity`}</Text>
      <Image
        style={[styles.babysRoomIcon, styles.sortLeftLayout]}
        contentFit="cover"
        source={require("../assets/babys-room.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.yeokgokPark, styles.whatDoWeFlexBox]}>
          {meetupDetail.category}
        </Text>
        <Text style={[styles.jibongRo51beonGilBucheon, styles.whatDoWeFlexBox]}>
          {address}
        </Text>
        <Image
          style={[styles.locationIcon, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
      </View>
      <Pressable style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.joinIn, styles.joinInTypo]}>Join In</Text>
        <Image
          style={[styles.queryInnerJoinRight, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/query-inner-join-right.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  meetPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  sortLeftLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  whatDoWeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  wePlayInTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 70,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
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
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  meetUpDetailChild: {
    height: 562,
    top: 0,
    left: 0,
  },
  meetUpDetailItem: {
    top: 444,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    height: 437,
  },
  meetUpDetailInner: {
    left: 18,
    top: 50,
    width: 30,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 17,
    top: 50,
    width: 30,
  },
  howManyPeople: {
    top: 482,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 30,
  },
  whatDoWe: {
    top: 582,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 30,
  },
  mom30Baby: {
    left: 70,
    color: "#575757",
    top: 518,
  },
  wePlayIn: {
    top: 618,
    color: "#5e5e5e",
    width: 300,
    left: 30,
  },
  babysRoomIcon: {
    top: 518,
    left: 30,
  },
  groupChild: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 200,
    height: 70,
    position: "absolute",
  },
  yeokgokPark: {
    top: 13,
    fontSize: 19,
    left: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  jibongRo51beonGilBucheon: {
    top: 43,
    left: 43,
    fontSize: FontSize.size_5xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: "#505050",
    width: 181,
  },
  locationIcon: {
    top: 38,
    left: 20,
  },
  rectangleParent: {
    width: 224,
    top: 108,
    left: 30,
  },
  groupItem: {
    backgroundColor: "rgba(255, 199, 0, 0.6)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  joinIn: {
    top: 32,
    left: 25,
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  queryInnerJoinRight: {
    top: 11,
    left: 32,
  },
  rectangleGroup: {
    left: 249,
    top: 108,
  },
  meetUpDetail: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default MeetUpDetail;
