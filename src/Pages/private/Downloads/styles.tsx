import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: metrics.colors.color1,
    },

    text: {
        fontFamily: metrics.fonts.defaultRegular,
        color: metrics.colors.color4,
    },
});

export default styles;
