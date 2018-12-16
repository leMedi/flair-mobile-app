import { StyleSheet } from "react-native";
import { Metrics } from '../../Themes';

const { heightUnit, widthUnit } = Metrics;

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: widthUnit(8),
    paddingVertical: heightUnit(12),
    marginVertical: heightUnit(8),
    backgroundColor: '#ffffff',
    width: widthUnit(99),
    // height: heightUnit(100),
    borderRadius: heightUnit(5.7)
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightUnit(4)
  },
  subTitle: {
    textAlign: 'center',
    color: '#062c80',
    fontSize: heightUnit(13),
    fontWeight: 'bold',
    lineHeight: heightUnit(18),
    letterSpacing: heightUnit(0.1),
    fontFamily: 'Roboto-Regular',
    padding: heightUnit(5)
  },
  line: {
    width: 0.7,
    backgroundColor: 'grey'
  }
});