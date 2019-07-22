import { StyleSheet, Dimensions, Platform } from "react-native";
import { black, white } from "ansi-colors";
const { width, height } = Dimensions.get("window");

const ZENUX_GRAY_COLOR = "#909090";

export default (styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  pageBackground: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    padding: 15,
    paddingBottom: 20
  },
  modal_list_bg_wrapper: {
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "80%",
    maxHeight: "70%",
    height: "70%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5
  },
  modal_list_bg: {
    width: "100%",
    height: "100%",
    paddingTop: 10
  },

  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },

  slider_ontent: {
    alignSelf: "center",
    height: "100%",
    justifyContent: "center"
  },
  logo: {
    resizeMode: "contain",
    height: 80,
    width: 80
  },
  welcome_to: {
    fontSize: 20,
    color: "#353535",
    marginBottom: -10,
    marginTop: 20
  },
  zenus_wallet: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  zenux: {
    fontSize: 35,
    color: "#353535",
    fontWeight: "bold"
  },
  wallet: {
    fontSize: 25,
    color: "#353535",
    marginLeft: 5,
    marginBottom: 5
  },
  crypto: {
    fontSize: 15,
    color: ZENUX_GRAY_COLOR,
    marginTop: 10
  },

  btn: {
    borderRadius: 5,
    overflow: "hidden"
  },
  btn_img: {
    height: 50,
    width: "100%"
  },
  btn_text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center"
  },

  restore_wrapper: {
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  normal_txt: {
    fontSize: 14,
    color: "#353535"
  },
  restore_txt: {
    fontSize: 14,
    color: "#353535",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#33cff8"
  },

  logo_topbar: {
    flexDirection: "row",
    alignItems: "center"
  },
  logo_title: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    resizeMode: "contain",
    width: "100%",
    height: 25
  },
  btn_back: {
    width: 20,
    height: 25,
    resizeMode: "contain"
  },
  keyinput_content: {
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 20,
    flex: 3
  },
  title: {
    color: "#353535",
    fontSize: 25,
    fontWeight: "bold"
  },
  subtitle: {
    color: ZENUX_GRAY_COLOR,
    fontSize: 13
  },
  number_input: {
    color: "#353535",
    fontSize: 14,
    padding: 0,
    margin: 0,
    marginTop: 30
  },
  phone_input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
    marginTop: 30
  },
  phone_input: {
    color: "#353535",
    fontSize: 14,
    flex: 1,
    padding: 0,
    margin: 0
  },
  country_picker: {
    marginBottom: 10
  },
  calling_code: {
    paddingLeft: 5,
    paddingRight: 10,
    color: "#000",
    fontSize: 14,
    height: "100%",
    textAlignVertical: "center"
  },

  underline: {
    height: 1,
    backgroundColor: "#6948d5"
  },
  keyboard_view: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  keyboard: {
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10
  },
  keyline: {
    flexDirection: "row",
    margin: 10
  },
  key_btn: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    overflow: "hidden"
  },
  key_img: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: "#fbfbfb"
  },
  key_text_highlight: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  key_text: {
    color: "#353535",
    fontSize: 20,
    textAlign: "center"
  },

  hello_wrapper: {
    flex: 1,
    flexDirection: "column",
    margin: -17
  },
  hello_bg: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 15,
    paddingTop: "20%"
  },
  hello_title: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 15
  },
  hello_text: {
    color: "#fff",
    fontSize: 15,
    width: "70%"
  },
  recover_wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    paddingTop: 25
  },
  or_txt: {
    fontSize: 13,
    color: ZENUX_GRAY_COLOR,
    marginTop: 25
  },

  setting_container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red"
  },
  setting_bg: {
    flex: 1,
    flexDirection: "column",
    padding: 20
  },
  setting_title_bar: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  setting_title: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold"
  },
  setting_close: {
    width: 30,
    height: 30
  },

  setting_section: {
    marginBottom: 30,
    flexDirection: "column"
  },
  setting_username: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  setting_user_phone: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  setting_section_title: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold"
  },

  setting_item_content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  setting_item_title: {
    color: "#fff",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  },
  setting_item_arrow: {
    width: 4,
    height: 7
  },
  setting_item_underline: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  },
  setting_app_version: {
    color: "#dcdcdc",
    fontSize: 12
  },

  account_topbar: {
    margin: -16,
    height: 160
  },
  account_topbar_bg: {
    width: "100%",
    height: "100%",
    flexDirection: "column"
  },
  account_content: {
    flex: 1,
    marginTop: 30,
    marginBottom: -15
  },

  account_title_bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 10
  },
  topbar_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center"
  },
  topbar_right_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  menu_bg: {
    height: 30,
    width: 20
  },
  alarm_bg: {
    height: 30,
    width: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  alarm_badge_bg: {
    width: 12,
    height: 12,
    marginTop: 5
  },
  alarm_badge_num: {
    color: "#fff",
    fontSize: 8,
    textAlign: "center",
    textAlignVertical: "center",
    width: "100%",
    height: "100%"
  },

  account_title_content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  account_available_text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold"
  },
  account_available_btc: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold"
  },
  account_available_balance: {
    color: "#fff",
    fontSize: 30
  },

  market_topbar: {
    margin: -16,
    height: 80
  },
  market_topbar_bg: {
    width: "100%",
    height: "100%"
  },

  exchange_content: {
    flex: 1,
    marginTop: 50
  },
  money_status_view: {
    backgroundColor: "#fff",
    height: 110,
    width: "90%",
    position: "absolute",
    bottom: -30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6c57dd",
    alignSelf: "center",
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "column"
  },
  separator_view: {
    height: 2,
    backgroundColor: "#f4f4f4",
    width: "100%"
  },
  button_switch: {
    width: "60%",
    flexDirection: "row",
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden"
  },
  switch_btn: {
    overflow: "hidden",
    flex: 1
  },
  switch_btn_text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center"
  },
  switch_btn_img: {
    width: "100%",
    height: "100%"
  },

  send_money_container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "flex-end"
  },
  send_money_wrapper: {
    flexDirection: "column",
    flex: 1,
    height: "100%",
    marginLeft: 15,
    paddingTop: 10
  },
  send_money_title: {
    color: "#6846d1",
    fontSize: 12
  },
  send_money_value: {
    color: "#353535",
    fontSize: 12,
    flex: 1,
    paddingTop: 0,
    paddingBottom: 5
  },
  send_money_type_selection: {
    width: 120,
    height: "90%",
    marginRight: 15,
    overflow: "hidden",
    backgroundColor: "#6846d1",
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  money_type_icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginLeft: 15,
    marginRight: 10
  },
  money_type_wrapper: {
    flex: 1,
    paddingTop: 10
  },
  money_type_text: {
    color: "#fff",
    fontSize: 11
  },
  money_type_value: {
    color: "#fff",
    fontSize: 10
  },
  arrowdown_icon: {
    width: 10,
    height: 10,
    resizeMode: "contain",
    marginRight: 10
  },

  get_money_container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    overflow: "hidden"
  },
  get_money_wrapper: {
    flexDirection: "column",
    flex: 1,
    height: "90%",
    marginLeft: 15,
    marginTop: 5
  },
  get_money_title: {
    color: "#888",
    fontSize: 12
  },
  get_money_value: {
    color: "#353535",
    fontSize: 12,
    flex: 1,
    paddingTop: 0
  },
  get_money_type_selection: {
    width: 120,
    height: "90%",
    marginRight: 15,
    overflow: "hidden",
    backgroundColor: "#6846d1",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: "row",
    alignItems: "center"
  },

  wallet_content_title_wrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  wallet_content_title: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold"
  },
  wallet_content_text: {
    fontSize: 12,
    color: ZENUX_GRAY_COLOR
  },

  money_item_container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  money_item_bg: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden"
  },
  money_item_icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    margin: 15
  },
  money_item_text_wrapper: {
    flex: 1
  },
  money_item_title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: -2
  },
  money_item_value: {
    color: "#fff",
    fontSize: 12
  },
  money_item_dollar: {
    textAlignVertical: "center",
    fontSize: 12,
    color: "#fff",
    marginRight: 20
  },

  market_content_title: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    padding: 10
  },
  market_item_bg: {
    width: 70,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  market_percent_wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "60%"
  },
  market_percent_value: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 2
  },
  up_arrow_icon: {
    width: 8,
    height: 8,
    resizeMode: "contain",
    justifyContent: "center"
  },
  market_item_value: {
    color: "#fff",
    fontSize: 10
  },
  market_item_dollar: {
    textAlignVertical: "center",
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    paddingRight: 5,
    paddingLeft: 5,
    flex: 1
  },

  order_content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  order_icon: {
    resizeMode: "contain",
    margin: 15,
    width: 50,
    height: 50
  },
  order_content_title: {
    fontSize: 20,
    color: "#000"
  },
  order_content_description: {
    fontSize: 15,
    color: ZENUX_GRAY_COLOR
  },
  order_exchange: {
    color: "#6a47d5",
    fontWeight: "bold",
    fontSize: 15,
    padding: 15
  }
}));
