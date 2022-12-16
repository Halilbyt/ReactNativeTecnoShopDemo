import Cart from "../components/products/Cart";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
function ChartScreen() {
  const CartProductId = useSelector(
    (state) => state.productCart.productsInCart
  );
  const DataContainer = useSelector(
    (state) => state.productBank.AllProductsData
  );

  const CartData = DataContainer.filter((data) => {
    if (CartProductId.includes(data.id)) {
      return data;
    }
  });

  if (CartData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>There is no product in basket</Text>
      </View>
    );
  }

  return <Cart cartDataRender={CartData} />;
}

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "50%",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
    padding: 12,
    backgroundColor: "#2B3467",
    borderRadius: 15,
  },
});
