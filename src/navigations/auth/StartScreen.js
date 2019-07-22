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
import Swiper from "react-native-swiper";
import StartSliderContent from "../../components/StartSliderContent";

const buttonBG = require("../../assets/images/img_button_bg.png");

class StartScreen extends Component {
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
        <Swiper>
          <StartSliderContent />
          <StartSliderContent />
          <StartSliderContent />
        </Swiper>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("PhoneInput")}
        >
          <ImageBackground source={buttonBG} style={styles.btn_img} imageStyle={{ resizeMode: "stretch" }}>
            <Text style={styles.btn_text}>Continue</Text>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.restore_wrapper}>
          <Text style={styles.normal_txt}>or </Text>
          <TouchableOpacity
            style={styles.btn_restore}
            onPress={() => this.props.navigation.navigate("Hello")}
          >
            <Text style={styles.restore_txt}>restore</Text>
          </TouchableOpacity>
          <Text style={styles.normal_txt}> an existing wallet</Text>
        </View>
      </MainScreen>
    );
  }
}

export default StartScreen;
