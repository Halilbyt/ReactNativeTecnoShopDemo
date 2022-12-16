import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ children, onPress, icon, color }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        {children}
        <Ionicons name={icon} size={30} color={color} />
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: { paddingRight: 50 },
  pressed: {
    opacity: 0.75,
  },
});
