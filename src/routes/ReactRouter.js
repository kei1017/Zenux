import React from "react";
import {
  AuthLoadingScreen,
  StartScreen,
  PhoneInputScreen,
  PhoneCodeScreen,
  PasscodeScreen,
  HelloScreen,
  AccountScreen,
  MarketScreen,
  ExchangeScreen,
  OrderScreen
} from "../navigations";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  StackNavigator,
  DrawerNavigator,
  SwitchNavigator,
  DrawerItems,
  DrawerView
} from "react-navigation";
import { TouchableOpacity, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const AuthRouter = StackNavigator(
  {
    Start: StartScreen,
    PhoneInput: PhoneInputScreen,
    PhoneCode: PhoneCodeScreen,
    Passcode: PasscodeScreen,
    Hello: HelloScreen
  },
  {
    initialRouteName: "Start",
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#FFF"
      },
      headerTintColor: "#909090",
      headerTitleStyle: {
        width: "100%"
      }
    })
  }
);

const AppTapRouter = createBottomTabNavigator(
  {
    Account: AccountScreen,
    Market: MarketScreen,
    Exchange: ExchangeScreen,
    Order: OrderScreen
  },
  {
    initialRouteName: "Account"
  }
);

const ReactRouter = SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthRouter,
    App: AppTapRouter
  },
  {
    initialRouteName: "AuthLoading",
    animationEnabled: false
  }
);
export default ReactRouter;
