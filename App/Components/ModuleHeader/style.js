import { StyleSheet } from "react-native";
import { Metrics } from '../../Themes';

const { heightUnit, widthUnit } = Metrics

export default styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightUnit(50)
  },
  textRowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 58,
    height: 51,
    resizeMode: 'contain'
  },
});