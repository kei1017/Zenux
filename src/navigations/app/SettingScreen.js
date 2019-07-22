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
  ScrollView
} from "react-native";
import styles from "../../styles/styles";
import SettingItem from "../../components/SettingItem";

const settingBG = require("../../assets/images/img_setting_bg.png");
const closeIcon = require("../../assets/images/ico_btn_close.png");

class SettingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.setting_container}>
        <ImageBackground
          source={settingBG}
          style={styles.setting_bg}
          imageStyle={{ resizeMode: "stretch" }}
        >
          <View style={styles.setting_title_bar}>
            <Text style={styles.setting_title}>SETTINGS</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={this.props.closeAction}
            >
              <Image
                source={closeIcon}
                style={styles.setting_close}
                imageStyle={{ resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.setting_section}>
              <Text style={styles.setting_username}>AVATAR</Text>
              <Text style={styles.setting_user_phone}>+1 256 564 5555</Text>
            </View>
            <View style={styles.setting_section}>
              <Text style={styles.setting_section_title}>BACKUP</Text>
              <SettingItem title="Wallet Backup" />
            </View>
            <View style={styles.setting_section}>
              <Text style={styles.setting_section_title}>NOTIFICATIONS</Text>
              <SettingItem title="Notifications" />
            </View>
            <View style={styles.setting_section}>
              <Text style={styles.setting_section_title}>ACCOUNT</Text>
              <SettingItem title="Native Currency" />
              <SettingItem title="Exchange Limits" />
              <SettingItem title="Tools" />
            </View>
            <View style={styles.setting_section}>
              <Text style={styles.setting_section_title}>SECURITY</Text>
              <SettingItem title="Passcode" />
              <SettingItem title="Support" />
            </View>
            <Text style={styles.setting_app_version}>App Version: 1.4.5</Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default SettingScreen;
