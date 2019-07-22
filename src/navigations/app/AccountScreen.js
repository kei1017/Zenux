import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Button
} from "react-native";
import styles from "../../styles/styles";
import { MainScreen } from "../../components";
import Drawer from "react-native-drawer";
import SettingScreen from "./SettingScreen";
import MoneyItem from "../../components/MoneyItem";

const topbarBG = require("../../assets/images/img_topbar_bg.png");
const menuIcon = require("../../assets/images/ico_menu.png");
const alarmIcon = require("../../assets/images/ico_alarm.png");
const alarmBadgeBG = require("../../assets/images/ico_alarm_badge.png");

class AccountScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: "Account",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/images/bottombar/ico_tab_account_normal.png")}
        style={[styles.icon, { tintColor: tintColor, width: 22, height: 22 }]}
      />
    )
  };

  render() {
    return (
      <Drawer
        type="overlay"
        ref={ref => (this._drawer = ref)}
        content={<SettingScreen closeAction={() => this._drawer.close()} />}
        tapToClose={true}
        openDrawerOffset={0.1}
      >
        <MainScreen>
          <View style={styles.account_topbar}>
            <ImageBackground
              source={topbarBG}
              style={styles.account_topbar_bg}
              imageStyle={{ resizeMode: "stretch" }}
            >
              <View style={styles.account_title_bar}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this._drawer.open()}
                >
                  <ImageBackground
                    source={menuIcon}
                    style={styles.menu_bg}
                    imageStyle={{ resizeMode: "contain" }}
                  />
                </TouchableOpacity>
                <Text style={styles.topbar_title}>My Wallet</Text>
                <TouchableOpacity style={styles.account_alarm}>
                  <ImageBackground
                    source={alarmIcon}
                    style={styles.alarm_bg}
                    imageStyle={{ resizeMode: "contain" }}
                  >
                    <ImageBackground
                      source={alarmBadgeBG}
                      style={styles.alarm_badge_bg}
                      imageStyle={{ resizeMode: "contain" }}
                    >
                      <Text style={styles.alarm_badge_num}>1</Text>
                    </ImageBackground>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.account_title_content}>
                <Text style={styles.account_available_text}>
                  Available Balance
                </Text>
                <Text style={styles.account_available_btc}>0.56897 BTC</Text>
                <Text style={styles.account_available_balance}>$9311.11</Text>
              </View>
            </ImageBackground>
          </View>
          <ScrollView style={styles.account_content} showsVerticalScrollIndicator={false}>
            <View style={styles.wallet_content_title_wrapper}>
              <Text style={styles.wallet_content_title}>Protect Your BCH</Text>
              <Text style={styles.wallet_content_text}>
                Due to BCH fork, DO NOT send/receive BCH until further notice
              </Text>
            </View>
            <MoneyItem type={"mobilink"} />
            <MoneyItem type={"bitcoin"} />
            <MoneyItem type={"ethereum"} />
            <MoneyItem type={"bitcoin_cash"} />
            <MoneyItem type={"litecoin"} />
          </ScrollView>
        </MainScreen>
      </Drawer>
    );
  }
}

export default AccountScreen;
