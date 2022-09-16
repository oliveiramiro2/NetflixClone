import { Dimensions } from 'react-native';

export const metrics = {
    colors: {
        color1: '#000',
        color2: '#f00',
        color3: '#fff',
        color4: '#a9a9a9',
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
