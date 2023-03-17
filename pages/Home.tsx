import {
  View,
  Text,
  Image,
  useColorScheme,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import {useEffect, useState} from 'react';
import product from '../mock/product.json';
import user from '../mock/users.json';
export default function Home(): JSX.Element {
  const [products, setProducts] = useState(product);
  const [users, setUsers] = useState(user);
  const isDarkMode = useColorScheme() === 'dark';
  const [showDetail, setShowDetail] = useState({});

  const style = StyleSheet.create({
    image: {
      tintColor: isDarkMode ? 'white' : 'black',
    },
  });

  return (
    <View className="flex flex-col p-5">
      <View className="flex flex-row w-full px-3 justify-between ">
        <Text className="text-4xl font-thin whitespace-pre dark:text-white mr-4">
          Search for the product you want
        </Text>
        <View className="border-2 border-green-900 dark:border-green-200  flex flex-row p-2 rounded-3xl items-center">
          <Image
            source={require('../assets/search.png')}
            style={style.image}
            className="h-[30] w-[30]"
          />
        </View>
      </View>
      <View className="flex flex-row w-full justify-between mt-10 relative">
        <Image
          source={require('../assets/background.jpg')}
          className="h-[120] w-full absolute rounded-2xl"
        />
        <View className="flex flex-col p-3 h-[120] px-6 justify-center">
          <Text className="text-2xl ">30% OFF</Text>
          <Text className="text-xl font-[300]">02-23 July</Text>
        </View>
        <Image
          source={require('../assets/product-2.png')}
          className="h-[200] w-[200] absolute right-1 -top-10"
        />
      </View>


      <ScrollView horizontal={true} className="mt-10">
        <View className="flex flex-row w-full justify-between">
          <View className="border-2 bg-green-100 dark:bg-green-700 border-green-900 dark:border-green-500 rounded-3xl py-2 px-5 mr-3">
            <Text className="text-2xl font-thin dark:text-white ">All</Text>
          </View>
          <View className="border border-green-900 dark:border-green-200 rounded-3xl py-2 px-5 mr-3">
            <Text className="text-2xl font-thin dark:text-white ">New</Text>
          </View>
          <View className="border border-green-900 dark:border-green-200 rounded-3xl py-2 px-5 mr-3">
            <Text className="text-2xl font-thin dark:text-white ">Popular</Text>
          </View>
          <View className="border border-green-900 dark:border-green-200 rounded-3xl py-2 px-5 mr-3">
            <Text className="text-2xl font-thin dark:text-white ">Sale</Text>
          </View>
          <View className="border border-green-900 dark:border-green-200 rounded-3xl py-2 px-5 mr-3">
            <Text className="text-2xl font-thin dark:text-white ">
              Best Seller
            </Text>
          </View>
        </View>
      </ScrollView>


      <View className="mt-4">
        <View className="flex flex-row w-full justify-end">
          <Text className="text-xl font-thin dark:text-white ">View all</Text>
        </View>
        <ScrollView horizontal={true}>
          <View className="flex flex-row flex-wrap ">
            {!!products &&
              products.slice(0,5).map(product => (
                <View className="flex flex-col basis-1/2 p-1  relative justify-between mt-3">
                  <View className="absolute z-10 bg-green-900/60 right-0 mt-4 mr-5 p-2 rounded-3xl">
                    <Text className=" text-white  text-xl">${product.price}.00</Text>
                  </View>
                  <Image
                    source={{uri: product.images[0]}}
                    className="h-[350] w-[240] rounded-3xl z-0"
                    resizeMode="cover"
                  />
                  <Image
                    source={require('../assets/transparent-to-black.png')}
                    className="h-[350] w-full rounded-3xl z-0 absolute top-1.5 left-1 opacity-60"
                    resizeMode="cover"
                  />
                  <View className="flex w-full flex-col justify-between absolute bottom-0 left-1 rounded-b-3xl right-0 p-3">
                    <View className="flex flex-col ">
                      <Text className="text-xl font-[300] text-white ">
                        {product.title}
                      </Text>
                      <View className="bg-white/80 rounded-3xl p-2 flex justify-center flex-row">
                        <Text className=" font-[400] text-green-900 ">
                          Add to cart
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>



      <View className="flex flex-row w-full justify-between my-14 relative">
        <Image
          source={require('../assets/background-2.jpg')}
          className="h-[120] w-full absolute rounded-2xl"
        />
        <View className="flex flex-col p-3 h-[120] px-6 justify-center">
          <Text className="text-2xl text-white">Favorite</Text>
          <Text className="text-xl font-[300] text-white">16-30 July</Text>
        </View>
        <Image
          source={require('../assets/product-1.png')}
          className="h-[170] w-[190] absolute right-1 -top-6"
        />
      </View>

      <View>
        <View className="flex flex-row w-full justify-between my-2">
          <Text className="text-xl  dark:text-white ">Comments</Text>
          <Text className="text-xl font-thin dark:text-white ">View all</Text>
        </View>
        <ScrollView horizontal={true}>
          {!!users && users.map(user => (
            <View className="flex flex-col mr-2  rounded-3xl relative justify-between">
              <View className="absolute z-10 m-2 p-2 ">
                <Text className="text-white  font-[400]">{user.name} {user.role}</Text></View>
              <Image
                source={{uri: user.avatar}}
                className="h-[220] w-[150] rounded-3xl z-0"
                resizeMode="cover"
              />
              <Image
                source={require('../assets/black-white-black.png')}
                className="h-[220] w-full rounded-3xl z-0 absolute  opacity-40"
                resizeMode="cover"
              />
              <Image source={require('../assets/play.png')} className="h-[30] w-[30] absolute top-[100] left-[60]" />
            </View>
          )
          )}
        </ScrollView>
      </View>
    </View>
  );
}
