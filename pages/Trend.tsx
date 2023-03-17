import { Image, ScrollView, Text, View } from "react-native";
import product from '../mock/product.json';
import { useEffect, useState } from "react";
export default function Trend():JSX.Element{
  const [products, setProducts] = useState(product);
  return (
    <View className="p-5">
      <View className="flex flex-row  justify-between ">
        <Text className="text-4xl font-thin whitespace-pre dark:text-white mr-1">
          Special trends for you
        </Text>
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
        <ScrollView horizontal={false}>
          <View className="flex flex-row flex-wrap ">
            {!!products &&
              products.map(product => (
                <View className="flex flex-col basis-1/2 p-1  relative justify-between mt-3">
                  <View className="absolute z-10 bg-green-900/60 right-0 mt-4 mr-5 p-2 rounded-3xl">
                    <Text className=" text-white  text-xl">${product.price}.00</Text>
                  </View>
                  <Image
                    source={{uri: product.images[0]}}
                    className="h-[350] w-full rounded-3xl z-0"
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
    </View>
  )
}
