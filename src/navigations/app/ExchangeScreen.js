import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Button,
  Modal,
  ScrollView
} from "react-native";
import styles from "../../styles/styles";
import { MainScreen } from "../../components";
import Drawer from "react-native-drawer";
import SettingScreen from "./SettingScreen";
import NumberKeyboard from "../../components/NumberKeyboard";
import CoinItem from "../../components/CoinItem";
import SelectionModal from "../../components/SelectionModal";
import { Keyboard } from "react-native";

const buttonBG = require("../../assets/images/img_switch_button_bg.png");
const topbarBG = require("../../assets/images/img_topbar_bg.png");
const menuIcon = require("../../assets/images/ico_menu.png");
const arrowDownIcon = require("../../assets/images/ico_arrow_down.png");

const bitcoinCashIcon = require("../../assets/images/moneyType/ico_bitcoin_cash.png");
const bitcoinIcon = require("../../assets/images/moneyType/ico_bitcoin.png");
const ethereumIcon = require("../../assets/images/moneyType/ico_ethereum.png");
const litecoinIcon = require("../../assets/images/moneyType/ico_litecoin.png");
const mobilinkIcon = require("../../assets/images/moneyType/ico_mobilink.png");

class ExchangeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExchange: true,
      isShown: false,
      sendMoneyType: "bitcoin",
      getMoneyType: "ethereum",
      isSendSelection: true,
      sendMoneyValue: "",
      getMoneyValue: "",
      isSendValueSelected: true,
    };
  }

  static navigationOptions = {
    tabBarLabel: "Exchange",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/images/bottombar/ico_tab_exchange_normal.png")}
        style={[styles.icon, { tintColor: tintColor, width: 25, height: 22 }]}
      />
    )
  };

  onCloseSelectionModal = () => {
    this.setState({ isShown: false });
  };

  onMoneyTypeSelected(type) {
    if (this.state.isSendSelection) {
      this.setState({ sendMoneyType: type });
    } else {
      this.setState({ getMoneyType: type });
    }
    this.onCloseSelectionModal();
  }

  getMoneySelectionIcon = moneyType => {
    let moneyIcon = null;
    switch (moneyType) {
      case "mobilink":
        moneyIcon = (
          <Image source={mobilinkIcon} style={styles.money_type_icon} />
        );
        break;
      case "bitcoin":
        moneyIcon = (
          <Image source={bitcoinIcon} style={styles.money_type_icon} />
        );
        break;
      case "ethereum":
        moneyIcon = (
          <Image source={ethereumIcon} style={styles.money_type_icon} />
        );
        break;
      case "bitcoin_cash":
        moneyIcon = (
          <Image source={bitcoinCashIcon} style={styles.money_type_icon} />
        );
        break;
      case "litecoin":
        moneyIcon = (
          <Image source={litecoinIcon} style={styles.money_type_icon} />
        );
        break;
      default:
        moneyIcon = null;
    }

    return moneyIcon;
  };

  getMoneySelectionTitle = moneyType => {
    let moneyTitle = null;
    switch (moneyType) {
      case "mobilink":
        moneyTitle = "MT";
        break;
      case "bitcoin":
        moneyTitle = "BTC";
        break;
      case "ethereum":
        moneyTitle = "ETH";
        break;
      case "bitcoin_cash":
        moneyTitle = "BCH";
        break;
      case "litecoin":
        moneyTitle = "LTC";
        break;
      default:
        moneyTitle = null;
    }

    return moneyTitle;
  };

  onPressNumKey = (number) => {
    const {sendMoneyValue, isSendValueSelected, getMoneyValue} = this.state;
    if (isSendValueSelected) {
      this.setState({ sendMoneyValue: sendMoneyValue + number})
    }
    else {
      this.setState({ getMoneyValue: getMoneyValue + number})
    }
  }

  onPressClearKey = () =>{
    const {isSendValueSelected} = this.state;
    if (isSendValueSelected) {
      this.setState({ sendMoneyValue: ""});
    }
    else {
      this.setState({ getMoneyValue: ""});
    }
  }

  render() {
    const { isExchange, isShown, sendMoneyType, getMoneyType, sendMoneyValue, getMoneyValue, isSendValueSelected } = this.state;

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
                <View style={styles.button_switch}>
                  <TouchableOpacity
                    style={styles.switch_btn}
                    onPress={() => this.setState({ isExchange: true, sendMoneyValue: "", getMoneyValue: "" })}
                  >
                    <ImageBackground
                      source={isExchange ? buttonBG : null}
                      style={styles.switch_btn_img}
                      imageStyle={{ resizeMode: "stretch" }}
                    >
                      <Text style={styles.switch_btn_text}>EXCHANGE</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.switch_btn}
                    onPress={() => this.setState({ isExchange: false, sendMoneyValue: "", getMoneyValue: "" })}
                  >
                    <ImageBackground
                      source={isExchange ? null : buttonBG}
                      style={styles.switch_btn_img}
                      imageStyle={{ resizeMode: "stretch" }}
                    >
                      <Text style={styles.switch_btn_text}>LIMIT ORDER</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View />
              </View>
              <View style={styles.money_status_view}>
                <View style={styles.send_money_container}>
                  <View style={styles.send_money_wrapper}>
                    <Text style={styles.send_money_title}>
                      {isExchange ? "You send" : "Amount to send"}
                    </Text>
                    <TouchableOpacity style={styles.send_money_value} onPress={() => this.setState({isSendValueSelected: true})}>
                      <Text style={{fontWeight: isSendValueSelected ? 'bold': 'normal'}}>{sendMoneyValue === "" ? "0.00" : sendMoneyValue}</Text>
                    </TouchableOpacity>
                    {/* <TextInput
                      style={styles.send_money_value}
                      placeholder="0.00"
                      keyboardType="numeric"
                    /> */}
                  </View>
                  <TouchableOpacity
                    style={styles.send_money_type_selection}
                    onPress={() =>
                      this.setState({ isShown: true, isSendSelection: true })
                    }
                  >
                    {this.getMoneySelectionIcon(sendMoneyType)}
                    <View style={styles.money_type_wrapper}>
                      <Text style={styles.money_type_text}>
                        {this.getMoneySelectionTitle(sendMoneyType)}
                      </Text>
                      <Text style={styles.money_type_value}>0</Text>
                    </View>
                    <Image
                      source={arrowDownIcon}
                      style={styles.arrowdown_icon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.separator_view} />
                <View style={styles.get_money_container}>
                  <View style={styles.get_money_wrapper}>
                    <Text style={styles.get_money_title}>
                      {isExchange ? "You get" : "Limit amount to send"}
                    </Text>
                    <TouchableOpacity style={styles.get_money_value} onPress={() => this.setState({ isSendValueSelected : false})}>
                      <Text style={{fontWeight: isSendValueSelected ? 'normal': 'bold'}}>{getMoneyValue === "" ? "0.00" : getMoneyValue}</Text>
                    </TouchableOpacity>
                    {/* <TextInput
                      style={styles.get_money_value}
                      placeholder="0.00"
                      keyboardType="numeric"
                    /> */}
                  </View>
                  <TouchableOpacity
                    style={styles.get_money_type_selection}
                    onPress={() =>
                      this.setState({ isShown: true, isSendSelection: false })
                    }
                  >
                    {this.getMoneySelectionIcon(getMoneyType)}
                    <View style={styles.money_type_wrapper}>
                      <Text style={styles.money_type_text}>
                        {this.getMoneySelectionTitle(getMoneyType)}
                      </Text>
                      <Text style={styles.money_type_value}>0</Text>
                    </View>
                    <Image
                      source={arrowDownIcon}
                      style={styles.arrowdown_icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.exchange_content}>
            <View style={styles.keyboard_view}><NumberKeyboard keyAction={this.onPressNumKey} clearAction={this.onPressClearKey} isPrimeKeyboard={true}/></View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => Keyboard.dismiss()}
            >
              <ImageBackground
                source={buttonBG}
                style={styles.btn_img}
                imageStyle={{ resizeMode: "stretch" }}
              >
                <Text style={styles.btn_text}>
                  {isExchange ? "EXCHANGE" : "SET LIMIT PRICE"}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <SelectionModal
            isShown={isShown}
            closeModal
            closeModal={this.onCloseSelectionModal}
          >
            <CoinItem
              type={"mobilink"}
              itemClicked={() => this.onMoneyTypeSelected("mobilink")}
            />
            <CoinItem
              type={"bitcoin"}
              itemClicked={() => this.onMoneyTypeSelected("bitcoin")}
            />
            <CoinItem
              type={"ethereum"}
              itemClicked={() => this.onMoneyTypeSelected("ethereum")}
            />
            <CoinItem
              type={"bitcoin_cash"}
              itemClicked={() => this.onMoneyTypeSelected("bitcoin_cash")}
            />
            <CoinItem
              type={"litecoin"}
              itemClicked={() => this.onMoneyTypeSelected("litecoin")}
            />
          </SelectionModal>
        </MainScreen>
      </Drawer>
    );
  }
}

export default ExchangeScreen;
