import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import styles from "../styles/styles";

const moblilinkBG = require("../assets/images/wallet/img_mobilink_bg.png");
const moblilinkIcon = require("../assets/images/wallet/ico_mobilink.png");

const bitcoinBG = require("../assets/images/wallet/img_bitcoin_bg.png");
const bitcoinIcon = require("../assets/images/wallet/ico_bitcoin.png");

const ethereumBG = require("../assets/images/wallet/img_ethereum_bg.png");
const ethereumIcon = require("../assets/images/wallet/ico_ethereum.png");

const bitcoincashBG = require("../assets/images/wallet/img_bitcoin_cash_bg.png");
const bitcoincashIcon = require("../assets/images/wallet/ico_bitcoin_cash.png");

const litecoinBG = require("../assets/images/wallet/img_litecoin_bg.png");
const litecoinIcon = require("../assets/images/wallet/ico_litecoin.png");

const MoneyItem = props => {
  let moneyItem = null;
  switch (props.type) {
    case "mobilink":
      moneyItem = (
        <ImageBackground
          source={moblilinkBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={moblilinkIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>MOBILINK TOKEN</Text>
            <Text style={styles.money_item_value}>0 MT</Text>
          </View>
          <Text style={styles.money_item_dollar}>$0.00</Text>
        </ImageBackground>
      );
      break;
    case "bitcoin":
      moneyItem = (
        <ImageBackground
          source={bitcoinBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={bitcoinIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>BITCOIN</Text>
            <Text style={styles.money_item_value}>0 BTC</Text>
          </View>
          <Text style={styles.money_item_dollar}>$0.00</Text>
        </ImageBackground>
      );
      break;
    case "ethereum":
      moneyItem = (
        <ImageBackground
          source={ethereumBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={ethereumIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>ETHEREUM</Text>
            <Text style={styles.money_item_value}>0 ETH</Text>
          </View>
          <Text style={styles.money_item_dollar}>$0.00</Text>
        </ImageBackground>
      );
      break;
    case "bitcoin_cash":
      moneyItem = (
        <ImageBackground
          source={bitcoincashBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={bitcoincashIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>BITCOIN CASH</Text>
            <Text style={styles.money_item_value}>0 BCH</Text>
          </View>
          <Text style={styles.money_item_dollar}>$0.00</Text>
        </ImageBackground>
      );
      break;
    case "litecoin":
      moneyItem = (
        <ImageBackground
          source={litecoinBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={litecoinIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>LITECOIN</Text>
            <Text style={styles.money_item_value}>0 LTC</Text>
          </View>
          <Text style={styles.money_item_dollar}>$0.00</Text>
        </ImageBackground>
      );
      break;
    default:
      moneyItem = null;
  }

  return <TouchableOpacity style={styles.money_item_container}>{moneyItem}</TouchableOpacity>;
};

export default MoneyItem;
