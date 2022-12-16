import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ProductDetail from "../components/products/ProductDetail";
function ProductDetailScreen({ navigation, route }) {
  const productId = route.params.productId;

  const AllData = useSelector((state) => state.productBank.AllProductsData);
  return (
    <View style={styles.container}>
      <ProductDetail allData={AllData} productId={productId} />
    </View>
  );
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
