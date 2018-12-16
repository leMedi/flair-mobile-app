import { StyleSheet } from "react-native";
import { Metrics } from '../../Themes';

const { heightUnit, widthUnit } = Metrics;

export default styles = StyleSheet.create({
  carteContainer: {
    marginBottom: heightUnit(16),
    width: widthUnit(325),
    borderRadius: heightUnit(6),
    paddingHorizontal: widthUnit(18.9),
    paddingVertical: heightUnit(16),
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: widthUnit(-1), height: heightUnit(2) },
    shadowOpacity: heightUnit(0.08),
    shadowRadius: heightUnit(5),
    elevation: 1.5
  },
  menuIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "right",
    padding: heightUnit(9)
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightUnit(14)
  },
  chevronContainer: {
    width: widthUnit(24),
    height: heightUnit(24),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightUnit(12),
    backgroundColor: '#e3edfc',
    marginLeft: widthUnit(10)
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});