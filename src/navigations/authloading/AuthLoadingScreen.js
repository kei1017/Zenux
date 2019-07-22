import React from "react";
import { MainScreen } from "../../components";
import { ActivityIndicator, AsyncStorage } from "react-native";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <MainScreen>
        <ActivityIndicator size="large" />
      </MainScreen>
    );
  }
}

export default AuthLoadingScreen;
