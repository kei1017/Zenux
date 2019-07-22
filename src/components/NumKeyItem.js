import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import styles from "../styles/styles";
import Icon from "react-native-vector-icons/Feather";
const keyHighlight = require("../assets/images/img_key_highlight.png");

class NumKeyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false
    };
  }

  render() {
    const { number } = this.props;
    const { pressStatus } = this.state;

    return (
      <TouchableOpacity
        activeOpacity={1}        
        onPressIn={() => this.setState({ pressStatus: true })}
        onPressOut={() => {
          this.setState({ pressStatus: false });
          this.props.onPressAction();
        }}
      >
        <ImageBackground
          source={pressStatus ? keyHighlight : null}
          style={styles.key_img}
          imageStyle={{ resizeMode: "contain" }}
        >
          {number === "x" ? (
            <Icon name="x" size={20} color={pressStatus ? "white" : "black"} />
          ) : (
            <Text
              style={pressStatus ? styles.key_text_highlight : styles.key_text}
            >
              {number}
            </Text>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default NumKeyItem;
