import React, { Component } from "react";
import { View } from "react-native";
import styles from "../styles/styles";
import NumKeyItem from "./NumKeyItem";

class NumberKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {keyAction, clearAction, isPrimeKeyboard } = this.props;

    return (
      <View style={styles.keyboard}>
        <View style={styles.keyline}>
          <NumKeyItem number={"1"} onPressAction={() => keyAction && keyAction("1")} />
          <NumKeyItem number={"2"} onPressAction={() => keyAction && keyAction("2")} />
          <NumKeyItem number={"3"} onPressAction={() => keyAction && keyAction("3")} />
        </View>
        <View style={styles.keyline}>
          <NumKeyItem number={"4"} onPressAction={() => keyAction && keyAction("4")} />
          <NumKeyItem number={"5"} onPressAction={() => keyAction && keyAction("5")} />
          <NumKeyItem number={"6"} onPressAction={() => keyAction && keyAction("6")} />
        </View>
        <View style={styles.keyline}>
          <NumKeyItem number={"7"} onPressAction={() => keyAction && keyAction("7")} />
          <NumKeyItem number={"8"} onPressAction={() => keyAction && keyAction("8")} />
          <NumKeyItem number={"9"} onPressAction={() => keyAction && keyAction("9")} />
        </View>
        <View style={styles.keyline}>          
          {isPrimeKeyboard? <NumKeyItem number={"."} onPressAction={() => keyAction && keyAction(".")} /> : <View style={styles.key_btn} />}
          <NumKeyItem number={"0"} onPressAction={() => keyAction && keyAction("0")} />
          <NumKeyItem number={"x"} onPressAction={() => clearAction && clearAction()} />
        </View>
      </View>
    );
  }
}

export default NumberKeyboard;
