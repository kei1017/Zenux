import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
  Icon
} from "react-native";
import styles from "../../styles/styles";
import { MainScreen } from "../../components";

const buttonBG = require("../../assets/images/img_button_bg.png");
const helloBG = require("../../assets/images/img_hello_bg.png");

class HelloScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: false
    };
  }

  static navigationOptions = {
    title: "Start",
    header: null
  };

  render() {
    const { waiting } = this.state;
    return (
      <MainScreen waiting={waiting}>
        <View style={styles.hello_wrapper}>
          <ImageBackground source={helloBG} style={styles.hello_bg} imageStyle={{ resizeMode: "stretch" }}>
            <Text style={styles.hello_title}>Hello, Avatar</Text>
            <Text style={styles.hello_text}>
              Create a new wallet or recover your wallet with recovery password
              or 12-word phrase.
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.recover_wrapper}>
          <TouchableOpacity style={styles.btn_restore} onPress={() => this.props.navigation.navigate("App")}>
            <Text style={styles.restore_txt}>Recover wallet</Text>
          </TouchableOpacity>
          <Text style={styles.or_txt}>or</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("App")}
        >
          <ImageBackground source={buttonBG} style={styles.btn_img} imageStyle={{ resizeMode: "stretch" }}>
            <Text style={styles.btn_text}>CREATE WALLET</Text>
          </ImageBackground>
        </TouchableOpacity>
      </MainScreen>
    );
  }
}

export default HelloScreen;
