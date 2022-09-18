import { StyleSheet } from 'react-native';
import { metrics } from '../../services/metrics';

const styles = StyleSheet.create({
    headerContain: {
        backgroundColor: metrics.colors.color1,
    },

    containImg: {
        position: 'relative',
        left: metrics.dimensions.width * 0.33,
    },

    img: {
        width: metrics.dimensions.width * 0.25,
        height: metrics.dimensions.height * 0.04,
        resizeMode: 'cover',
    },
});

export default styles;
