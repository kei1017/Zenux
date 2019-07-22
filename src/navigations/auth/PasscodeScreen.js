import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import styles from "../../styles/styles";
import { MainScreen } from "../../components";
import Icon from "react-native-vector-icons/Feather";
import NumberKeyboard from "../../components/NumberKeyboard";
import PINCode from "@haskkor/react-native-pincode";

const buttonBG = require("../../assets/images/img_button_bg.png");
const logoTitle = require("../../assets/images/img_logo_title.png");
const backIcon = require("../../assets/images/img_btn_back.png");

class PasscodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: false,
      isConfirm: false,
      passCode: ""
    };
  }

  static navigationOptions = {
    title: "PhoneCode",
    header: null
  };

  render() {
    const { waiting, isConfirm, passCode } = this.state;
    return (
      <MainScreen waiting={waiting}>
        <View style={styles.logo_topbar}>
          <Image source={logoTitle} style={styles.logo_title} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Image source={backIcon} style={styles.btn_back} />
          </TouchableOpacity>
        </View>
        <View style={styles.keyinput_content}>
          <Text style={styles.title}>{isConfirm ? "Re-enter your Zenux passcode" : "Create an Zenux passcode"}</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.number_input}
            keyboardType="numeric"
            placeholder="Your Passcode"
            value={passCode}
            editable={false} selectTextOnFocus={false}
          />
          <Text style={styles.underline} />
        </View>
        <View style={styles.keyboard_view}>
          <NumberKeyboard keyAction={(key) => this.setState({passCode: passCode + key})} clearAction={() => this.setState({passCode:""})}/>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => isConfirm ? this.props.navigation.navigate("Hello") : this.setState({isConfirm: true, passCode:""})}
        >
          <ImageBackground
            source={buttonBG}
            style={styles.btn_img}
            imageStyle={{ resizeMode: "stretch" }}
          >
            <Text style={styles.btn_text}>Next</Text>
          </ImageBackground>
        </TouchableOpacity>
      </MainScreen>
    );
  }
}

export default PasscodeScreen;
