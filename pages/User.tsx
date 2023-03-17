import {View, Text, Image} from 'react-native';
export default function User() {
  return (
    <View className="flex flex-col h-full p-5 relative ">
      <Image
        source={require('../assets/background-3.jpg')}
        className="h-[200] w-full rounded-3xl mx-auto "
      />
      <View className="flex flex-row items-center justify-between z-10 absolute w-full h-[200] m-6 rounded-full">
        <Image
          source={{uri: 'https://avatars.githubusercontent.com/u/48126890?v=4'}}
          className="h-36 w-36 rounded-full mx-auto "
        />
      </View>

      <View className="flex flex-col  justify-center  w-full my-10">
        <Text className="text-2xl font-bold dark:text-white">Erdoğan Yeşil</Text>
        <Text className="text-xl font-bold dark:text-white">
          erdoganyesil3@gmail.com
        </Text>
        <Text className="text-sm mt-4 dark:text-white">
          Hi there I'm Erdoğan, working as a full stack developer
        </Text>
        <Text className="text-sm dark:text-white mt-2">
          ⻚ My other github account (I'm a student there) erdodo2
        </Text>
        <Text className="text-sm dark:text-white mt-2">
          🌱 I’m currently learning React and React Native
        </Text>
        <Text className="text-sm dark:text-white mt-2">
          👯 I am also working on the no_code_backend as a backend developer.
        </Text>
        <Text className="text-sm dark:text-white mt-2">
          👨‍💻 All of my projects are available at erdoganyesil.com.tr
        </Text>
      </View>
      <View className="flex flex-row flex-wrap">
        <View className="basis-2/4  bg-green-200 my-1 rounded-3xl p-2">
          <Text className="text-xl text-center">Orders</Text>
        </View>
        <View className="basis-2/4  bg-green-200 my-1 rounded-3xl p-2">
          <Text className="text-xl text-center">Comments</Text>
        </View>
        <View className="basis-2/4  bg-green-200 my-1 rounded-3xl p-2">
          <Text className="text-xl text-center">Fallowers</Text>
        </View>
        <View className="basis-2/4  bg-green-200 my-1 rounded-3xl p-2">
          <Text className="text-xl text-center">Settings</Text>
        </View>
      </View>
    </View>
  );
}
