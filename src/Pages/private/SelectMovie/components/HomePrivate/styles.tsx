import { StyleSheet } from 'react-native';
import { metrics } from '../../../../../services/metrics';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: metrics.colors.color1,
    },

    containContent: {
        flex: 1,
        marginHorizontal: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    containTitle: {
        marginTop: metrics.dimensions.height * 0.2,
        marginBottom: 30,
    },

    textTitle: {
        fontFamily: metrics.fonts.default2Regular,
        fontSize: 21,
        color: metrics.colors.color4,
        fontWeight: '400',
    },

    containImg: {
        width: metrics.dimensions.width * 0.3,
        height: metrics.dimensions.height * 0.15,
        marginBottom: metrics.dimensions.height * 0.04,
        borderRadius: 6,
        marginLeft: 20,
    },

    lastOneContainImg: {
        width: metrics.dimensions.width - 100,
        alignSelf: 'flex-start',
    },

    img: {
        width: metrics.dimensions.width * 0.25,
        height: metrics.dimensions.height * 0.12,
        borderRadius: 6,
    },

    textNameUser: {
        fontFamily: metrics.fonts.default2Regular,
        color: metrics.colors.color4,
        textAlign: 'center',
        marginRight: 10,
        marginTop: 5,
        fontSize: 10,
    },

    lastOneTextNameUser: {
        textAlign: 'left',
        marginLeft: metrics.dimensions.width * 0.055,
    },
});

export default styles;
