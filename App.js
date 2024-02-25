const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogIn from "./screens/LogIn";
import Main from "./screens/Main";
import Recommend1 from "./screens/Recommend1";
import CommunityWrite from "./screens/CommunityWrite";
import Loding from "./screens/Loding";
import Loding1 from "./screens/Loding1";
import Loding2 from "./screens/Loding2";
import Loding3 from "./screens/Loding3";
import Loding4 from "./screens/Loding4";

import Community from "./screens/Community";
import CommunityDetail from "./screens/CommunityDetail";
import MeetUpIntromom from "./screens/MeetUpIntromom";
import MeetUpIntrowbaby from "./screens/MeetUpIntrowbaby";
import MeetUpCategory from "./screens/MeetUpCategory";
import MeetUpLocate from "./screens/MeetUpLocate";
import MeetUpDetail from "./screens/MeetUpDetail";
import Diary from "./screens/Diary";
import Diary1 from "./screens/Diary1";
import Diary2 from "./screens/Diary2";
import DiaryWrite from "./screens/DiaryWrite";
import MeetUpCreate from "./screens/MeetUpCreate";
import DiaryCalender from "./screens/DiaryCalender";
import Recommend13Movement from "./screens/Recommend13Movement";
import Recommend13Sense from "./screens/Recommend13Sense";
import Recommend13Emotion from "./screens/Recommend13Emotion";
import Recommend13Language from "./screens/Recommend13Language";
import Recommend13Recognition from "./screens/Recommend13Recognition";
import CurrentPoint from "./screens/CurrentPoint"; 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

    // 여기에 linking 설정을 추가합니다.
    const linking = {
      prefixes: ['exp://172.20.10.3:8081'], // 앱의 커스텀 스키마. 실제 값으로 대체하세요.
      config: {
        screens: {
          Main: 'Main', // 'yourapp://Main' URL을 통해 Main 스크린으로 이동합니다.
          // 나머지 스크린 경로도 여기에 추가할 수 있습니다.
        },
      },
    };
  

  return (
    <>
      <NavigationContainer linking={linking}>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recommend1"
              component={Recommend1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityWrite"
              component={CommunityWrite}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="MeetUpCategory"
              component={MeetUpCategory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MeetUpCreate"
              component={MeetUpCreate}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Loding"
              component={Loding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loding1"
              component={Loding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loding2"
              component={Loding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loding3"
              component={Loding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loding4"
              component={Loding4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Community"
              component={Community}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityDetail"
              component={CommunityDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MeetUpIntromom"
              component={MeetUpIntromom}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentPoint"
              component={CurrentPoint}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MeetUpIntrowbaby"
              component={MeetUpIntrowbaby}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MeetUpLocate"
              component={MeetUpLocate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MeetUpDetail"
              component={MeetUpDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Diary"
              component={Diary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Diary1"
              component={Diary1}
              options={{ headerShown: false }}
            />
                        <Stack.Screen
              name="Diary2"
              component={Diary2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DiaryWrite"
              component={DiaryWrite}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="DiaryCalender"
              component={DiaryCalender}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recommend13Movement"
              component={Recommend13Movement}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recommend13Sense"
              component={Recommend13Sense}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recommend13Emotion"
              component={Recommend13Emotion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recommend13Language"
              component={Recommend13Language}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recommend13Recognition"
              component={Recommend13Recognition}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
