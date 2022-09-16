import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },

    slide: {
        flex: 1,
    },

    title: {
        fontFamily: metrics.fonts.defaultBold,
        color: metrics.colors.color3,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
    },

    containText: {
        flex: 1,
        position: 'absolute',
        top: metrics.dimensions.height * 0.65,
        alignItems: 'center',
        height: metrics.dimensions.height * 0.5,
        width: metrics.dimensions.width,
    },

    text: {
        fontFamily: metrics.fonts.defaultLight,
        color: metrics.colors.color3,
        textAlign: 'center',
        fontSize: 20,
    },

    dotStyles: {
        backgroundColor: 'darkgray',
    },

    button: {
        backgroundColor: metrics.colors.color2,
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        fontFamily: metrics.fonts.defaultLight,
        fontSize: 17,
        color: metrics.colors.color3,
    },
});

export default styles;
