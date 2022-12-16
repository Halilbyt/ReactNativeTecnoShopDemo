import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import { removeCart } from "../../store/SlicerCart";

function Cart({ cartDataRender }) {
  const CartProductId = useSelector(
    (state) => state.productCart.productsInCart
  );
  const dispatch = useDispatch();

  console.log(CartProductId);

  const dataPrice = cartDataRender.map((data) => {
    return parseFloat(data.price.split("$")[1].replace(",", ""));
  });

  const summary = dataPrice.reduce((total, num) => {
    return total + num;
  });

  function renderListItemHandler(dataItem) {
    function removeItemHandler() {
      dispatch(removeCart({ itemId: dataItem.item.id }));
    }

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.imgArea}>
            <Image style={styles.img} source={{ uri: dataItem.item.imgUrl }} />
          </View>
          <View style={styles.textArea}>
            <Text style={styles.inner}>{dataItem.item.title}</Text>
            <Text style={styles.inner2}>{dataItem.item.description}</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.inner3}>{dataItem.item.price}</Text>
          </View>
          <View style={styles.buttonArea}>
            <Button onPress={removeItemHandler}>Remove</Button>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={cartDataRender}
        keyExtractor={(item) => item.id}
        renderItem={renderListItemHandler}
      />
      <View style={styles.sum}>
        <Text style={styles.label}>Summary</Text>
        <Text style={styles.price2}>$ {summary.toFixed(2)}</Text>
      </View>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 5,
    margin: 12,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
  },
  inner: {
    paddingHorizontal: 6,
    color: "#f90",
  },
  textArea: {
    width: "40%",
    paddingLeft: 6,
  },
  imgArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 130,
    height: 100,
    resizeMode: "stretch",
  },
  inner2: {
    justifyContent: "center",
    paddingHorizontal: 6,
    marginTop: 5,
  },
  price: {
    justifyContent: "center",
  },
  inner3: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f90",
    paddingHorizontal: 6,
  },
  buttonArea: {
    justifyContent: "center",
  },
  sum: {
    backgroundColor: "#f1f1f1",
    padding: 5,
    marginHorizontal: 12,
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    paddingBottom: 5,
  },
  price2: {
    fontSize: 20,
    color: "#f80",
    fontWeight: "900",
  },
});
