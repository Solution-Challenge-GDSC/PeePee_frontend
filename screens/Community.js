import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Community = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const url = `https://applemango.store/board/FREE_BOARD`;
      const config = {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDgzMTczOTcsImV4cCI6MTcwODkyMjE5N30.Rl-gOj2E5T-Gjp6YP_qnVxZ8cct0Kys9jrxf4YiidSk',
        },
      };
      const response = await axios.get(url, config);
      if (response.data.isSuccess) {
        setPosts(response.data.result);
      } else {
        console.error('Failed to fetch posts:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchPosts(); // 화면이 포커스될 때마다 게시글을 다시 가져옴
    }, [])
  );
 
  
  return (
    <View style={styles.community}>
      <Image
        style={[styles.communityChild, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.sortLeftIcon, styles.sortLeftIconLayout]}
        contentFit="cover"
        source={require("../assets/sort-left.png")}
      />
      <Text style={styles.home}>Home</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.text}>자유게시판</Text>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.text1}>소통게시판</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.groupPressablePosition]}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.text}>고민게시판</Text>
      </Pressable>

      <ScrollView
  style={[styles.lineParent, styles.frameChildPosition]}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.frameScrollViewContent}
>
  {posts.map((post, index) => (
    <>
      <Pressable 
        key={post.id} 
        style={[styles.parent, styles.groupParentLayout]}
        onPress={() => navigation.navigate('CommunityDetail', { boardId: post.boardId })}
      >
        <Text style={styles.text3}>{post.title || "제목 없음"}</Text>
        <Text style={styles.textTextText}>{post.content || "내용 없음"}</Text>
        <Text style={[styles.text4, styles.textTypo1]}>{post.createTime || "시간 정보 없음"}</Text>
        <Text style={[styles.text5, styles.text5Layout]}>{post.nickName || "익명"}</Text>
        
        <Text style={[styles.text6, styles.textTypo]}>{post.likeCount || 0}</Text>
        <Text style={[styles.text7, styles.textTypo]}>{post.commentCount || 0}</Text>
        {/* Icons */}
        <View style={[styles.lineView, styles.groupChildLayout]} />
        <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
        <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
      </Pressable>
      {/* 게시글 간 구분선 추가, 마지막 게시글에는 구분선을 추가하지 않음 */}
      {index < posts.length - 1 && (
        <View 
          style={{ height: 1, backgroundColor: '#E0E0E0', width: '100%', marginTop: 10, marginBottom: 10 }}
        />
      )}
    </>
  ))}
</ScrollView>




      <Pressable style={[styles.groupPressable, styles.groupPressablePosition]}>
        <View style={styles.rectangleView} />
        <Text style={styles.createNew}>Create New</Text>
        <Pressable
          style={[styles.quillPen, styles.text5Layout]}
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
  rectangleLayout: {
    width: 100,
    top: 88,
    height: 30,
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 1,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    left: 0,
    top: 0,
    width: 100,
    height: 30,
    position: "absolute",
  },
  groupPressablePosition: {
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
    width: 25,
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
  groupChildLayout: {
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
  groupChild: {
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  text: {
    left: 25,
    color: Color.colorGainsboro_100,
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
    backgroundColor: Color.colorGoldenrod_200,
    borderColor: Color.colorGoldenrod_200,
    borderWidth: 1,
    borderRadius: Border.br_xl,
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
  lineView: {
    left: 32,
  },
  groupChild1: {
    left: 67,
  },
  groupChild2: {
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
    left: 20
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
  frameInner2: {
    marginTop: 10,
  },
  frameLayout2: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
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
    borderStyle: "solid",
    top: 0,
    left: 0,
    width: 100,
    height: 30,
    position: "absolute",
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
  groupPressable: {
    left: 241,
    top: 44,
  },
  community: {
    height: 986,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Community;
