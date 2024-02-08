import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MeetUpIntrowbaby = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetUpIntrowbaby}>
      <Image
        style={[styles.meetUpIntrowbabyChild, styles.forwardLayout]}
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
        style={styles.meetUpIntrowbabyItem}
        contentFit="cover"
        source={require("../assets/ellipse-341.png")}
      />
      <Image
        style={styles.meetUpIntrowbabyInner}
        contentFit="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Text style={[styles.withBaby, styles.withBabyFlexBox]}>With Baby</Text>
      <Text
        style={[styles.letsHaveMore, styles.withBabyFlexBox]}
      >{`Let's have more fun activities with other kids!
You can develop your child's social skills
make more friends`}</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-36.png")}
      />
      <Image
        style={[styles.meetUpIntrowbabyChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-37.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("MeetUpCategory")}
      />
      <Text style={[styles.goToMeet, styles.withBabyFlexBox]}>Go To Meet</Text>
      <Image
        style={styles.image52Icon}
        contentFit="cover"
        source={require("../assets/image-52.png")}
      />
      <Pressable
        style={[styles.forward, styles.forwardLayout]}
        onPress={() => navigation.navigate("MeetUpIntromom")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
      </Pressable>
      <Image
        style={[styles.forwardIcon, styles.forwardLayout]}
        contentFit="cover"
        source={require("../assets/forward1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forwardLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  withBabyFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 7,
    width: 7,
    top: 490,
    position: "absolute",
  },
  meetUpIntrowbabyChild: {
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
  meetUpIntrowbabyItem: {
    top: 170,
    left: 80,
    width: 200,
    height: 200,
    position: "absolute",
  },
  meetUpIntrowbabyInner: {
    top: 440,
    left: -70,
    width: 500,
    height: 500,
    position: "absolute",
  },
  withBaby: {
    left: 125,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    top: 547,
    color: Color.colorBlack,
  },
  letsHaveMore: {
    top: 594,
    left: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
  },
  ellipseIcon: {
    left: 184,
  },
  meetUpIntrowbabyChild1: {
    left: 170,
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
  image52Icon: {
    top: 130,
    left: 91,
    width: 179,
    height: 240,
    position: "absolute",
  },
  forward: {
    left: 245,
    top: 547,
  },
  forwardIcon: {
    left: 85,
    top: 547,
  },
  meetUpIntrowbaby: {
    backgroundColor: Color.colorFloralwhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MeetUpIntrowbaby;
