import { Dimensions } from 'react-native';

export const metrics = {
    colors: {
        color1: '#000',
        color2: '#f00',
        color3: '#fff',
    },

    fonts: {
        defaultRegular: 'LemonMilkR',
        defaultLight: 'LemonMilkL',
        defaultMedium: 'LemonMilkM',
        defaultBold: 'LemonMilkB',
    },

    dimensions: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
};
