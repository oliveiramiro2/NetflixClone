import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },

    containQL: {
        flex: 1,
        height: metrics.dimensions.height,
    },

    text: {
        fontFamily: metrics.fonts.defaultRegular,
        color: metrics.colors.color3,
    },

    containShort: {
        flex: 1,
    },

    containAge: {
        position: 'absolute',
        right: 20,
        top: 50,
        backgroundColor: '#000000a6',
        padding: 5,
        borderRadius: 2,
    },

    containIconsRight: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containIconAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 30,
    },

    textIconsRight: {
        fontSize: 12,
        marginTop: 10,
    },

    containIconRight: {
        marginBottom: 20,
        alignItems: 'center',
    },

    containIconLeft: {
        position: 'absolute',
        left: 20,
        bottom: 40,
    },
});

export default styles;
