import { StyleSheet, Dimensions } from 'react-native';
import { metrics } from '../../services/metrics';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerContain: {
        backgroundColor: metrics.colors.color1,
    },

    containText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.5,
    },

    textRight: {
        fontFamily: metrics.fonts.defaultBold,
        color: metrics.colors.color3,
    },

    picture: {
        width: width * 0.3,
        height: height * 0.05,
        resizeMode: 'cover',
    },
});

export default styles;
