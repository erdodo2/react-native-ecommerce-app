import { Image, ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";
import { useState } from "react";
import product from "../mock/product.json";
export default function Favorite(): JSX.Element {
  const [products, setProducts] = useState(product);
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create({
    image: {
      tintColor: isDarkMode ? 'white' : 'black',
    },
  });
  return (
    <View className="flex flex-col p-5 w-full">
      <View className="flex flex-row  justify-between ">
        <Text className="text-4xl font-thin whitespace-pre dark:text-white mr-1">
          Search your favorite products
        </Text>
        <View className="border-2 border-green-900 dark:border-green-200  flex flex-row p-2 rounded-3xl items-center">
          <Image
            source={require('../assets/search.png')}
            style={style.image}
            className="h-[30] w-[30]"
          />
        </View>
      </View>

      <View className="mt-4">
        <ScrollView horizontal={false}>
          <View className="flex flex-row flex-wrap ">
            {!!products &&
              products.slice(5,10).map(product => (
                <View className="flex flex-row w-full p-1 mt-3 border-b pb-2 border-green-900/50 dark:border-green-100/50">
                  <Image
                    source={{uri: product.images[0]}}
                    className="h-[100] w-[100] rounded-3xl z-0"
                    resizeMode="cover"
                  />
                  <View className="whitespace-pre p-3 w-[240]">
                    <Text className="dark:text-white font-bold">{product.title}</Text>
                    <Text className="dark:text-white font-thin text-2xl text-ellipsis overflow-hidden">${product.price}.00</Text>
                    <View className="flex flex-row">
                      <View className="bg-green-700 py-0.5 rounded-3xl px-5">
                        <Text className="dark:text-green-900 text-white  text-xl text-ellipsis overflow-hidden">Add to cart</Text>
                      </View>
                    </View>
                  </View>

                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
