import React, { Component } from "react";
import { Modal, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles";

class SelectionModal extends Component { 
  constructor(props) {
    super(props);    
  }

  render() {
    const { children, isShown, closeModal } = this.props;    

    return (
      <Modal
        transparent={true}
        animationType={"none"}
        visible={isShown}
        onRequestClose={() => {

        }}
      >
        <TouchableOpacity
          onPress={closeModal}
          style={styles.modalBackground}
          activeOpacity={1}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modal_list_bg_wrapper}
          >
            <ScrollView
              style={styles.modal_list_bg}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default SelectionModal;
