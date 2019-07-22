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
const moblilinkMarketBG = require("../assets/images/market/img_market_mobilink_bg.png");

const bitcoinBG = require("../assets/images/wallet/img_bitcoin_bg.png");
const bitcoinIcon = require("../assets/images/wallet/ico_bitcoin.png");
const bitcoinMarketBG = require("../assets/images/market/img_market_bitcoin_bg.png");

const ethereumBG = require("../assets/images/wallet/img_ethereum_bg.png");
const ethereumIcon = require("../assets/images/wallet/ico_ethereum.png");
const ethereumMarketBG = require("../assets/images/market/img_market_ethereum_bg.png");

const bitcoincashBG = require("../assets/images/wallet/img_bitcoin_cash_bg.png");
const bitcoincashIcon = require("../assets/images/wallet/ico_bitcoin_cash.png");
const bitcoincashMarketBG = require("../assets/images/market/img_market_bitcoincash_bg.png");

const litecoinBG = require("../assets/images/wallet/img_litecoin_bg.png");
const litecoinIcon = require("../assets/images/wallet/ico_litecoin.png");
const litecoinMarketBG = require("../assets/images/market/img_market_litecoin_bg.png");

const upArrowIcon = require("../assets/images/ico_arrow_up.png");

const MarketItem = props => {
  let marketItem = null;
  switch (props.type) {
    case "mobilink":
      marketItem = (
        <ImageBackground
          source={moblilinkBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={moblilinkIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>MOBILINK TOKEN</Text>
            <Text style={styles.market_item_value}>0 MT</Text>
          </View>
          <Text style={styles.market_item_dollar}>$236.00</Text>
          <ImageBackground
            source={moblilinkMarketBG}
            style={styles.market_item_bg}
            imageStyle={{ resizeMode: "stretch" }}
          >
            <View style={styles.market_percent_wrapper}>
              <Text style={styles.market_percent_value}>7.5%</Text>
              <Image source={upArrowIcon} style={styles.up_arrow_icon} />
            </View>
          </ImageBackground>
        </ImageBackground>
      );
      break;
    case "bitcoin":
      marketItem = (
        <ImageBackground
          source={bitcoinBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={bitcoinIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>BITCOIN</Text>
            <Text style={styles.market_item_value}>1 BTC</Text>
          </View>
          <Text style={styles.market_item_dollar}>$236.00</Text>
          <ImageBackground
            source={bitcoinMarketBG}
            style={styles.market_item_bg}
            imageStyle={{ resizeMode: "stretch" }}
          >
            <View style={styles.market_percent_wrapper}>
              <Text style={styles.market_percent_value}>7.5%</Text>
              <Image source={upArrowIcon} style={styles.up_arrow_icon} />
            </View>
          </ImageBackground>
        </ImageBackground>
      );
      break;
    case "ethereum":
      marketItem = (
        <ImageBackground
          source={ethereumBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={ethereumIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>ETHEREUM</Text>
            <Text style={styles.market_item_value}>0.03141 ETH</Text>
          </View>
          <Text style={styles.market_item_dollar}>-$226.12918</Text>
          <ImageBackground
            source={ethereumMarketBG}
            style={styles.market_item_bg}
            imageStyle={{ resizeMode: "stretch" }}
          >
            <View style={styles.market_percent_wrapper}>
              <Text style={styles.market_percent_value}>1-833%</Text>
              <Image source={upArrowIcon} style={styles.up_arrow_icon} />
            </View>
          </ImageBackground>
        </ImageBackground>
      );
      break;
    case "bitcoin_cash":
      marketItem = (
        <ImageBackground
          source={bitcoincashBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={bitcoincashIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>BITCOIN CASH</Text>
            <Text style={styles.market_item_value}>0.044797 BTC</Text>
          </View>
          <Text style={styles.market_item_dollar}>-$5,425.50844</Text>
          <ImageBackground
            source={bitcoincashMarketBG}
            style={styles.market_item_bg}
            imageStyle={{ resizeMode: "stretch" }}
          >
            <View style={styles.market_percent_wrapper}>
              <Text style={styles.market_percent_value}>-30.852%</Text>
              <Image source={upArrowIcon} style={styles.up_arrow_icon} />
            </View>
          </ImageBackground>
        </ImageBackground>
      );
      break;
    case "litecoin":
      marketItem = (
        <ImageBackground
          source={litecoinBG}
          style={styles.money_item_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <Image source={litecoinIcon} style={styles.money_item_icon} />
          <View style={styles.money_item_text_wrapper}>
            <Text style={styles.money_item_title}>LITECOIN</Text>
            <Text style={styles.market_item_value}>0.007559 BTC</Text>
          </View>
          <Text style={styles.market_item_dollar}>-$79.73092</Text>
          <ImageBackground
            source={litecoinMarketBG}
            style={styles.market_item_bg}
            imageStyle={{ resizeMode: "stretch" }}
          >
            <View style={styles.market_percent_wrapper}>
              <Text style={styles.market_percent_value}>-2.686%</Text>
              <Image source={upArrowIcon} style={styles.up_arrow_icon} />
            </View>
          </ImageBackground>
        </ImageBackground>
      );
      break;
    default:
      marketItem = null;
  }

  return <View style={styles.money_item_container}>{marketItem}</View>;
};

export default MarketItem;
