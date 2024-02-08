import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Community = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.community}>
      <Image
        style={[styles.communityChild, styles.sortLeftLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.sortLeft, styles.sortLeftLayout]}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </Pressable>
      <Text style={styles.home}>Home</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.text}>자유게시판</Text>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.text1}>소통게시판</Text>
      </Pressable>
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.text}>고민게시판</Text>
      </Pressable>
      <ScrollView
        style={[styles.lineParent, styles.frameChildPosition]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Pressable
          style={[styles.parent, styles.groupParentLayout]}
          onPress={() => navigation.navigate("CommunityDetail")}
        >
          <Text style={[styles.text3, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text4, styles.textTypo2]}>9분 전</Text>
          <Text style={[styles.text5, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </Pressable>
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <Pressable
          style={[styles.group, styles.groupParentLayout]}
          onPress={() => navigation.navigate("CommunityDetail")}
        >
          <Text style={[styles.text8, styles.textTypo2]}>9분 전</Text>
          <Text style={[styles.text9, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </Pressable>
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <Pressable
          style={[styles.container, styles.groupParentLayout]}
          onPress={() => navigation.navigate("CommunityDetail")}
        >
          <Text style={[styles.text4, styles.textTypo2]}>9분 전</Text>
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Text style={[styles.text14, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </Pressable>
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Pressable
          style={[styles.groupPressable, styles.groupParentLayout]}
          onPress={() => navigation.navigate("CommunityDetail")}
        >
          <Text style={[styles.text8, styles.textTypo2]}>9분 전</Text>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.text19, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </Pressable>
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <Pressable
          style={[styles.parent1, styles.groupParentLayout]}
          onPress={() => navigation.navigate("CommunityDetail")}
        >
          <Text style={[styles.text9, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text8, styles.textTypo2]}>9분 전</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </Pressable>
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Text style={[styles.text8, styles.textTypo2]}>9분 전</Text>
          <Text style={[styles.text29, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </View>
        <View style={[styles.frameChild4, styles.frameChildLayout]} />
        <View style={[styles.parent2, styles.parentPosition]}>
          <Text style={[styles.text33, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up2.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech2.png")}
          />
        </View>
        <View style={[styles.frameChild5, styles.frameChildLayout]} />
        <View style={[styles.parent3, styles.parentPosition]}>
          <Text style={[styles.text33, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up2.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech2.png")}
          />
        </View>
        <View style={[styles.frameChild6, styles.frameChildLayout]} />
        <View style={[styles.parent4, styles.parentPosition]}>
          <Text style={[styles.text8, styles.textTypo2]}>9분 전</Text>
          <Text style={[styles.text33, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up2.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech2.png")}
          />
        </View>
        <View style={[styles.frameChild7, styles.frameChildLayout]} />
        <View style={[styles.parent5, styles.parentPosition]}>
          <Text style={[styles.text33, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up2.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech2.png")}
          />
        </View>
        <View style={[styles.frameChild8, styles.frameChildLayout]} />
        <View style={[styles.parent6, styles.parentPosition]}>
          <Text style={[styles.text33, styles.textTypo4]}>
            게시글 제목제목제목제목제목
          </Text>
          <Text
            style={[styles.textTextText1, styles.textTypo3]}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text10, styles.textTypo1]}>익명</Text>
          <Text style={[styles.text11, styles.textTypo]}>10</Text>
          <Text style={[styles.text12, styles.textTypo]}>10</Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Image
            style={[styles.thumbsUpIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up2.png")}
          />
          <Image
            style={[styles.speechIcon1, styles.speechIconLayout]}
            contentFit="cover"
            source={require("../assets/speech2.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sortLeftLayout: {
    height: 30,
    width: 30,
    top: 50,
    position: "absolute",
  },
  rectangleLayout: {
    width: 100,
    top: 100,
    height: 30,
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
    width: 100,
    height: 30,
    position: "absolute",
  },
  frameChildPosition: {
    position: "absolute",
    left: 0,
  },
  frameChildLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  groupParentLayout: {
    height: 75,
    marginTop: 18,
  },
  textTypo4: {
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 15,
    top: 20,
    width: 319,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo2: {
    width: 31,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 55,
    lineHeight: 20,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    width: 21,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 55,
    lineHeight: 20,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    width: 14,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 55,
    lineHeight: 20,
    color: Color.colorGainsboro_200,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 11,
    width: 1,
    borderRightWidth: 1,
    top: 60,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  speechIconLayout: {
    height: 13,
    width: 13,
    top: 60,
    position: "absolute",
  },
  parentPosition: {
    left: 22,
    width: 319,
    height: 75,
    position: "absolute",
  },
  communityChild: {
    left: 18,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 17,
  },
  home: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text: {
    left: 25,
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    left: 17,
  },
  groupItem: {
    backgroundColor: Color.colorGoldenrod_300,
    borderColor: Color.colorGoldenrod_300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    top: 0,
  },
  text1: {
    left: 24,
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    top: 8,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleGroup: {
    left: 129,
  },
  rectangleContainer: {
    left: 241,
  },
  frameChild: {
    zIndex: 0,
  },
  text3: {
    width: 293,
    left: 0,
  },
  textTextText: {
    width: 319,
    left: 1,
  },
  text4: {
    left: 1,
  },
  text5: {
    left: 43,
  },
  text6: {
    left: 95,
  },
  text7: {
    left: 139,
  },
  lineView: {
    left: 33,
  },
  groupChild1: {
    left: 68,
  },
  groupChild2: {
    left: 112,
  },
  thumbsUpIcon: {
    left: 78,
  },
  speechIcon: {
    left: 123,
  },
  parent: {
    zIndex: 1,
    marginTop: 18,
    width: 320,
    height: 75,
  },
  frameItem: {
    zIndex: 2,
    marginTop: 18,
  },
  text8: {
    left: 0,
  },
  text9: {
    width: 254,
    left: 1,
  },
  textTextText1: {
    width: 319,
    left: 0,
  },
  text10: {
    left: 42,
  },
  text11: {
    left: 94,
  },
  text12: {
    left: 138,
  },
  groupChild3: {
    left: 32,
  },
  groupChild4: {
    left: 67,
  },
  groupChild5: {
    left: 111,
  },
  thumbsUpIcon1: {
    left: 77,
  },
  speechIcon1: {
    left: 122,
  },
  group: {
    zIndex: 3,
    width: 319,
    marginTop: 18,
  },
  frameInner: {
    zIndex: 4,
    marginTop: 18,
  },
  text14: {
    width: 284,
    left: 0,
  },
  container: {
    zIndex: 5,
    marginTop: 18,
    width: 320,
    height: 75,
  },
  frameChild1: {
    zIndex: 6,
    marginTop: 18,
  },
  text19: {
    width: 318,
    left: 1,
  },
  groupPressable: {
    zIndex: 7,
    width: 319,
    marginTop: 18,
  },
  frameChild2: {
    zIndex: 8,
    marginTop: 18,
  },
  parent1: {
    zIndex: 9,
    width: 319,
    marginTop: 18,
  },
  frameChild3: {
    zIndex: 10,
    marginTop: 18,
  },
  text29: {
    width: 289,
    height: 20,
    left: 1,
  },
  groupView: {
    zIndex: 11,
    width: 319,
    marginTop: 18,
  },
  frameChild4: {
    top: 660,
    zIndex: 12,
    left: 0,
    position: "absolute",
  },
  text33: {
    width: 169,
    left: 0,
  },
  parent2: {
    top: 678,
    zIndex: 13,
  },
  frameChild5: {
    top: 770,
    zIndex: 14,
    left: 0,
    position: "absolute",
  },
  parent3: {
    top: 788,
    zIndex: 15,
  },
  frameChild6: {
    top: 880,
    zIndex: 16,
    left: 0,
    position: "absolute",
  },
  parent4: {
    top: 898,
    zIndex: 17,
  },
  frameChild7: {
    top: 990,
    zIndex: 18,
    left: 0,
    position: "absolute",
  },
  parent5: {
    top: 1008,
    zIndex: 19,
  },
  frameChild8: {
    top: 1100,
    zIndex: 20,
    left: 0,
    position: "absolute",
  },
  parent6: {
    top: 1118,
    zIndex: 21,
  },
  lineParent: {
    top: 160,
    left: 0,
    flex: 1,
  },
  community: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Community;
