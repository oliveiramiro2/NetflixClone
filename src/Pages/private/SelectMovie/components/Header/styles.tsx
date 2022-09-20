import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: metrics.colors.color1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: metrics.dimensions.height * 0.2,
        width: metrics.dimensions.width,
        position: 'absolute',
        top: 0,
        padding: 20,
    },

    img: {
        width: metrics.dimensions.width * 0.4,
        height: metrics.dimensions.height * 0.08,
        resizeMode: 'stretch',
    },
});

export default styles;
