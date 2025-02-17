import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { Product } from "../store/productsSlice";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const renderItem = ({ item }: { item: Product }) => (
    <View className="w-[48%] mb-8">
      <Image
        source={require("../../assets/roll.jpg")}
        className="w-full h-48 rounded-xl"
        resizeMode="cover"
      />
      <View className="mt-2">
        <View className="flex-row items-center gap-2">
          <Text className="text-sm font-medium text-white">{item.name}</Text>
          <Text className="text-gray-400">{item.weight} г</Text>
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-xs text-gray-400 mt-1"
        >
          {item.ingredients}
        </Text>
        <Pressable className="mt-3 bg-neutral-600 rounded-2xl py-2 px-3 flex-row items-center self-start gap-2">
          <Text className="text-white font-normal">{item.price} ₽</Text>
          <ArrowRightIcon size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar backgroundColor="#111827" barStyle="light-content" />
      <View className="flex-1 bg-neutral-800 p-4">
        <Text className="text-2xl font-bold mb-4 text-white">Роллы</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
