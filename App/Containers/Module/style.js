import { StyleSheet } from "react-native";
import { Metrics } from "../../Themes";

const { heightUnit, widthUnit, screenWidth } = Metrics


export default StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerPadding: {
    paddingHorizontal: widthUnit(16)
  },
  accordionsContainer: {
    marginTop: heightUnit(4),
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: screenWidth,
    position: 'absolute'
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column-reverse',
  }
});