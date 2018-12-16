import { StyleSheet } from 'react-native';
import { Metrics } from "../../Themes";

const { heightUnit, widthUnit } = Metrics;

export default styles = StyleSheet.create({
  backgroundContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#646464'
  },
  headerContainer: {
    paddingTop: heightUnit(26),
    paddingBottom: heightUnit(4),
    marginBottom: heightUnit(6),
    paddingHorizontal: widthUnit(16),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  historicContainer: {
    paddingHorizontal: heightUnit(16),
    marginBottom: heightUnit(17),
  },
  screenContainer: {
    flex: 1,
  },
  topContainer: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  textStyle: {
    fontSize: heightUnit(15),
    color: 'white',
    marginTop: heightUnit(16)
  },
  menuContainer: {
    alignItems: "center",
    backgroundColor: 'transparent',
    marginHorizontal: widthUnit(8),
    marginBottom: heightUnit(40)
  },
  listContainer: {
    paddingTop: heightUnit(12),
    backgroundColor: '#ffffff',
    borderRadius: 13.5,
    top: heightUnit(-22),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: heightUnit(13) },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  listContainerScroll: {
    display: 'none',
    flex: 1,
  },
  visible: {
    display: 'flex',
  },
  list: {
    backgroundColor: 'red'
  },
  listHeader: {
    paddingHorizontal: widthUnit(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleList: {
    color: '#9797af',
    fontSize: heightUnit(13),
    fontWeight: 'normal',
    lineHeight: heightUnit(20),
    letterSpacing: heightUnit(0.2),
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
  },
  orderIcon: {
    width: heightUnit(16),
    height: heightUnit(12)
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: heightUnit(20),
    textAlign: 'center',
    margin: 10,
  },
  menuItem: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column-reverse',
  }
});
