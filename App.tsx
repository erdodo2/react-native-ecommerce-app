import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text, Image, StyleSheet
} from "react-native";

 import { useEffect, useState } from "react";

import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Cart from "./pages/Cart";
import Trend from "./pages/Trend";
import User from "./pages/User";
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const style = StyleSheet.create({
    image: {
      tintColor: isDarkMode ? 'white' : 'black',
    },
  });
  const [route, setRoute] = useState('home');
  return (
    <SafeAreaView
      className={
        isDarkMode ? 'bg-teal-900 h-full relative' : 'bg-teal-50 h-full relative'
      }>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">

          <View>
            {route === 'home' && <Home />}
            {route === 'favorite' && <Favorite />}
            {route === 'bag' && <Cart />}
            {route === 'trending' && <Trend />}
            {route === 'user' && <User />}

          </View>

      </ScrollView>
      <View className="bg-green-600/30 dark:bg-green-200/60 rounded-3xl p-3  mx-4 mb-2 flex flex-row items-center">
        <View className={`${route=='home'?' bg-green-50 dark:bg-green-900 ':''} basis-1/5 flex flex-row p-2 justify-center  rounded-full`}>
          <Pressable onPress={()=>setRoute('home')}>
            <Image source={require('./assets/home.png')} style={route=='home'?style.image:''} className="h-6 w-6" />
          </Pressable>
        </View>
        <View className={`${route=='favorite'?' bg-green-50 dark:bg-green-900 ':''} basis-1/5 flex flex-row p-2 justify-center  rounded-full`}>
          <Pressable onPress={()=>setRoute('favorite')}>
            <Image source={require('./assets/favorite.png')} style={route=='favorite'?style.image:''}  className="h-6 w-6" />
          </Pressable>
        </View>
        <View className={`${route=='bag'?' bg-green-50 dark:bg-green-900 ':''} basis-1/5 flex flex-row p-2 justify-center  rounded-full`}>
          <Pressable onPress={()=>setRoute('bag')}>
            <Image source={require('./assets/shopping-bag.png')} style={route=='bag'?style.image:''}  className="h-6 w-6" />
          </Pressable>
        </View>
        <View className={`${route=='trending'?' bg-green-50 dark:bg-green-900 ':''} basis-1/5 flex flex-row p-2 justify-center  rounded-full`}>
          <Pressable onPress={()=>setRoute('trending')}>
            <Image source={require('./assets/trending.png')}  style={route=='trending'?style.image:''} className="h-6 w-6" />
          </Pressable>
        </View>
        <View className={`${route=='user'?' bg-green-50 dark:bg-green-900 ':''} basis-1/5 flex flex-row p-2 justify-center  rounded-full`}>
          <Pressable  onPress={()=>setRoute('user')}>
            <Image source={require('./assets/user.png')}  style={route=='user'?style.image:''} className="h-6 w-6" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
