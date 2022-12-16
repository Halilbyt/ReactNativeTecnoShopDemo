import { Children } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

function Button({ onPress, children }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={styles.button}
        android_ripple={{ color: "#3cc" }}
      >
        <View>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    margin: 12,
    overflow: "hidden",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f90",
    elevation: 5,
    paddingVertical: 7,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 16, color: "#fff", textAlign: "center", padding: 6 },
  pressed: {},
});
