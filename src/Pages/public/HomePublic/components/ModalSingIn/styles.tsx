import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },

    containClose: {
        height: metrics.dimensions.height * 0.15,
        width: metrics.dimensions.width,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    containContent: {
        width: metrics.dimensions.width,
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    textTitle: {
        fontFamily: metrics.fonts.defaultMedium,
        fontSize: 22,
        textAlign: 'center',
        letterSpacing: 1.2,
    },

    textSubtitle: {
        fontFamily: metrics.fonts.defaultRegular,
        fontSize: 12,
        color: metrics.colors.color4,
        marginTop: 20,
        textAlign: 'center',
    },

    containLabel: {
        position: 'relative',
        top: 20,
        left: 10,
    },

    textLabel: {
        color: metrics.colors.color4,
        fontSize: 13,
    },

    input: {
        borderWidth: 1,
        borderColor: '#0059ff',
        width: metrics.dimensions.width - 40,
        height: 55,
        padding: 10,
        paddingTop: 25,
    },

    rightEmail: {
        borderColor: '#07bd07',
    },

    textWWrongEmail: {
        color: metrics.colors.color2,
        fontFamily: 'Roboto',
        marginTop: 5,
    },

    containButton: { marginTop: 20, width: '100%' },
});

export default styles;
