import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: metrics.colors.color1,
    },
});

export default styles;
