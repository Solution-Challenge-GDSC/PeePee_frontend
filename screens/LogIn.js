import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <Image
        style={styles.image70Icon}
        contentFit="cover"
        source={require("../assets/image-69.png")}
      />
      <Text
        style={[styles.letsPlay, styles.letsPlayTypo]}
      >{`Let's play `}</Text>
      <Text style={[styles.forOurKids, styles.letsPlayTypo]}>
        for our kids!
      </Text>
      <Text style={[styles.customizedGames, styles.letsPlayTypo]}>{`customized 
games`}</Text>
      <Image
        style={styles.logInChild}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.logInItem}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={styles.logInInner}
        contentFit="cover"
        source={require("../assets/line-23.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-22.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Main")}
      />
      <Pressable
        onPress={() => navigation.navigate("Main")}>
      <Image
        style={styles.googleIcon}
        contentFit="cover"
        source={require("../assets/google.png")}
      />
      <Text style={[styles.continueWithGoogle, styles.letsPlayTypo]}
      >
        Continue with Google
      </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  letsPlayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 48,
    position: "absolute",
  },
  image70Icon: {
    top: 0,
    left: 0,
    width: 450,
    position: "absolute",
    height: 900,
  },
  letsPlay: {
    top: 70,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
    letterSpacing: -1.5,
    fontSize: FontSize.size_31xl,
    left: 30,
  },
  forOurKids: {
    top: 221,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
    letterSpacing: -1.5,
    fontSize: FontSize.size_31xl,
    left: 30,
  },
  customizedGames: {
    top: 126,
    color: Color.colorGoldenrod_200,
    textShadowColor: "rgba(255, 192, 69, 0.8)",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 30,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
    letterSpacing: -1.5,
    fontSize: FontSize.size_31xl,
    left: 30,
  },
  logInChild: {
    top: 262,
    left: 189,
    borderRadius: Border.br_3xs,
    width: 101,
    height: 10,
    position: "absolute",
  },
  logInItem: {
    top: 55,
    left: 239,
    width: 5,
    height: 14,
    position: "absolute",
  },
  logInInner: {
    top: 78,
    left: 253,
    width: 14,
    height: 5,
    position: "absolute",
  },
  lineIcon: {
    top: 64,
    left: 248,
    width: 11,
    height: 11,
    position: "absolute",
  },
  rectanglePressable: {
    top: 680,
    borderRadius: 50,
    width: 300,
    height: 50,
    left: 30,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  googleIcon: {
    top: 690,
    left: 80,
    width: 30,
    height: 30,
    position: "absolute",
  },
  continueWithGoogle: {
    top: 687,
    left: 131,
    fontSize: FontSize.size_smi,
    color: "#0a0a0a",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
  },
  logIn: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
});

export default LogIn;