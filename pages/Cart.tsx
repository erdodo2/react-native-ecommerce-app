import { Image, Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";
import { useState,useEffect } from "react";
import product from "../mock/product.json";
export default function Cart(): JSX.Element {
  const [products, setProducts] = useState(product);
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create({
    image: {
      tintColor: isDarkMode ? 'white' : 'black',
    },
  });
  useEffect(() => {
    product.map((item) => {
      item.count = 1;
    })
  }, [])
  return (
    <View className="flex flex-col p-5 w-full">
      <View className="flex flex-row  justify-between ">
        <Text className="text-4xl font-thin whitespace-pre dark:text-white mr-1">
          Your cart
        </Text>
      </View>

      <View className="mt-4">
        <ScrollView horizontal={false}>
          <View className="flex flex-row flex-wrap ">
            {!!products &&
              products.slice(10,14).map(product => (
                <View key={product.id} className="flex flex-row w-full p-1 mt-3 border-b pb-2 border-green-900/50 dark:border-green-100/50">
                  <Image
                    source={{uri: product.images[0]}}
                    className="h-[100] w-[100] rounded-3xl z-0"
                    resizeMode="cover"
                  />
                  <View className="whitespace-pre p-3 w-[240]">
                    <Text className="dark:text-white font-bold">{product.title}</Text>
                    <Text className="dark:text-white font-thin text-2xl text-ellipsis overflow-hidden">${product.price}.00</Text>
                    <View className="flex flex-row items-center">
                      <View className="flex flex-row">
                        <Pressable onPress={()=> [product.count++,setProducts(products)]}>
                          <View className="bg-green-600 flex justify-center flex-row rounded-l-3xl py-1 px-3 w-10">
                            <Text className="text-white  text-3xl ">-</Text>
                          </View>
                        </Pressable>
                        <View className="bg-green-700 flex justify-center items-center flex-row  py-1 px-3 w-10">
                          <Text className="text-white  text-xl ">{product.count}</Text>
                        </View>
                        <Pressable>
                          <View className="bg-green-600 flex justify-center flex-row rounded-r-3xl py-1 px-3 w-10">
                            <Text className="text-white  text-3xl ">+</Text>
                          </View>
                        </Pressable>
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
