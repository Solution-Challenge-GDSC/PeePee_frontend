import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image , Pressable} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Community = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
          console.log(response.data.result); // 로그로 결과 확인
        } else {
          console.error('Failed to fetch posts:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // 첫 번째 게시글 정보 확인 및 기본값 할당
  const firstPost = posts[0] || {};
  const secondPost = posts[1] || {};
  const thirdPost = posts[2] || {};
  const fourthPost = posts[3] || {};
  const fifthPost = posts[4] || {};
  const sixthPost = posts[5] || {};
  const seventhPost = posts[6] || {};
  const eighthPost = posts[7] || {};
  const ninthPost = posts[8] || {};
  const tenthPost = posts[9] || {};
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
        <View style={[styles.frameChild, styles.frameChildLayout]} />


        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{firstPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{firstPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{firstPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{firstPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{firstPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{firstPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>
        
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{secondPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{secondPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{secondPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{secondPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{secondPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{secondPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>


        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{thirdPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{thirdPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{thirdPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{thirdPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{thirdPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{thirdPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>

        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{fourthPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{fourthPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{fourthPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{fourthPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{fourthPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{fourthPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>


        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{fifthPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{fifthPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{fifthPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{fifthPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{fifthPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{fifthPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>

        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{sixthPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{sixthPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{sixthPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{sixthPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{sixthPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{sixthPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>

        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{seventhPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{seventhPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{seventhPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{seventhPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{seventhPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{seventhPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>

        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{eighthPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{eighthPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{eighthPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{eighthPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{eighthPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{eighthPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>

        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{ninthPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{ninthPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{ninthPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{ninthPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{ninthPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{ninthPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
        </View>

        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.parent, styles.groupParentLayout]}>
          <Text style={styles.text3}>{tenthPost.title || "제목 없음"}</Text>
          <Text style={styles.textTextText}>{tenthPost.content || "내용 없음"}</Text>
          <Text style={[styles.text4, styles.textTypo1]}>{tenthPost.createTime || "시간 정보 없음"}</Text>
          <Text style={[styles.text5, styles.text5Layout]}>{tenthPost.nickName || "익명"}</Text>
          <Text style={[styles.text6, styles.textTypo]}>{tenthPost.likeCount || 0}</Text>
          <Text style={[styles.text7, styles.textTypo]}>{tenthPost.commentCount || 0}</Text>
          {/* 아이콘 출력 */}
          <View style={[styles.lineView, styles.groupChildLayout]} />
          <Image style={[styles.thumbsUpIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/thumbs-up.png")} />
          <Image style={[styles.speechIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/speech.png")} />
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
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
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




      <Pressable style={[styles.groupPressable, styles.groupPressablePosition]}>
        <View style={styles.rectangleView} />
        <Text style={styles.createNew}>Create New</Text>
        <Pressable
          style={[styles.quillPen, styles.text5Layout]}
          onPress={() => navigation.navigate("CommunityWrite")}
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
