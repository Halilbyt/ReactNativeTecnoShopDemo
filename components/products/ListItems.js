import { View, StyleSheet, Text, Pressable, Image } from "react-native";

function ListItems({ onPress, title, imgUrl, price }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressible}
        onPress={onPress}
        android_ripple={{ color: "#f90" }}
      >
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: imgUrl }} />
        </View>
        <View style={styles.textArea}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textPrice}>{price}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default ListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 9,
    padding: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    elevation: 6,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  pressible: {
    borderRadius: 5,
    padding: 2,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "stretch",
  },
  imgContainer: {
    padding: 10,
  },
  textArea: {
    flexDirection: "column",
    padding: 8,
    paddingHorizontal: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textPrice: {
    marginTop: 6,
    color: "#f90",
    fontSize: 16,
  },
});
