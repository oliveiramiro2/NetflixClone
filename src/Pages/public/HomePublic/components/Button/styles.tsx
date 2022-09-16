import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../services/metrics';

const styles = StyleSheet.create({
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
