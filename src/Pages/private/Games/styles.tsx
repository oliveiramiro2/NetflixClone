import { StyleSheet } from 'react-native';
import { metrics } from '../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: metrics.colors.color1,
        paddingTop: metrics.dimensions.height * 0.12,
        padding: 5,
    },

    img: {
        width: metrics.dimensions.width,
        height: metrics.dimensions.height * 0.6,
        resizeMode: 'cover',
    },

    containContent: {
        marginBottom: 120,
    },

    containGames: {
        marginTop: 20,
        marginLeft: 10,
    },

    textTitle: {
        fontFamily: metrics.fonts.defaultBold,
        color: metrics.colors.color3,
        fontSize: 12,
        marginBottom: 10,
    },

    containGamesImg: {
        marginRight: 20,
    },

    imgGames: {
        width: 100,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    textUnderImg: {
        fontFamily: metrics.fonts.defaultRegular,
        color: metrics.colors.color3,
        marginTop: 10,
    },

    textGener: {
        fontFamily: metrics.fonts.defaultRegular,
        color: metrics.colors.color4,
        marginTop: 10,
        fontSize: 10,
    },

    containGameExample: {
        marginTop: 30,
    },

    imgGameExample: {
        width: '95%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        alignSelf: 'center',
    },

    containSmallImg: {
        marginTop: 10,
        flexDirection: 'row',
    },

    imgGameSmall: {
        width: 80,
        height: 80,
        marginLeft: 10,
        borderRadius: 15,
    },

    containTextGame: {
        marginTop: 10,
        marginLeft: 15,
    },

    textGameTitle: {
        color: metrics.colors.color3,
    },

    textGameUnder: {
        color: metrics.colors.color4,
    },
});

export default styles;
