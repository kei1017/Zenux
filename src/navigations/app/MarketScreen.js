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
  ScrollView
} from "react-native";
import styles from "../../styles/styles";
import { MainScreen } from "../../components";
import Drawer from "react-native-drawer";
import SettingScreen from "./SettingScreen";
import MarketItem from "../../components/MarketItem";

const topbarBG = require("../../assets/images/img_topbar_small_bg.png");
const menuIcon = require("../../assets/images/ico_menu.png");

class MarketScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: 'Market',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/images/bottombar/ico_tab_market_normal.png")}
        style={[styles.icon, { tintColor: tintColor, width:22, height:22 }]}            
      />
    ),
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
          <View style={styles.market_topbar}>
            <ImageBackground
              source={topbarBG}
              style={styles.market_topbar_bg}
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
                <Text style={styles.topbar_title}>Market info (24H)</Text>
                <Text style={styles.topbar_right_title}>$</Text>
              </View>
            </ImageBackground>
          </View>          
          <ScrollView style={styles.account_content} showsVerticalScrollIndicator={false}>
            <Text style={styles.market_content_title}>Portfolio</Text>            
            <MarketItem type={"mobilink"} />
            <MarketItem type={"bitcoin"} />
            <MarketItem type={"ethereum"} />
            <MarketItem type={"bitcoin_cash"} />
            <MarketItem type={"litecoin"} />
          </ScrollView>
        </MainScreen>
      </Drawer>
    );
  }
}

export default MarketScreen;
