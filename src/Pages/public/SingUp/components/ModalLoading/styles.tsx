import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: metrics.colors.color1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        width: metrics.dimensions.width * 0.4,
        height: metrics.dimensions.height * 0.12,
        resizeMode: 'contain',
    },
});

export default styles;
