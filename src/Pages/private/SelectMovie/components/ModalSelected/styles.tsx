import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../services/metrics';

const styles = StyleSheet.create({
    containClose: {
        flex: 1,
    },

    contain: {
        backgroundColor: metrics.colors.color5,
        height: metrics.dimensions.height * 0.35,
        width: metrics.dimensions.width,
        position: 'absolute',
        bottom: 0,
        padding: 10,
    },

    text: {
        fontFamily: metrics.fonts.default2Regular,
        color: metrics.colors.color3,
    },

    containDescription: {
        flexDirection: 'row',
    },

    containDescriptionRight: {
        paddingLeft: 10,
    },

    textTitle: {
        fontFamily: metrics.fonts.default2Bold,
    },

    textYearTime: {
        color: metrics.colors.color4,
    },

    img: {
        width: metrics.dimensions.width * 0.2,
        height: metrics.dimensions.height * 0.15,
        marginTop: 2,
    },

    imgAdult: {
        width: 18,
        height: 18,
        marginLeft: 5,
        marginTop: 2,
    },

    textOverview: {
        maxWidth: metrics.dimensions.width * 0.7,
        marginTop: 2,
    },

    containActions: {
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    containActionsIconsText: {
        alignItems: 'center',
    },

    line: {
        height: 1,
        backgroundColor: metrics.colors.color4,
        marginVertical: 5,
    },

    containMoreInfo: {
        marginTop: 5,
        justifyContent: 'space-between',
    },

    containMoreInfoIconText: {
        alignItems: 'center',
    },

    textMoreInfo: {
        marginLeft: 5,
    },
});

export default styles;
