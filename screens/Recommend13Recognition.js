import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";


const Recommend13Recognition = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { childAge } = route.params || {}; 
  
  const [isBackgroundVisible1, setBackgroundVisible1] = useState(false);
  const [isBackgroundVisible2, setBackgroundVisible2] = useState(false);
  const [isBackgroundVisible3, setBackgroundVisible3] = useState(false);
  const [isBackgroundVisible4, setBackgroundVisible4] = useState(false);

   const toggleBackground1 = () => {
    setBackgroundVisible1(!isBackgroundVisible1);
  };
  const toggleBackground2 = () => {
    setBackgroundVisible2(!isBackgroundVisible2);
  };

  const toggleBackground3 = () => {
    setBackgroundVisible3(!isBackgroundVisible3);
  };
  const toggleBackground4 = () => {
    setBackgroundVisible4(!isBackgroundVisible4);
  };
  return (

    <View style={styles.recommend13recognition}>
          <Pressable
    onPress={() => navigation.navigate("Main")}
  >
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.sortLeftIcon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </View>
      </Pressable>
      <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>


      <Pressable
      style={[
        styles.rectangleParent,
        styles.rectangleGroupLayout,
      ]}
      onPress={toggleBackground1}
    >
      <View style={[styles.groupItem, styles.groupChildBorder,  { backgroundColor: isBackgroundVisible1 ? '#FFC045' : 'transparent' }]} />
        <Text style={styles.payAttentionTo}>
          Pay attention to other people's faces
        </Text>
      </Pressable>

      <Text style={[styles.category, styles.homeFlexBox]}>Category</Text>
      <Text style={[styles.recognitionDevelopment, styles.homeFlexBox]}>
        Recognition Development
      </Text>


      <Pressable 
      style={[
        styles.rectangleGroup,
        styles.rectangleGroupLayout,
      ]}
      onPress={toggleBackground2}
    >
      <View style={[styles.groupInner, styles.groupChildBorder ,  { backgroundColor: isBackgroundVisible2 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.canStartFollowing, styles.ifActivitiesDoTypo]}
        >{`Can start following things with his or her eyes
 and recognize people from a distance`}</Text>
      </Pressable>

      
      <Pressable
      style={[
        styles.rectangleContainer,
        styles.rectangleGroupLayout,
      ]}
      onPress={toggleBackground3}
    >
      <View style={[styles.rectangleView, styles.groupChildBorder ,  { backgroundColor: isBackgroundVisible3 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.ifActivitiesDo, styles.ifActivitiesDoTypo]}
        >{`If activities do not change, reactions such as
 crying because they are bored may appear`}</Text>
      </Pressable>


      <Pressable 
style={[
  styles.groupPressable,
  styles.rectangleGroupLayout,
]}
onPress={toggleBackground4}
>
<View style={[styles.groupChild1, styles.groupChildBorder ,  { backgroundColor: isBackgroundVisible4 ? '#FFC045' : 'transparent' }]} />
        <Text
          style={[styles.throughAccidentalActions, styles.ifActivitiesDoTypo]}
        >{`Through accidental actions,
 experience new experiences and repeat them`}</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Movement")}
      >
        <Pressable
          style={[styles.rectanglePressable, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.acrobaticsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/acrobatics.png")}
        />
        <Text style={[styles.motion, styles.senseTypo]}>Motion</Text>
      </Pressable>


      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentLayout]}
      >
        <View style={[styles.groupChild2, styles.groupChildShadowBox, {backgroundColor: '#1F1F45'}]} />
        <Image
          style={[styles.bookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Text style={[styles.recognition, styles.senseTypo]}>Recognition</Text>
      </Pressable>

      
      <Pressable
        style={[styles.rectangleParent3, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Language")}
      >
        <Pressable
          style={[styles.groupChild3, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/voice.png")}
        />
        <Text style={[styles.speech, styles.senseTypo]}>Speech</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent4, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Emotion")}
      >
        <Pressable
          style={[styles.groupChild4, styles.groupChildShadowBox]}
        />
        <Image
          style={[styles.bookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/handmade.png")}
        />
        <Text style={[styles.emotion, styles.senseTypo]}>Emotion</Text>
      </Pressable>

      <Pressable
        style={[styles.rectangleParent5, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Recommend13Sense")}
      >
        <Pressable
          style={[styles.groupChild5, styles.groupChildShadowBox]}
        />
        <Text style={[styles.sense, styles.senseTypo]}>Sense</Text>
        <Image
          style={[styles.tongueOutIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/tongue-out.png")}
        />
      </Pressable>


      <View
        style={[styles.pleaseSelectAllOfTheItemsWrapper, styles.iconLayout]}
      >
        <Text
          style={[styles.pleaseSelectAll, styles.homeFlexBox]}
        >{`Please select all of the items below 
that correspond to your child's developmental status`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 30,
    position: "absolute",
  },
  homeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroupLayout: {
    height: 50,
    width: 300,
    left: 29,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  ifActivitiesDoTypo: {
    textAlign: "center",
    top: 9,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 80,
    width: 55,
    top: 126,
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 7,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_81xl,
    height: 80,
    width: 55,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    position: "absolute",
  },
  senseTypo: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_6xs,
    top: 52,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    left: 1,
    top: 0,
    height: 30,
  },
  sortLeftIcon: {
    left: 0,
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  ellipseParent: {
    top: 28,
    left: 17,
    width: 31,
    height: 30,
    position: "absolute",
  },
  home: {
    top: 34,
    left: 58,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 50,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  payAttentionTo: {
    top: 17,
    left: 44,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 274,
  },
  category: {
    top: 88,
    left: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  recognitionDevelopment: {
    top: 236,
    left: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  groupInner: {
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 50,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  canStartFollowing: {
    left: 8,
  },
  rectangleGroup: {
    top: 334,
  },
  rectangleView: {
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 50,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ifActivitiesDo: {
    left: 12,
  },
  rectangleContainer: {
    top: 394,
  },
  groupChild1: {
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    height: 50,
    width: 300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  throughAccidentalActions: {
    left: 6,
  },
  groupPressable: {
    top: 454,
  },
  rectanglePressable: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  acrobaticsIcon: {
    left: 13,
    top: 10,
    height: 40,
    width: 30,
  },
  motion: {
    left: 15,
  },
  rectangleParent1: {
    left: 30,
  },
  groupChild2: {
    backgroundColor: Color.colorDarkslateblue,
  },
  bookIcon: {
    top: 10,
    height: 40,
    width: 30,
    left: 12,
  },
  recognition: {
    left: 6,
  },
  rectangleParent2: {
    left: 91,
  },
  groupChild3: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  speech: {
    left: 14,
  },
  rectangleParent3: {
    left: 152,
  },
  groupChild4: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  emotion: {
    left: 13,
  },
  rectangleParent4: {
    left: 213,
  },
  groupChild5: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  sense: {
    left: 16,
  },
  tongueOutIcon: {
    top: 13,
    height: 35,
    left: 12,
  },
  rectangleParent5: {
    left: 274,
  },
  pleaseSelectAll: {
    left: 28,
    fontSize: FontSize.size_3xs,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorRosybrown,
    top: 0,
  },
  pleaseSelectAllOfTheItemsWrapper: {
    top: 743,
    width: 303,
    left: 13,
  },
  recommend13recognition: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Recommend13Recognition;
