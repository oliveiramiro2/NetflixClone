import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        backgroundColor: metrics.colors.color5,
        height: metrics.dimensions.height * 0.35,
        width: metrics.dimensions.width,
        position: 'absolute',
        bottom: 0,
        padding: 10,
    },

    text: {
        fontFamily: metrics.fonts.default2Regular,
        color: metrics.colors.color3,
    },

    containDescription: {
        flexDirection: 'row',
    },

    containDescriptionRight: {
        paddingLeft: 10,
    },

    textTitle: {
        fontFamily: metrics.fonts.default2Bold,
    },

    textYearTime: {
        color: metrics.colors.color4,
    },

    img: {
        width: metrics.dimensions.width * 0.2,
        height: metrics.dimensions.height * 0.15,
        marginTop: 2,
    },
});

export default styles;
