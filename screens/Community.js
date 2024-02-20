import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Community = () => {
  const navigation = useNavigation();

  const handleWritePress1 = () => {
    navigation.navigate("CommunityWrite");
  };

  return (
    <View style={styles.community}>
      <Image
        style={[styles.communityChild, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
                 <Pressable
            style={[styles.sortLeft, styles.sortLeftLayout]}
            onPress={() => navigation.navigate("Main")}
          >
      <Image
        style={[styles.sortLeftIcon, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/sort-left.png")}
      />
      </Pressable>

      
      <Text style={styles.home}>Home</Text>
      <View style={[styles.communityItem, styles.communityItemLayout]} />
      <Pressable style={[styles.rectangleParent, styles.communityItemLayout]}>
        <View style={styles.groupChild} />
        <Text style={styles.text}>자유게시판</Text>
      </Pressable>
      <Text style={styles.text1}>소통게시판</Text>
      <Pressable style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.groupChild} />
        <Text style={styles.text}>고민게시판</Text>
      </Pressable>
      <ScrollView
        style={[styles.lineParent, styles.frameChildPosition]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>9분 전</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </View>
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.group, styles.groupParentLayout]}>
          <Text style={[styles.text4, styles.textTypo1]}>9분 전</Text>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </View>
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <View style={[styles.container, styles.groupParentLayout]}>
          <Text style={[styles.text4, styles.textTypo1]}>9분 전</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </View>
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Text style={[styles.text4, styles.textTypo1]}>9분 전</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </View>
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <View style={[styles.parent1, styles.groupParentLayout]}>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>9분 전</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </View>
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <View style={[styles.parent2, styles.groupParentLayout]}>
          <Text style={[styles.text4, styles.textTypo1]}>9분 전</Text>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </View>
        <View style={[styles.frameChild4, styles.frameChildLayout]} />
        <View style={[styles.parent3, styles.parentPosition]}>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </View>
        <View style={[styles.frameChild5, styles.frameChildLayout]} />
        <View style={[styles.parent4, styles.parentPosition]}>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </View>
        <View style={[styles.frameChild6, styles.frameChildLayout]} />
        <View style={[styles.parent5, styles.parentPosition]}>
          <Text style={[styles.text4, styles.textTypo1]}>9분 전</Text>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </View>
        <View style={[styles.frameChild7, styles.frameChildLayout]} />
        <View style={[styles.parent6, styles.parentPosition]}>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </View>
        <View style={[styles.frameChild8, styles.frameChildLayout]} />
        <View style={[styles.parent7, styles.parentPosition]}>
          <Text style={styles.text3}>게시글 제목제목제목제목제목</Text>
          <Text
            style={styles.textTextText}
          >{`text text text text text text text text text text text text text text text text text text `}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>익명</Text>
          <Text style={[styles.text6, styles.textTypo]}>10</Text>
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <View style={[styles.lineView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.thumbsUpIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/thumbs-up1.png")}
          />
          <Image
            style={[styles.speechIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech1.png")}
          />
        </View>
      </ScrollView>
      <Pressable style={[styles.rectangleContainer, styles.rectanglePosition]}
            onPress={handleWritePress1}>
        <View style={[styles.rectangleView, styles.frameChildPosition]} />
        <Text style={styles.createNew}>Create New</Text>
        <Pressable
          style={[styles.quillPen, styles.text5Layout]}
          onPress={() => navigation.navigate("MeetUpCreate")}
        >
          <Image
            style={styles.icon}
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sortLeftIconLayout: {
    height: 30,
    width: 30,
    top: 38,
    position: "absolute",
  },
  communityItemLayout: {
    width: 100,
    top: 88,
    height: 30,
    position: "absolute",
  },
  rectanglePosition: {
    left: 241,
    width: 100,
    height: 30,
    position: "absolute",
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  groupParentLayout: {
    height: 75,
    width: 319,
    marginTop: 18,
  },
  textTypo1: {
    fontFamily: FontFamily.interRegular,
    top: 55,
    fontSize: FontSize.size_4xs,
    lineHeight: 20,
    color: Color.colorGainsboro_100,
    textAlign: "left",
  },
  text5Layout: {
    width: 21,
    position: "absolute",
  },
  textTypo: {
    width: 14,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    top: 55,
    lineHeight: 20,
    color: Color.colorGainsboro_100,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 11,
    width: 1,
    borderRightWidth: 1,
    top: 60,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 13,
    top: 60,
    position: "absolute",
  },
  parentPosition: {
    left: 22,
    height: 75,
    width: 319,
    position: "absolute",
  },
  communityChild: {
    left: 18,
  },
  sortLeftIcon: {
    left: 17,
  },
  home: {
    left: 58,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 44,
    position: "absolute",
  },
  communityItem: {
    left: 129,
    backgroundColor: Color.colorGoldenrod_200,
    borderColor: Color.colorGoldenrod_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    width: 100,
  },
  groupChild: {
    borderColor: Color.colorGainsboro_100,
    left: 0,
    top: 0,
    width: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    height: 30,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 8,
    left: 25,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    left: 17,
  },
  text1: {
    top: 96,
    left: 153,
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleGroup: {
    top: 88,
    left: 241,
  },
  frameChild: {
    zIndex: 0,
  },
  text3: {
    width: 169,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTextText: {
    top: 20,
    lineHeight: 15,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    fontSize: FontSize.size_smi,
    width: 319,
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text4: {
    width: 31,
    left: 0,
    position: "absolute",
  },
  text5: {
    left: 42,
    fontFamily: FontFamily.interRegular,
    top: 55,
    fontSize: FontSize.size_4xs,
    lineHeight: 20,
    color: Color.colorGainsboro_100,
    textAlign: "left",
  },
  text6: {
    left: 94,
  },
  text7: {
    left: 138,
  },
  groupInner: {
    left: 32,
  },
  lineView: {
    left: 67,
  },
  groupChild1: {
    left: 111,
  },
  thumbsUpIcon: {
    left: 77,
  },
  speechIcon: {
    left: 122,
  },
  parent: {
    zIndex: 1,
    marginTop: 18,
  },
  frameItem: {
    zIndex: 2,
    marginTop: 18,
  },
  group: {
    zIndex: 3,
    marginTop: 18,
  },
  frameInner: {
    zIndex: 4,
    marginTop: 18,
  },
  container: {
    zIndex: 5,
    marginTop: 18,
  },
  frameChild1: {
    zIndex: 6,
    marginTop: 18,
  },
  groupView: {
    zIndex: 7,
    marginTop: 18,
  },
  frameChild2: {
    zIndex: 8,
    marginTop: 18,
  },
  parent1: {
    zIndex: 9,
    marginTop: 18,
  },
  frameChild3: {
    zIndex: 10,
    marginTop: 18,
  },
  parent2: {
    zIndex: 11,
    marginTop: 18,
  },
  frameChild4: {
    top: 660,
    zIndex: 12,
    left: 0,
    position: "absolute",
  },
  parent3: {
    top: 678,
    zIndex: 13,
  },
  frameChild5: {
    top: 770,
    zIndex: 14,
    left: 0,
    position: "absolute",
  },
  parent4: {
    top: 788,
    zIndex: 15,
  },
  frameChild6: {
    top: 880,
    zIndex: 16,
    left: 0,
    position: "absolute",
  },
  parent5: {
    top: 898,
    zIndex: 17,
  },
  frameChild7: {
    top: 990,
    zIndex: 18,
    left: 0,
    position: "absolute",
  },
  parent6: {
    top: 1008,
    zIndex: 19,
  },
  frameChild8: {
    top: 1100,
    zIndex: 20,
    left: 0,
    position: "absolute",
  },
  parent7: {
    top: 1118,
    zIndex: 21,
  },
  lineParent: {
    top: 148,
    flex: 1,
  },
  rectangleView: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#f1f1f1",
    borderColor: "#999",
    borderWidth: 0.5,
    top: 0,
    left: 0,
    width: 100,
    borderStyle: "solid",
    height: 30,
  },
  createNew: {
    top: 9,
    left: 39,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  quillPen: {
    left: 10,
    top: 3,
    height: 25,
  },
  rectangleContainer: {
    left: 241,
    top: 44,
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
