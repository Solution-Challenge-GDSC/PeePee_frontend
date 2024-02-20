import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Pressable, Text, View, TextInput, ScrollView } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

// 구글 Geocoding API의 기본 URL
const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const GOOGLE_API_KEY = "AIzaSyAAwjAjwIqxQgPEd-k6msmxcwqQC5uXnEM";


// 주소를 가져오는 함수
const fetchAddress = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${GOOGLE_API_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`);
    const address = response.data.results[0]?.formatted_address;
    console.log(address);
    return address;
  } catch (error) {
    console.error("Google Geocoding API error:", error);
    return "주소를 가져오는 데 실패했습니다.";
  }
};


const MeetUpCategory = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { latitude, longitude } = route.params;
  console.log(latitude+", "+longitude);
  const [data, setData] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDgzMTczOTcsImV4cCI6MTcwODkyMjE5N30.Rl-gOj2E5T-Gjp6YP_qnVxZ8cct0Kys9jrxf4YiidSk";

  // 데이터를 불러오는 useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://applemango.store/meetup/meetups`, {
          params: { latitude, longitude },
          headers: { Authorization: `Bearer ${accessToken}` }
        });

        setData(response.data.result); // API 응답에서 result 배열을 상태에 저장
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

 
 // 데이터에 기반해 주소를 불러오는 useEffect
 useEffect(() => {
  const fetchAddresses = async () => {
    const addresses = await Promise.all(
      data.map(async (item) => await fetchAddress(item.latitude, item.longitude))
    );
    setAddresses(addresses);
  };

  if (data.length > 0) {
    fetchAddresses();
  }
}, [data]); // data가 변경될 때마다 주소를 불러옵니다.


if (data.length === 0 || addresses.length !== data.length) {
  return <Text>Loading...</Text>;
}


  return (
    <View style={styles.meetUpCategory}>
      <Image
        style={[styles.meetUpCategoryChild, styles.sortLeftLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.sortLeft, styles.sortLeftLayout]}
        onPress={() => navigation.navigate("MeetUpIntrowbaby")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={[styles.activity, styles.restFlexBox]}>Activity</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Image
          style={[styles.searchIcon, styles.locationLayout]}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
        <TextInput
          style={styles.searchPlayground}
          placeholder="Search Playground"
          placeholderTextColor="#c0c0c0"
        />
      </View>
      <View style={styles.meetUpCategoryItem} />
      <Text style={[styles.rest, styles.restFlexBox]}>Rest</Text>
      <ScrollView
        style={styles.groupParent}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.yeokgokParkParent, styles.rectangleGroupLayout]}>
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
          <Pressable
            style={styles.wrapperPosition}
            onPress={() => navigation.navigate("MeetUpDetail")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-35.png")}
            />
          </Pressable>
          <Image
            style={[styles.locationIcon, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/location.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
          <Image
            style={[styles.groupItem, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-36.png")}
          />
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
          <Image
            style={[styles.locationIcon, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/location.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <Image
            style={[styles.groupItem, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
          <Image
            style={[styles.locationIcon, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/location.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <Image
            style={[styles.groupItem, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
          <Image
            style={[styles.locationIcon, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/location.png")}
          />
        </View>
        <View style={[styles.frameChild, styles.frameLayout]} />
      </ScrollView>
      <Image
        style={[styles.locationIcon4, styles.locationIconLayout]}
        contentFit="cover"
        source={require("../assets/location.png")}
      />
      <ScrollView
        style={styles.groupContainer}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollView1Content}
      >
        <View style={[styles.yeokgokParkParent, styles.rectangleGroupLayout]}>
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
          <Image
            style={[styles.groupItem, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-351.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
          <Image
            style={[styles.groupItem, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-361.png")}
          />
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleLayout]}>
          <Image
            style={[styles.groupItem, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.groupViewLayout]}>
          <Image
            style={[styles.groupItem, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-35.png")}
          />
          <Text style={[styles.yeokgokPark, styles.yeokgokParkPosition]}>
            yeokgok park
          </Text>
          <Text
            style={styles.jibongRo51beonGilBucheon}
          >{`77, Jibong-ro 51beon-gil, 
Bucheon-si`}</Text>
          <Image
            style={[styles.locationIcon, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/location.png")}
          />
        </View>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Image
          style={[styles.locationIcon6, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
        <Image
          style={[styles.locationIcon7, styles.locationIcon7Position]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
      </ScrollView>
      <Pressable style={[styles.groupPressable, styles.groupLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.groupLayout]}
          onPress={() => navigation.navigate("MeetUpLocate")}
        />
        <Text style={[styles.nearPlay, styles.nearPlayTypo]}>Near Play</Text>
        <Pressable
          style={[styles.location, styles.locationLayout]}
          onPress={() => navigation.navigate("MeetUpLocate")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/location1.png")}
          />
        </Pressable>
      </Pressable>
      <Pressable style={[styles.rectangleParent4, styles.groupLayout]}>
        <Pressable
          style={[styles.groupChild5, styles.groupLayout]}
          onPress={() => navigation.navigate("MeetUpDetail")}
        />
        <Text style={[styles.createNew, styles.nearPlayTypo]}>Create New</Text>
        <Pressable
          style={[styles.location, styles.locationLayout]}
          onPress={() => navigation.navigate("MeetUpCreate")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/quill-pen.png")}
          />
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView1Content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sortLeftLayout: {
    height: 30,
    width: 30,
    top: 50,
    position: "absolute",
  },
  restFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupChildLayout: {
    height: 45,
    width: 300,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  locationLayout: {
    height: 25,
    width: 25,
    top: 10,
    position: "absolute",
  },
  rectangleGroupLayout: {
    height: 212,
    width: 150,
  },
  yeokgokParkPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  locationIconLayout: {
    height: 20,
    width: 20,
  },
  wrapperPosition: {
    height: 150,
    width: 150,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    zIndex: 2,
    height: 212,
    width: 150,
  },
  groupViewLayout: {
    zIndex: 3,
    height: 212,
    width: 150,
  },
  frameLayout: {
    zIndex: 4,
    height: 100,
    width: 100,
    backgroundColor: Color.colorWhite,
  },
  locationIcon7Position: {
    left: 330,
    position: "absolute",
  },
  groupLayout: {
    width: 143,
    height: 45,
    position: "absolute",
  },
  nearPlayTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    top: 14,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  meetUpCategoryChild: {
    left: 18,
  },
  sortLeft: {
    left: 17,
  },
  activity: {
    top: 243,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    left: 30,
    position: "absolute",
  },
  groupChild: {
    height: 45,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  searchIcon: {
    left: 20,
  },
  searchPlayground: {
    left: 55,
    fontSize: FontSize.size_smi,
    top: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  rectangleParent: {
    top: 108,
    left: 30,
  },
  meetUpCategoryItem: {
    top: 851,
    left: 88,
    width: 215,
    height: 50,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rest: {
    top: 522,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    left: 30,
    position: "absolute",
  },
  yeokgokPark: {
    top: 165,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.colorBlack,
  },
  jibongRo51beonGilBucheon: {
    left: 23,
    fontSize: FontSize.size_5xs,
    color: Color.colorGray_100,
    top: 192,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_mini,
  },
  locationIcon: {
    top: 192,
    left: 0,
    position: "absolute",
  },
  yeokgokParkParent: {
    zIndex: 0,
  },
  groupItem: {
    borderRadius: Border.br_mini,
  },
  rectangleGroup: {
    zIndex: 1,
    marginLeft: 15,
  },
  rectangleContainer: {
    left: 330,
    position: "absolute",
    top: 0,
  },
  groupView: {
    left: 495,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: 17,
    left: 645,
    position: "absolute",
  },
  groupParent: {
    top: 290,
    left: 30,
    position: "absolute",
    width: "100%",
  },
  locationIcon4: {
    top: 761,
    left: 30,
    position: "absolute",
  },
  rectangleParent2: {
    marginLeft: 15,
  },
  rectangleParent3: {
    marginLeft: 15,
  },
  frameItem: {
    marginLeft: 15,
  },
  locationIcon6: {
    left: 165,
    zIndex: 5,
    top: 192,
    position: "absolute",
  },
  locationIcon7: {
    zIndex: 6,
    height: 20,
    width: 20,
    top: 192,
  },
  groupContainer: {
    top: 569,
    left: 30,
    position: "absolute",
    width: "100%",
  },
  rectanglePressable: {
    backgroundColor: Color.colorGoldenrod_200,
    borderRadius: Border.br_3xs,
    width: 143,
    left: 0,
    top: 0,
  },
  nearPlay: {
    left: 49,
  },
  location: {
    left: 10,
  },
  groupPressable: {
    top: 168,
    width: 143,
    left: 30,
  },
  groupChild5: {
    backgroundColor: Color.colorGoldenrod_300,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  createNew: {
    left: 45,
  },
  rectangleParent4: {
    left: 187,
    top: 168,
    width: 143,
  },
  meetUpCategory: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MeetUpCategory;
