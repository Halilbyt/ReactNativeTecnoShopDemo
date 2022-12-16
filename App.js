import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ComputersScreen from "./screens/ComputersScreen";
import SmartPhonesScreen from "./screens/SmartPhonesScreen";
import TabletsScreen from "./screens/TabletsScreen";
import { Provider } from "react-redux";
import Store from "./store/Store";
import MainScreen from "./screens/MainScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ChartScreen from "./screens/ChartScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// function DrawerNavigationHandler() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name="ComputerProducts"
//         options={{ title: "Tablet" }}
//         component={ComputersScreen}
//       />
//       <Drawer.Screen
//         name="PhonesProducts"
//         options={{ title: "Tablet" }}
//         component={SmartPhonesScreen}
//       />
//       <Drawer.Screen
//         name="TabletProducts"
//         options={{ title: "Tablet" }}
//         component={TabletsScreen}
//       />
//     </Drawer.Navigator>
//   );
// }

function TabBottomNavigationHandler() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#2B3A55" },
        headerTintColor: "#E8C4C4",
        tabBarStyle: { backgroundColor: "#2B3A55" },
        tabBarActiveTintColor: "#2ff",
      })}
    >
      <Tab.Screen
        name="MainScreen"
        options={{
          title: "All Products",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="devices"
                size={size}
                color={color}
              />
            );
          },
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name="Computers"
        component={ComputersScreen}
        options={{
          title: "Computer",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="computer" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Phones"
        title="Phone"
        component={SmartPhonesScreen}
        options={{
          title: "Phones",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="phone-android" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tablets"
        title="Tablet"
        component={TabletsScreen}
        options={{
          title: "Tablets",
          tabBarIcon: ({ color, size }) => {
            return <Fontisto name="tablet-alt" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#2B3A55" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#94CC" },
            }}
          >
            <Stack.Screen
              name="BottomTabs"
              component={TabBottomNavigationHandler}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MainScreen"
              options={{ title: "Products" }}
              component={MainScreen}
              header
            />
            <Stack.Screen
              name="ProductDetailScreen"
              options={{ title: "Product Details" }}
              component={ProductDetailScreen}
            />

            <Stack.Screen
              name="ChartScreen"
              options={{ title: "Chart" }}
              component={ChartScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

/*
adding button on drawer navigation:

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={({navigation}) => ({
      title: "Home",
      headerStyle: {
        backgroundColor: "rgb(0, 145, 234)",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "white",
      },
      headerLeft: () => (
          <Ionicons
            name={'md-menu'}
            size={24}
            style={{ marginLeft: 10 }}
            onPress={() =>
              navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
        ),
    })} />
  </Stack.Navigator>
);


*/
