import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet
} from "react-native";
import styles from "../../styles/styles";
import { MainScreen } from "../../components";
import Icon from "react-native-vector-icons/Feather";
import NumberKeyboard from "../../components/NumberKeyboard";
import CountryPicker from "react-native-country-picker-modal";

const buttonBG = require("../../assets/images/img_button_bg.png");
const logoTitle = require("../../assets/images/img_logo_title.png");
const backIcon = require("../../assets/images/img_btn_back.png");

class PhoneInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: false,
      cca2: "US",
      callingCode: "1",
      phoneNumber: ""
    };
  }

  static navigationOptions = {
    title: "PhoneInput",
    header: null
  };

  render() {
    const { waiting, phoneNumber, callingCode, cca2 } = this.state;
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
          <Text style={styles.title}>Welcome to Zenux</Text>
          <Text style={styles.subtitle}>
            Enter your mobile number to continue.
          </Text>
          <View style={styles.phone_input_wrapper}>
            <CountryPicker
              style={styles.country_picker}
              onChange={value => {
                this.setState({
                  cca2: value.cca2,
                  callingCode: value.callingCode
                });
              }}
              cca2={cca2}
              translation="eng"
            />

            <Text style={styles.calling_code}>{"+ " + callingCode}</Text>

            <TextInput
              style={styles.phone_input}
              keyboardType="numeric"
              placeholder="Your phone number"
              value={phoneNumber}
              editable={false}
              selectTextOnFocus={false}
            />
          </View>
          <Text style={styles.underline} />
        </View>
        <View style={styles.keyboard_view}>
          <NumberKeyboard
            keyAction={key => this.setState({ phoneNumber: phoneNumber + key })}
            clearAction={() => this.setState({ phoneNumber: "" })}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("PhoneCode")}
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

export default PhoneInputScreen;
