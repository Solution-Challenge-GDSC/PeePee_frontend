import React, { useState, useEffect } from "react";
import { Image, Alert } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import axios from "axios";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const CommunityDetail = ({ route }) => {
  const navigation = useNavigation();
  const { boardId } = route.params;
  console.log("Board ID:", boardId);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDg5MDA2MzksImV4cCI6MTcwOTUwNTQzOX0.wY8J5ib9neNi-cn4sFODWe-bwHlMtaWmjwkw9KtRf5E';

  
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDg5MDA2MzksImV4cCI6MTcwOTUwNTQzOX0.wY8J5ib9neNi-cn4sFODWe-bwHlMtaWmjwkw9KtRf5E'; // 여기에 액세스 토큰을 추가하세요
      const response = await axios.get(`https://applemango.store/comment/${boardId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
      if (response.data.isSuccess) {
        setComments(response.data.result);
        console.log("Comments:", response.data.result); // 댓글 내용 로그로 출력
      } else {
        console.error("Failed to fetch comments:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  

  const handleLike = async () => {
    try {
      const response = await fetch(`https://applemango.store/board/${boardId}/like`, {
        method: liked ? "DELETE" : "POST",
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDg5MDA2MzksImV4cCI6MTcwOTUwNTQzOX0.wY8J5ib9neNi-cn4sFODWe-bwHlMtaWmjwkw9KtRf5E` },
      });
      if (response.ok) {
        setLiked(!liked);
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch error
    }
  };


  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {

      const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDgzMTczOTcsImV4cCI6MTcwODkyMjE5N30.Rl-gOj2E5T-Gjp6YP_qnVxZ8cct0Kys9jrxf4YiidSk';

      try {
        const response = await axios.get(`https://applemango.store/board/one/${boardId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });

        console.log("Request URL:", `https://applemango.store/board/one/${boardId}`); // 요청 URL 확인

        if (response.data.isSuccess) {
          setPostDetails(response.data.result);
          console.log("Post Details:", response.data.result);
        } else {
          console.error("Failed to fetch post details:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetails();
  }, [boardId]);



const handleComment = async () => {
    try {
      const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbGVxa2xzNjIwNEBuYXZlci5jb20iLCJpYXQiOjE3MDg5MDA2MzksImV4cCI6MTcwOTUwNTQzOX0.wY8J5ib9neNi-cn4sFODWe-bwHlMtaWmjwkw9KtRf5E';
  
      const response = await fetch(`https://applemango.store/comment/${boardId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ content: comment }),
      });
      
      if (response.ok) {
        console.log("Comment posted successfully");
        // Clear the comment input field after posting
        setComment("");
  
        // 댓글이 성공적으로 작성되면 댓글 목록을 다시 가져와서 화면에 반영합니다.
        fetchComments();
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  const handleDeleteComment = async (commentId) => {
    Alert.alert("Delete Comment", "Are you sure you want to delete this comment?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          console.log("Request URL:", `https://applemango.store/comment/${commentId}`); // 요청 URL 확인
          try {
            const response = await axios.delete(`https://applemango.store/comment/${commentId}`, {
              headers: { Authorization: `Bearer ${accessToken}` },
            });
            if (response.data.isSuccess) {
              console.log("Comment deleted successfully");
              // 댓글이 성공적으로 삭제되면 화면을 갱신합니다.
              fetchComments();
            } else {
              console.error("Failed to delete comment:", response.data.message);
              // 실패했을 때의 처리를 여기에 작성하세요
            }
          } catch (error) {
            console.error("Error deleting comment:", error);
            // 에러 발생 시 처리를 여기에 작성하세요
          }
        },
        style: "destructive",
      },
    ]);
  };

  const handleDeletePost = async (boardId) => {
    Alert.alert("Delete Post", "Are you sure you want to delete this post?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          console.log("Board ID 확인:", boardId);
          deletePost(boardId);
        },
        style: "destructive",
      },
    ]);
  };
  
  const deletePost = async (boardId) => {
    console.log("Request URL:", `https://applemango.store/board/${boardId}`); // 요청 URL 확인
  
    try {
      const response = await axios.delete(`https://applemango.store/board/${boardId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      if (response.data.isSuccess) {
        console.log("Post deleted successfully");
        // 추가적으로 필요한 로직을 여기에 작성하세요
        navigation.navigate('Community');
      } else {
        // 실패했을 때의 처리를 여기에 작성하세요
        console.error("Failed to delete post:", response.data.message);
        // 무조건 삭제하도록 하기 위해 실패 시에도 네비게이션을 호출합니다.
        navigation.navigate('Community');
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      // 에러 발생 시 처리를 여기에 작성하세요
    }
  };
  
  


  return (
    <View style={styles.communitydetail}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.sortLeftIcon}
          contentFit="cover"
          source={require("../assets/sort-left.png")}
        />
      </View>
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />

        
{postDetails && (
      <>
        <Text style={[styles.text, styles.textTypo5]}>{postDetails.nickName}</Text>
        <Text style={[styles.text1, styles.textTypo4]}>{postDetails.title}</Text>
        <Text style={[styles.text2, styles.textTypo3]}>{postDetails.createDate} </Text>
        <Text style={[styles.textTextText, styles.textTypo2]}>{postDetails.content}</Text>
        <View style={[styles.parent, styles.groupPosition]}>
          <Text style={[styles.text3, styles.textTypo1]}>{postDetails.likeCount}</Text>


          <Pressable onPress={handleLike}>
        <Image
          style={styles.thumbsUpIcon}
          contentFit="cover"
          source={require("../assets/thumbs-up.png")}
        />
      </Pressable>


        </View>
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.text4, styles.textTypo1]}>{postDetails.commentCount}</Text>
          <Image
            style={styles.thumbsUpIcon}
            contentFit="cover"
            source={require("../assets/speech.png")}
          />
        </View>
        <Pressable style={styles.rectangleGroup} onPress={() => handleDeletePost(boardId)}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Image
          style={[styles.bellIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bell.png")}
        />
      </Pressable>
      </>
    )}
  </View>

      <View style={[styles.communitydetailChild, styles.groupLayout]} />


      <TextInput
        style={[styles.writeText, styles.textTypo]}
        placeholder="Write Text ..."
        multiline={true}
        placeholderTextColor="#9e9e9e"
        value={comment}
        onChangeText={setComment}
      />
      <Pressable style={[styles.groupParent, styles.rectangleLayout]} onPress={handleComment}>
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
        </View>
        <Image
          style={[styles.image74Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-74.png")}
        />
      </Pressable>


      <Text style={[styles.text5, styles.textTypo]}>소통게시판</Text>


      <ScrollView
  style={styles.lineParent}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.frameScrollViewContent}
>
  {comments.map(comment => (
    <View key={comment.commentId} style={styles.groupContainer}>
      <View style={styles.rectangleContainer}>
        <Image
          style={[styles.rectangleIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-86.png")}
        />
        <Text style={[styles.text6, styles.textTypo]}>{comment.nickName}</Text>

        <Pressable style={styles.rectangleGroup2} onPress={() => handleDeleteComment(comment.commentId)}>
        <View style={[styles.groupInner2, styles.groupLayout2]} />
        <Image
          style={[styles.bellIcon2, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/bell.png")}
        />
      </Pressable>

      </View>
      <Text style={[styles.textTextText1, styles.textTypo2]}>{comment.content}</Text>
      <Text style={styles.textTypo3}>{comment.createdDate}</Text>
      <View style={[styles.frameInner, styles.frameLayout]} />
    </View>
    
  ))}
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
  groupLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupLayout2: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textTypo5: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo4: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    lineHeight: 20,
  },
  textTypo3: {
    color: Color.colorGainsboro,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    width: 77,
    textAlign: "left",
    lineHeight: 20,
  },
  textTypo2: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 15,
    width: 319,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
  },
  groupPosition: {
    top: 148,
    height: 20,
    position: "absolute",
  },
  textTypo1: {
    width: 14,
    color: Color.colorGray,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    lineHeight: 20,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 5,
    position: "absolute",
  },
  iconPosition2: {
    left: 5,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleLayout: {
    width: 35,
    height: 30,
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  groupChild: {
    left: 1,
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  sortLeftIcon: {
    left: 0,
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  ellipseParent: {
    top: 38,
    height: 30,
    width: 31,
    left: 17,
    position: "absolute",
  },
  groupItem: {
    width: 40,
    height: 40,
    left: 0,
    top: 0,
  },
  text: {
    width: 77,
    color: Color.colorBlack,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    left: 60,
    top: 0,
  },
  text1: {
    top: 61,
    letterSpacing: 0.2,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
    fontSize: FontSize.size_mini,
    width: 320,
    left: 0,
  },
  text2: {
    top: 20,
    left: 60,
    color: Color.colorGainsboro,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTextText: {
    top: 91,
    width: 319,
    left: 0,
    position: "absolute",
  },
  text3: {
    left: 17,
  },
  thumbsUpIcon: {
    width: 13,
    height: 13,
    top: 5,
    left: 0,
    position: "absolute",
  },
  parent: {
    height: 20,
    left: 0,
    width: 31,
  },
  text4: {
    left: 16,
  },
  group: {
    left: 45,
    height: 20,
    width: 30,
  },
  groupInner: {
    backgroundColor: "#f3f3f3",
    left: 0,
    width: 27,
    top: 0,
    height: 27,
  },
  groupInner2: {
    backgroundColor: "#f3f3f3",
    left: 0,
    width: 23,
    top: 0,
    height: 23,
  },
  bellIcon: {
    width: 16,
    top: 5,
    height: 16,
  },
  bellIcon2: {
    width: 13,
    top: 5,
    height: 13,
  },
  rectangleGroup: {
    left: 289,
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  rectangleGroup2: {
    left: 270,
    width: 20,
    top: 0,
    height: 30,
    position: "absolute",
  },
  rectangleParent: {
    top: 88,
    left: 18,
    height: 168,
    width: 320,
    position: "absolute",
  },
  communitydetailChild: {
    top: 750,
    left: 9,
    backgroundColor: "#ccc",
    width: 343,
    height: 41,
  },
  writeText: {
    top: 761,
    left: 21,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
  },
  rectangleView: {
    borderRadius: 10,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  image74Icon: {
    top: 4,
    width: 24,
    height: 23,
  },
  groupParent: {
    top: 755,
    left: 310,
  },
  text5: {
    top: 43,
    left: 142,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    lineHeight: 20,
    width: 77,
  },
  rectangleIcon: {
    width: 25,
    height: 25,
    left: 0,
    top: 0,
  },
  text6: {
    left: 35,
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    width: 77,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 20,
    top: 0,
  },
  rectangleContainer: {
    width: 112,
    height: 25,
  },
  textTextText1: {
    width: 319,
  },
  frameItem: {
    borderRightWidth: 1,
    width: 1,
    height: 11,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  groupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    paddingHorizontal: 15, // 왼쪽 여백 추가
    width: 319,
  },
  frameInner: {
    marginTop: 10,
  },
  lineParent: {
    top: 268,
    left: 0,
    position: "absolute",
    flex: 1,
  },
  communitydetail: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default CommunityDetail;
