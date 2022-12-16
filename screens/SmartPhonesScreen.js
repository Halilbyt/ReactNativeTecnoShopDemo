import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import ListItems from "../components/products/ListItems";
import IconButton from "../components/UI/IconButton";

function SmartPhonesScreen() {
  const navigation = useNavigation();

  const DataContainer = useSelector(
    (state) => state.productBank.AllProductsData
  );

  const DataComputers = DataContainer.filter((data) => {
    return data.catId === "phone";
  });

  function headerButtonHandler() {
    navigation.navigate("ChartScreen");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"cart-sharp"}
            color={"#f5f134"}
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  function flatListRenderHandler(itemData) {
    function onPressHandler() {
      navigation.navigate("ProductDetailScreen", {
        productId: itemData.item.id,
      });
    }

    return (
      <ListItems
        title={itemData.item.title}
        imgUrl={itemData.item.imgUrl}
        price={itemData.item.price}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={DataComputers}
      keyExtractor={(item) => item.id}
      renderItem={flatListRenderHandler}
      numColumns={2}
    />
  );
}
export default SmartPhonesScreen;
