import { StyleSheet } from 'react-native';
import { metrics } from '../../services/metrics';

const styles = StyleSheet.create({
    headerContain: {
        backgroundColor: '#000000b6',
    },

    containText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: metrics.dimensions.width * 0.5,
    },

    textRight: {
        fontFamily: metrics.fonts.defaultBold,
        color: metrics.colors.color3,
    },

    img: {
        width: metrics.dimensions.width * 0.25,
        height: metrics.dimensions.height * 0.04,
        resizeMode: 'cover',
    },

    containArrowBack: {
        flexDirection: 'row',
        position: 'relative',
        right: 55,
    },

    img2: {
        width: metrics.dimensions.width * 0.25,
        height: metrics.dimensions.height * 0.04,
        resizeMode: 'cover',
        marginLeft: 15,
    },
});

export default styles;
