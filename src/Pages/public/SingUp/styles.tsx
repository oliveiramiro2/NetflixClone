import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: metrics.colors.color1,
        paddingTop: 100,
    },

    containContent: {
        paddingHorizontal: 20,
    },

    containLabel: {
        position: 'relative',
        top: 20,
        left: 10,
        zIndex: 99,
    },

    textBigLabel: {
        fontSize: 18,
    },

    textLabel: {
        color: metrics.colors.color3,
        fontSize: 13,
        textDecorationLine: 'underline',
    },

    input: {
        borderWidth: 2,
        borderColor: metrics.colors.color3,
        width: metrics.dimensions.width - 40,
        borderRadius: 5,
        height: 55,
        padding: 10,
        backgroundColor: metrics.colors.color4,
        paddingTop: 25,
        color: metrics.colors.color3,
        fontSize: 18,
    },

    containButton: {
        borderWidth: 2,
        borderColor: metrics.colors.color3,
        width: '100%',
        marginTop: 25,
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        fontFamily: metrics.fonts.defaultRegular,
        color: metrics.colors.color3,
        fontSize: 15,
    },

    containNeededHelp: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textNeededHelp: {
        color: metrics.colors.color4,
        fontSize: 16,
    },

    containNewUser: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textNewUser: {
        color: metrics.colors.color3,
    },

    containInfoRC: {
        marginTop: 40,
    },

    textInfoRC: {
        fontSize: 12,
        color: metrics.colors.color4,
        textAlign: 'center',
    },

    MT5: {
        marginTop: 5,
    },
});

export default styles;
