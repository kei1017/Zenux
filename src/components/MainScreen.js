import React, { Component } from 'react';
import { View, StatusBar, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../styles/styles'
import LoadingOverlay from 'react-native-loading-overlay'

class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, waiting } = this.props;
        return (
            <View style={styles.pageBackground}>
                <StatusBar
                    backgroundColor="#000"
                    barStyle="light-content"
                />
                <View style={styles.mainContainer}>
                    {children}
                </View>
                {/* <LoadingOverlay visible={waiting} text=""/> */}
                <Modal
                    transparent={true}                    
                    animationType={'none'}
                    visible={waiting}
                    onRequestClose={() => { console.log('close modal') }}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator
                                animating={true} size="large" />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

MainScreen.defaultProps = {    
    waiting:false,
}
export default MainScreen;