import { StyleSheet } from 'react-native';
import { metrics } from '../../services/metrics';

const styles = StyleSheet.create({
    headerContain: {
        backgroundColor: '#ff0000',
    },

    containTab: {
        backgroundColor: metrics.colors.color1,
        borderTopWidth: 2,
        borderTopColor: metrics.colors.color1,
    },

    img: {
        width: metrics.dimensions.width * 0.13,
        height: metrics.dimensions.height * 0.05,
        marginLeft: 10,
        marginTop: 5,
        resizeMode: 'cover',
    },

    imgUser: {
        width: metrics.dimensions.width * 0.1,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 30,
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

    textTitle: {
        color: metrics.colors.color3,
        fontWeight: 'bold',
    },
});

export default styles;
