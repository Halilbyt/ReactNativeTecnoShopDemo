import { FlatList, StyleSheet, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import ListItems from "../components/products/ListItems";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";

function MainScreen() {
  const DataContainer = useSelector(
    (state) => state.productBank.AllProductsData
  );

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

  const navigation = useNavigation();

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
      data={DataContainer}
      keyExtractor={(item) => item.id}
      renderItem={flatListRenderHandler}
      numColumns={2}
    />
  );
}

export default MainScreen;
