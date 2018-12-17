import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop: Metrics.heightUnit(200),
    },
    logo: {
        width: Metrics.widthUnit(200),
        height: Metrics.heightUnit(75),
        resizeMode: "contain"

    },
    containerLogo: {
        flex:1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center"
    },
    containerLoader: {
        width:'100%',
        marginTop: Metrics.heightUnit(45)
    },
    containerSlogan: {
        flex:1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: Metrics.heightUnit(150)
    },
    slogan: {
        width: Metrics.heightUnit(304),
        height: Metrics.widthUnit(36)
    }
});
