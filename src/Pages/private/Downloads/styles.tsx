import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: metrics.colors.color1,
    },

    containContent: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: metrics.colors.color1,
        margin: 5,
        paddingTop: metrics.dimensions.height * 0.12,
        paddingBottom: metrics.dimensions.height * 0.01,
    },

    containSmart: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ml5: {
        marginLeft: 8,
    },

    containDescribe: {
        marginTop: 40,
        paddingHorizontal: 15,
    },

    textSmart: {
        fontFamily: metrics.fonts.defaultRegular,
        fontSize: 15,
        color: metrics.colors.color4,
    },

    TextTitle: {
        fontFamily: metrics.fonts.defaultRegular,
        fontSize: 15,
        color: metrics.colors.color3,
        marginBottom: 10,
    },

    textDescribe: {
        fontSize: 12,
    },

    imgDownload: {
        width: metrics.dimensions.width - 50,
        height: metrics.dimensions.height * 0.38,
        resizeMode: 'cover',
        marginTop: 50,
    },

    buttonBlue: {
        width: metrics.dimensions.width - 20,
        backgroundColor: '#2361e7',
        height: 45,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
    },

    textButton1: {
        color: metrics.colors.color3,
        fontWeight: 'bold',
    },

    buttonGray: {
        backgroundColor: metrics.colors.color5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 40,
        alignSelf: 'center',
        borderRadius: 5,
    },

    textButton2: {
        color: metrics.colors.color3,
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default styles;
