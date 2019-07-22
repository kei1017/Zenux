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
  Button
} from "react-native";
import styles from "../../styles/styles";
import { MainScreen } from "../../components";
import Drawer from "react-native-drawer";
import SettingScreen from "./SettingScreen";

const topbarBG = require("../../assets/images/img_topbar_small_bg.png");
const menuIcon = require("../../assets/images/ico_menu.png");
const orderIcon = require("../../assets/images/bottombar/ico_tab_order_normal.png");

class OrderScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: 'Order',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={orderIcon}
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
                <Text style={styles.topbar_title}>EXCHANGE ORDER</Text>
                <View/>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.order_content}>
            <Image source={orderIcon} style={styles.order_icon} />
            <Text style={styles.order_content_title}>No Activity Yet</Text>
            <Text style={styles.order_content_description}>You don't have any activity yet.</Text>
            <TouchableOpacity>
                <Text style={styles.order_exchange}>MAKE A EXCHANGE</Text>
            </TouchableOpacity>
          </View>
        </MainScreen>
      </Drawer>
    );
  }
}

export default OrderScreen;
