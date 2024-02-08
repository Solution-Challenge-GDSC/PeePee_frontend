import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MeetUpIntromom = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetUpIntromom}>
      <Image
        style={[styles.meetUpIntromomChild, styles.forwardLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.sortLeft, styles.forwardLayout]}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={styles.home}>Home</Text>
      <Image
        style={styles.meetUpIntromomItem}
        contentFit="cover"
        source={require("../assets/ellipse-34.png")}
      />
      <Image
        style={styles.image51Icon}
        contentFit="cover"
        source={require("../assets/image-51.png")}
      />
      <Image
        style={styles.meetUpIntromomInner}
        contentFit="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Text style={[styles.onlyMom, styles.meetFlexBox]}>Only Mom</Text>
      <Text
        style={[styles.meetOtherMoms, styles.meetFlexBox]}
      >{`Meet other moms and talk or relax!
Share your knowledge of parenting
take a break`}</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-36.png")}
      />
      <Image
        style={[styles.meetUpIntromomChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-37.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("MeetUpCategory")}
      />
      <Text style={[styles.goToMeet, styles.meetFlexBox]}>Go To Meet</Text>
      <Image
        style={[styles.forwardIcon, styles.forwardLayout]}
        contentFit="cover"
        source={require("../assets/forward.png")}
      />
      <Pressable
        style={[styles.forward, styles.forwardLayout]}
        onPress={() => navigation.navigate("MeetUpIntrowbaby")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/forward1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  forwardLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  meetFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 7,
    width: 7,
    top: 490,
    position: "absolute",
  },
  meetUpIntromomChild: {
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
  home: {
    top: 56,
    left: 58,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  meetUpIntromomItem: {
    top: 170,
    left: 80,
    width: 200,
    height: 200,
    position: "absolute",
  },
  image51Icon: {
    top: 136,
    left: 52,
    width: 222,
    height: 240,
    position: "absolute",
  },
  meetUpIntromomInner: {
    top: 440,
    left: -70,
    width: 500,
    height: 500,
    position: "absolute",
  },
  onlyMom: {
    left: 126,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    top: 547,
    color: Color.colorBlack,
  },
  meetOtherMoms: {
    top: 594,
    left: 56,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
  },
  ellipseIcon: {
    left: 170,
  },
  meetUpIntromomChild1: {
    left: 185,
  },
  rectanglePressable: {
    top: 690,
    left: 105,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_300,
    shadowColor: "rgba(158, 156, 114, 0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 150,
    height: 50,
    position: "absolute",
  },
  goToMeet: {
    top: 704,
    left: 114,
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    width: 132,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  forwardIcon: {
    left: 245,
    top: 547,
  },
  forward: {
    left: 85,
    top: 547,
  },
  meetUpIntromom: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MeetUpIntromom;
