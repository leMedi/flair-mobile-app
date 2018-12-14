import { StyleSheet, Platform } from "react-native";
import { Metrics } from "../../Themes";

const { heightUnit, widthUnit } = Metrics;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#f4f2f0",
    paddingTop: heightUnit(10),
    paddingBottom: heightUnit(24),
    paddingHorizontal: widthUnit(24),
  },
  switchTextContainer: {
    flex: 4,
    paddingRight: widthUnit(30),
  },
  switchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPadding: {
    flex: 1,
    paddingRight: widthUnit(20),
    flexDirection: "column",
    justifyContent: "flex-start"
  },
});