import { StyleSheet } from 'react-native';
import { metrics } from '../../services/metrics';

const styles = StyleSheet.create({
    headerContain: {
        backgroundColor: '#000000b6',
    },

    containTab: {
        backgroundColor: metrics.colors.color1,
        borderTopWidth: 2,
        borderTopColor: metrics.colors.color1,
    },

    img: {
        width: metrics.dimensions.width * 0.25,
        height: metrics.dimensions.height * 0.04,
        position: 'relative',
        left: metrics.dimensions.width * 0.33,
        resizeMode: 'cover',
    },

    containIcons: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },

    text: {
        color: metrics.colors.color4,
        fontSize: 10,
        fontFamily: metrics.fonts.default2Thin,
        fontWeight: '700',
    },
});

export default styles;
