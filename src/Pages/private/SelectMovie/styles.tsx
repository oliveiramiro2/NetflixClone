import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: metrics.colors.color1,
    },

    text: {
        fontFamily: metrics.fonts.default2Regular,
        color: metrics.colors.color3,
    },
});

export default styles;
