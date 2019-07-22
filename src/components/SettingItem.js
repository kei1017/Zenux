import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const rightArrowIcon = require("../assets/images/ico_arrow_right.png");

const SettingItem = (props) => {
  return (
    <TouchableOpacity style={styles.setting_item}>
      <View style={styles.setting_item_content}>
        <Text style={styles.setting_item_title}>{props.title}</Text>
        <Image
          source={rightArrowIcon}
          style={styles.setting_item_arrow}
          imageStyle={{ resizeMode: "contain" }}
        />
      </View>
      <View style={styles.setting_item_underline} />
    </TouchableOpacity>
  );
};

export default SettingItem;
