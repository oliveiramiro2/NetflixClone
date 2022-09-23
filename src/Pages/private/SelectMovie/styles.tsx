import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: metrics.colors.color1,
    },

    containContent: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: metrics.colors.color1,
        margin: 5,
        paddingTop: metrics.dimensions.height * 0.15,
        paddingBottom: metrics.dimensions.height * 0.01,
    },

    text: {
        fontFamily: metrics.fonts.default2Regular,
        color: metrics.colors.color3,
    },

    containSlider: {
        marginBottom: metrics.dimensions.height * 0.05,
    },

    title: {
        fontSize: 22,
        marginLeft: 5,
        marginBottom: 12,
    },

    imgs: {
        height: metrics.dimensions.height * 0.28,
        width: metrics.dimensions.width * 0.32,
        borderRadius: 8,
    },

    imgsTop: {
        height: metrics.dimensions.height * 0.4,
        width: metrics.dimensions.width * 0.45,
    },

    MH: {
        marginHorizontal: 6,
    },
});

export default styles;
