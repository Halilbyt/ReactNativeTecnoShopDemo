import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Button from "../UI/Button";
import { addCart } from "../../store/SlicerCart";

function ProductDetail({ productId, allData }) {
  const selectedData = allData.find((data) => data.id === productId);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function onPressAddCartHandler() {
    dispatch(addCart({ itemId: selectedData.id }));

    navigation.goBack();
  }

  function onPressCancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.contextContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgArea} source={{ uri: selectedData.imgUrl }} />
        </View>
        <View>
          <Text style={styles.textHeader}>Product Detail</Text>
          <Text style={styles.title}>{selectedData.title}</Text>
          <Text style={styles.description}>{selectedData.description}</Text>

          <Text style={styles.price}>{selectedData.price}</Text>
        </View>
        <View>
          <Button onPress={onPressAddCartHandler}>Add Cart</Button>
          <Button onPress={onPressCancelHandler}>Cancel</Button>
        </View>
      </View>
    </View>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contextContainer: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#ccc",
    elevation: 6,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  textHeader: {
    fontSize: 18,
    color: "#f90",
    fontWeight: "bold",
    paddingBottom: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 4,
  },
  description: {
    fontSize: 16,
  },
  imgContainer: {
    margin: 1,
    padding: 24,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f90",
    textAlign: "center",
  },
  imgArea: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
});
