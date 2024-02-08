import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Linking } from "react-native"; // Linking 추가
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  // 버튼을 누르면 지정된 URL로 이동하는 함수
  const handlePress = () => {
    // 지정된 URL로 이동합니다.
    Linking.openURL("https://applemango.store/oauth2/authorization/google");
  };

  return (
    <View style={styles.logIn}>
      <Image
        style={styles.image70Icon}
        contentFit="cover"
        source={require("../assets/image-701.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.letsPlayParent}>
          <Text
            style={[styles.letsPlay, styles.letsPlayTypo]}
          >{`Let's play `}</Text>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-21.png")}
          />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/line-23.png")}
          />
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/line-22.png")}
          />
        </View>
        <View style={[styles.customizedGamesWrapper, styles.customizedLayout]}>
          <Text
            style={[styles.customizedGames, styles.customizedLayout]}
          >{`customized 
games`}</Text>
        </View>
        <View style={[styles.forOurKidsParent, styles.forLayout]}>
          <Text style={[styles.forOurKids, styles.forLayout]}>
            for our kids!
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={handlePress} // 버튼을 누르면 handlePress 함수 호출
      >
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Image
          style={styles.googleIcon}
          contentFit="cover"
          source={require("../assets/google.png")}
        />
        <Text style={[styles.continueWithGoogle, styles.letsPlayTypo]}>
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
    lineHeight: 36,
    position: "absolute",
  },
  customizedLayout: {
    height: 94,
    width: 280,
  },
  forLayout: {
    height: 52,
    width: 272,
  },
  rectangleLayout: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  image70Icon: {
    width: 841,
    height: 1138,
    zIndex: 0,
  },
  letsPlay: {
    top: 19,
    width: 227,
    height: 56,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
    letterSpacing: -1.5,
    fontSize: FontSize.size_31xl,
    left: 0,
  },
  groupChild: {
    left: 221,
    width: 5,
    height: 18,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 29,
    left: 236,
    width: 15,
    height: 6,
    position: "absolute",
  },
  groupInner: {
    top: 11,
    left: 231,
    width: 11,
    height: 13,
    position: "absolute",
  },
  letsPlayParent: {
    width: 251,
    height: 75,
  },
  customizedGames: {
    color: Color.colorGoldenrod_200,
    textShadowColor: "rgba(255, 192, 69, 0.8)",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 30,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
    position: "absolute",
    letterSpacing: -1.5,
    fontSize: FontSize.size_31xl,
    width: 280,
    left: 0,
  },
  customizedGamesWrapper: {
    marginTop: 20,
  },
  forOurKids: {
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
    position: "absolute",
    color: Color.colorWhite,
    letterSpacing: -1.5,
    fontSize: FontSize.size_31xl,
    left: 0,
  },
  vectorIcon: {
    top: 39,
    left: 159,
    borderRadius: Border.br_3xs,
    width: 101,
    height: 9,
    position: "absolute",
  },
  forOurKidsParent: {
    marginTop: 20,
  },
  groupParent: {
    top: 55,
    zIndex: 1,
    left: 30,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: 50,
    top: 0,
    left: 0,
    width: 300,
    backgroundColor: Color.colorWhite,
  },
  googleIcon: {
    top: 10,
    left: 50,
    width: 30,
    height: 30,
    position: "absolute",
  },
  continueWithGoogle: {
    top: 7,
    left: 101,
    fontSize: FontSize.size_smi,
    color: "#0a0a0a",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 36,
  },
  rectangleParent: {
    top: 680,
    zIndex: 2,
    left: 30,
  },
  logIn: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
});

export default LogIn;
