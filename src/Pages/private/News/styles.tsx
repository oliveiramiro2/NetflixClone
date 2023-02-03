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
        marginHorizontal: 5,
        paddingTop: metrics.dimensions.height * 0.12,
        paddingBottom: metrics.dimensions.height * 0.01,
    },

    containItemSemiHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: metrics.colors.color5,
        marginLeft: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },

    containItemSemiHeaderSelected: {
        backgroundColor: metrics.colors.color3,
    },

    textSemiHeader: {
        fontFamily: metrics.fonts.defaultRegular,
        color: metrics.colors.color3,
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'bold',
    },

    textSemiHeaderSelected: {
        color: metrics.colors.color1,
        fontWeight: 'bold',
    },

    containPreviewSerie: {
        flexDirection: 'row',
        width: metrics.dimensions.width,
        justifyContent: 'center',
        marginTop: 40,
    },

    textDate: {
        fontFamily: metrics.fonts.default2Bold,
        fontSize: 20,
        color: metrics.colors.color3,
        width: metrics.dimensions.width * 0.15,
    },

    containTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: metrics.dimensions.width * 0.75,
        marginTop: 5,
    },

    textTitle: {
        fontFamily: metrics.fonts.default2Bold,
        fontSize: 30,
        color: metrics.colors.color3,
    },

    img: {
        width: metrics.dimensions.width * 0.8,
        height: metrics.dimensions.height * 0.3,
        padding: 10,
        resizeMode: 'cover',
    },

    containOverview: {
        width: metrics.dimensions.width * 0.75,
        marginTop: 15,
    },

    textOverview: {
        color: metrics.colors.color4,
    },
});

export default styles;
