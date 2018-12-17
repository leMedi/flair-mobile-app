import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  Platform,
  Text
} from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { HelperText, Switch } from 'react-native-paper';
import { injectIntl } from "react-intl";
import Title from "../../Components/Title";
import Header from "../../Components/Header";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input";
import { compose } from "recompose";
import { withFormik, Field } from "formik";
import * as Yup from "yup";
import { Colors, Metrics } from "../../Themes";
import styles from "./style";

const { heightUnit } = Metrics

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveID: false,
      showPassword: true,
      id: null,
      firstName: null,
      lastName: null,
      language: 'fr'
    };
  }

  componentDidMount() {
    // TODO: check if user already connected
  }

  onPressIcon() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {

    const {
      intl,
      values,
      handleChange,
      handleSubmit,
      setFieldValue,
      navigation,
      touched,
      errors
    } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <ScrollView contentContainerStyle={{ paddingTop: heightUnit(20) }}>
          <View style={styles.textPadding}>
            <TouchableOpacity onPress={() => {
              const language = this.state.language === 'fr' ? "ar" : "fr"
              this.setState({ language })
            }}>
              <Title text={this.state.language === 'fr' ? "عربية" : "Français"}
                textAlign={"right"} style={styles.text1}
                color={Colors.info}
                letterSpacing={0}
                lineHeight={heightUnit(18)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Header titleID="LOGIN_Title" subTitleID="LOGIN_Description" />
            
            <View style={{ justifyContent: "center" }}>
              <View>
                <Field
                  component={Input}
                  style={{ backgroundColor: 'transparent', height: heightUnit(56) }}
                  autoCorrect={false}
                  onChangeText={handleChange("user")}
                  value={values.user}
                  label={intl.formatMessage({ id: "LOGIN_Input_ID" })}
                  error={touched.user && errors.user}
                  returnKeyType={"next"}
                  onSubmitEditing={(event) => {
                    this.password.focus()
                  }}
                  placeholderTextColor={Colors.primary}
                  keyboardType="numeric"
                />
                {touched.user && errors.user &&
                  <HelperText
                    type="error"
                    visible={touched.user && errors.user}
                    theme={{ colors: { error: Colors.error } }}
                  >
                    {errors.user}
                  </HelperText>
                }
              </View>

              <View style={{ marginTop: heightUnit(14) }}>
                <Field
                  component={Input}
                  style={{ backgroundColor: 'transparent', height: heightUnit(56) }}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  innerRef={(input) => { this.password = input; }}
                  returnKeyType={"done"}
                  onSubmitEditing={(event) => {
                    handleSubmit(values, this.state.id);
                  }}
                  label={intl.formatMessage({ id: "LOGIN_Input_Password" })}
                  error={touched.password && errors.password}
                  placeholderTextColor={Colors.primary}
                  secureTextEntry={this.state.showPassword}
                  rightIcon="eye"
                  onPressInIcon={() => this.onPressIcon()}
                  onPressOutIcon={() => this.onPressIcon()}
                />
                {touched.password && errors.password &&
                  <HelperText
                    type="error"
                    visible={touched.password && errors.password}
                    theme={{ colors: { error: Colors.error } }}
                  >
                    {errors.password}
                  </HelperText>
                }
              </View>

              <View style={{ flexDirection: "row", marginTop: heightUnit(25), marginBottom: heightUnit(24) }}>
                <View style={styles.switchTextContainer}>
                  <Title
                    style={{ marginLeft: 5 }}
                    id="LOGIN_Option_SaveID"
                    fontSize={heightUnit(14)}
                    fontWeight={'bold'}
                    color={Colors.text}
                    textAlign={'left'}
                    letterSpacing={0.2}
                    lineHeight={heightUnit(20)}
                    fontFamily={"Roboto-Bold"}
                  />
                </View>
                <View style={styles.switchContainer}>
                  <Field
                    component={Switch}
                    style={{ transform: Platform.OS === 'ios' ? [{ scaleX: .8 }, { scaleY: .8 }] : [{ scaleX: 1 }, { scaleY: 1 }] }}
                    value={values.swip}
                    onValueChange={async () => {
                      await this.setState({ saveID: !this.state.saveID });
                      await setFieldValue("swip", this.state.saveID);
                      await handleChange("swip");
                    }}
                    color={Colors.info}
                    ios_backgroundColor={"rgba(86, 102, 132, 0.3)"}
                  />
                </View>
              </View>

              <View style={styles.btn}>
                <Button
                  isLoading={this.props.isLoading}
                  disabled={this.props.isLoading}
                  id="LOGIN_Button_Connect"
                  onPress={() => {
                    handleSubmit(values, this.state.id)
                    navigation.navigate('DashboardScreen')
                  }}
                />
              </View>

              <TouchableOpacity
                style={{ marginTop: heightUnit(24) }}
                onPress={() => navigation.navigate("recoveryLoginForm", {
                  headerTitleId: "LOGIN_Title_Forgotten_ID",
                  headerLeft: "BACK_LEFT"
                })} >
                <Title
                  id="LOGIN_Link_Forgotten_ID"
                  fontSize={heightUnit(15)}
                  color={Colors.info}
                  textAlign={'center'}
                  letterSpacing={0}
                  fontFamily={"Roboto-Medium"}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginTop: heightUnit(10) }}
                onPress={() =>
                  navigation.navigate("recoveryPwdLogin", {
                    headerTitleId: "LOGIN_Title_Forgotten_Password",
                    headerLeft: "BACK_LEFT"
                  })
                }
              >
                <Title
                  style={{}}
                  id="LOGIN_Link_Forgotten_Password"
                  fontSize={heightUnit(15)}
                  color={Colors.info}
                  textAlign={'center'}
                  letterSpacing={0}
                  fontFamily={"Roboto-Medium"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center", backgroundColor: "#e8e6e5", paddingVertical: heightUnit(9) }} onPress={() => alert("Contacts Utiles")}>
          <View style={{ justifyContent: 'space-between', alignItems: "center" }}>
            <Feather name="chevron-up" size={heightUnit(20)} color="#566684" />
            <Title id="LOGIN_Button_Direct_Services"
              fontSize={heightUnit(15)}
              textAlign={'left'}
              letterSpacing={0}
              fontFamily={"Roboto-Medium"} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const enhance = compose(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues() {
      return {
        user: "",
        password: "",
        saveID: ""
      };
    },
    validationSchema: values => {
      return Yup.object().shape({
        user: Yup.string().required(intl.formatMessage({ id: "ERROR_Input_Required" })),
        password: Yup.string().required(intl.formatMessage({ id: "ERROR_Input_Required" }))
      });
    },
    handleSubmit(values, { props, setSubmitting, setFieldError }) {
      const payload = {
        login: values.user,
        password: values.password,
        saveID: values.swip
      };
      setSubmitting(false);

      // TODO:authenticate user
      // props.navigation.navigate('DashboardScreen')
    }
  })
);


export default injectIntl(enhance(login));
