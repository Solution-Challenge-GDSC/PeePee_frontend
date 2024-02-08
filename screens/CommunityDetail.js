import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CommunityDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.communityDetail}>
      <View style={[styles.groupParent, styles.parentLayout1]}>
        <View style={[styles.ellipseParent, styles.parentLayout1]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Pressable
            style={[styles.sortLeft, styles.groupLayout]}
            onPress={() => navigation.navigate("Community")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/sort-left.png")}
            />
          </Pressable>
        </View>
        <Text style={styles.text}>소통게시판</Text>
      </View>
      <ScrollView
        style={[styles.groupContainer, styles.groupPosition1]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupView}>
          <View style={[styles.parent, styles.groupPosition1]}>
            <Text style={styles.text1}>제목제목제목제목제목제목</Text>
            <Text
              style={[styles.textTextText, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
          </View>
          <View style={[styles.group, styles.groupPosition1]}>
            <Text style={[styles.text2, styles.textTypo1]}>10</Text>
            <Text style={[styles.text3, styles.textTypo1]}>10</Text>
            <ImageBackground
              style={[styles.thumbsUpIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/thumbs-up2.png")}
            />
            <Image
              style={[styles.speechIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/speech2.png")}
            />
          </View>
          <Pressable style={[styles.rectangleParent, styles.groupItemLayout]}>
            <View style={[styles.groupItem, styles.groupChildPosition]} />
            <Image
              style={[styles.thumbsUpIcon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/thumbs-up2.png")}
            />
            <Text style={styles.text4}>공감</Text>
          </Pressable>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <ImageBackground
              style={[styles.groupInner, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle41.png")}
            />
            <View style={[styles.container, styles.groupPosition]}>
              <Text style={styles.text5}>익명</Text>
              <Text style={[styles.text6, styles.textTypo]}>02/05 16:06</Text>
            </View>
            <View style={[styles.groupWrapper, styles.groupLayout]}>
              <Pressable style={[styles.sortLeft, styles.groupLayout]}>
                <View
                  style={[styles.rectangleView, styles.groupChildPosition]}
                />
                <Image
                  style={[styles.bellIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/bell.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.lineParent}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <View style={[styles.parent1, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <Pressable style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.frameItem, styles.frameChildLayout]} />
          <View style={[styles.parent2, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <View style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameInner, styles.frameChildLayout]} />
          <View style={[styles.parent3, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <View style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.frameChildLayout]} />
          <View style={[styles.parent4, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <View style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild1, styles.frameChildLayout]} />
          <View style={[styles.parent5, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <View style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
          <View style={[styles.parent6, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <View style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild3, styles.frameChildLayout]} />
          <View style={[styles.parent7, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <View style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <View style={[styles.parent8, styles.parentLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>02/05 16:06</Text>
            <Text
              style={[styles.textTextText1, styles.textLayout]}
            >{`text text text text text text text text text text text text text text text text text text `}</Text>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <Image
                style={[styles.rectangleIcon, styles.rectanglePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-86.png")}
              />
              <Text style={styles.text8}>익명1</Text>
              <View style={[styles.groupPressable, styles.deletePosition]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.delete, styles.deletePosition]}>
                  Delete
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.rectangleParent16, styles.groupChild16Layout]}>
        <View style={[styles.groupChild16, styles.groupChild16Layout]} />
        <View style={[styles.rectangleParent17, styles.groupChild17Layout]}>
          <View style={[styles.groupChild17, styles.groupChild17Layout]} />
          <TextInput
            style={[styles.textinput, styles.textTypo2]}
            placeholder="Write Reply"
          />
          <Image
            style={[styles.speechIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/speech3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  parentLayout1: {
    height: 30,
    position: "absolute",
  },
  groupLayout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  groupPosition1: {
    position: "absolute",
    left: 0,
  },
  textLayout: {
    width: 319,
    left: 0,
  },
  textTypo1: {
    width: 14,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    lineHeight: 20,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 13,
    width: 13,
    position: "absolute",
  },
  groupItemLayout: {
    height: 22,
    width: 50,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.colorWhitesmoke_200,
    left: 0,
    top: 0,
  },
  groupPosition: {
    height: 40,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    width: 77,
    lineHeight: 20,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  frameChildLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 92,
    left: 18,
    width: 321,
    position: "absolute",
  },
  rectanglePosition: {
    height: 25,
    left: 0,
    top: 0,
    position: "absolute",
  },
  deletePosition: {
    width: 51,
    top: 0,
    position: "absolute",
  },
  groupChild16Layout: {
    height: 62,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupChild17Layout: {
    height: 42,
    width: 320,
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  sortLeft: {
    left: 0,
    top: 0,
  },
  ellipseParent: {
    width: 31,
    left: 0,
    top: 0,
  },
  text: {
    left: 125,
    width: 77,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    top: 5,
    position: "absolute",
  },
  groupParent: {
    top: 50,
    width: 202,
    left: 17,
  },
  text1: {
    letterSpacing: 0.2,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: 320,
    color: Color.colorBlack,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTextText: {
    top: 30,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_smi,
    position: "absolute",
    lineHeight: 15,
    width: 319,
    textAlign: "left",
    color: Color.colorBlack,
  },
  parent: {
    top: 61,
    height: 60,
    width: 320,
    left: 0,
  },
  text2: {
    left: 17,
  },
  text3: {
    left: 61,
  },
  thumbsUpIcon: {
    top: 5,
    left: 0,
  },
  speechIcon: {
    left: 45,
    top: 5,
  },
  group: {
    top: 148,
    width: 75,
    height: 20,
    left: 0,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    height: 22,
    width: 50,
    position: "absolute",
  },
  thumbsUpIcon1: {
    top: 4,
    left: 8,
  },
  text4: {
    top: 1,
    left: 25,
    width: 17,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 176,
    left: 0,
  },
  groupInner: {
    width: 40,
    borderRadius: Border.br_8xs,
    left: 0,
  },
  text5: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: 77,
    color: Color.colorBlack,
    lineHeight: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text6: {
    top: 20,
  },
  container: {
    left: 60,
    width: 77,
  },
  rectangleView: {
    borderRadius: Border.br_8xs,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bellIcon: {
    left: 5,
    top: 5,
  },
  groupWrapper: {
    left: 289,
    top: 0,
  },
  rectangleGroup: {
    width: 319,
    left: 0,
  },
  groupView: {
    height: 198,
    width: 320,
  },
  frameChild: {
    top: 0,
  },
  text7: {
    top: 72,
  },
  textTextText1: {
    top: 35,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_smi,
    position: "absolute",
    lineHeight: 15,
    width: 319,
    textAlign: "left",
    color: Color.colorBlack,
  },
  rectangleIcon: {
    width: 25,
    borderRadius: Border.br_8xs,
  },
  text8: {
    left: 35,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    width: 77,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: Border.br_8xs,
    width: 50,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 20,
    position: "absolute",
  },
  delete: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_4xs,
    width: 51,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    left: 0,
  },
  groupPressable: {
    left: 270,
    height: 20,
  },
  rectangleParent1: {
    width: 321,
    height: 25,
  },
  parent1: {
    top: 10,
  },
  frameItem: {
    top: 112,
  },
  parent2: {
    top: 122,
  },
  frameInner: {
    top: 224,
  },
  parent3: {
    top: 234,
  },
  lineView: {
    top: 336,
  },
  parent4: {
    top: 346,
  },
  frameChild1: {
    top: 450,
  },
  parent5: {
    top: 460,
  },
  frameChild2: {
    top: 562,
  },
  parent6: {
    top: 572,
  },
  frameChild3: {
    top: 674,
  },
  parent7: {
    top: 684,
  },
  frameChild4: {
    top: 786,
  },
  parent8: {
    top: 796,
  },
  lineParent: {
    height: 444,
    marginTop: 20,
    width: 360,
  },
  groupContainer: {
    top: 100,
    left: 0,
    flex: 1,
  },
  groupChild16: {
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupChild17: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 0,
    top: 0,
  },
  textinput: {
    top: 13,
    left: 10,
  },
  speechIcon1: {
    top: 11,
    left: 290,
  },
  rectangleParent17: {
    left: 20,
    top: 10,
  },
  rectangleParent16: {
    top: 740,
  },
  communityDetail: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default CommunityDetail;
