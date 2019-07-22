import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/styles";
const Logo = require("../assets/images/ic_logo.png");

const StartSliderContent = () => {
    return (
      <View style={styles.slider_ontent}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.welcome_to}>Welcome to</Text>
        <View style={styles.zenus_wallet}>
          <Text style={styles.zenux}>ZENUX</Text>
          <Text style={styles.wallet}>wallet</Text>
        </View>
        <Text style={styles.crypto}>The easiest way to crypto</Text>
      </View>
    );
};

export default StartSliderContent;
