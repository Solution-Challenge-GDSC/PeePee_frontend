import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ScrollView, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MeetUpLocate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetUpLocate}>
      <Image
        style={styles.image53Icon}
        contentFit="cover"
        source={require("../assets/image-53.png")}
      />
      <ScrollView
        style={styles.vectorParent}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <Text style={styles.aCloseMeeting}>A Close Meeting</Text>
        <View style={[styles.yeohokParkParent, styles.yeohokLayout]}>
          <Text style={styles.yeohokPark}>Yeohok Park</Text>
          <Text style={[styles.mAway, styles.awayTypo]}>10M away</Text>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-362.png")}
          />
        </View>
        <View style={[styles.yeohokParkGroup, styles.yeohokLayout]}>
          <Text style={styles.yeohokPark}>Yeohok Park</Text>
          <Text style={[styles.mAway, styles.awayTypo]}>10M away</Text>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-43.png")}
          />
        </View>
        <View style={styles.yeohokParkContainer}>
          <Text style={styles.yeohokPark}>Yeohok Park</Text>
          <Text style={[styles.mAway2, styles.awayTypo]}>10M away</Text>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-43.png")}
          />
        </View>
      </ScrollView>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.ellipseIcon, styles.sortLeftLayout]}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  yeohokLayout: {
    height: 155,
    width: 300,
    left: 62,
    position: "absolute",
  },
  awayTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 100,
    borderRadius: Border.br_mini,
    left: 0,
    width: 300,
    position: "absolute",
  },
  sortLeftLayout: {
    width: 30,
    height: 30,
    top: 0,
    position: "absolute",
  },
  image53Icon: {
    top: -21,
    left: -117,
    width: 511,
    height: 969,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 80,
    width: 420,
    height: 644,
    zIndex: 0,
  },
  aCloseMeeting: {
    top: 44,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    zIndex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    left: 62,
    position: "absolute",
  },
  yeohokPark: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  mAway: {
    top: 140,
  },
  groupChild: {
    top: 32,
  },
  yeohokParkParent: {
    top: 101,
    zIndex: 2,
  },
  yeohokParkGroup: {
    top: 276,
    zIndex: 3,
  },
  mAway2: {
    top: 42,
  },
  groupInner: {
    top: 77,
  },
  yeohokParkContainer: {
    top: 451,
    height: 177,
    zIndex: 4,
    width: 300,
    left: 62,
    position: "absolute",
  },
  vectorParent: {
    top: 444,
    left: -46,
    width: 453,
    maxWidth: 453,
    position: "absolute",
    flex: 1,
  },
  ellipseIcon: {
    left: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 0,
  },
  ellipseParent: {
    top: 50,
    left: 17,
    width: 31,
    height: 30,
    position: "absolute",
  },
  meetUpLocate: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 800,
    width: "100%",
    flex: 1,
  },
});

export default MeetUpLocate;
