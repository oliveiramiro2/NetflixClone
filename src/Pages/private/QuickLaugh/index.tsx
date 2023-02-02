import {
    View,
    Text,
    FlatList,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Feather, FontAwesome, Octicons } from '@expo/vector-icons';

import { videoQL } from '../../../services/Utils';
import { metrics } from '../../../services/metrics';
import styles from './styles';

interface IPropsVideoQl {
    mute: boolean;
    setMute: Function;
}

const VideoQL: React.FC<IPropsVideoQl> = ({ mute, setMute }) => (
    <View style={[styles.containQL]}>
        <ImageBackground
            source={{
                uri: `https://api.lorem.space/image/movie?w=${
                    Math.round(Math.random() * 1960) + 40
                }&h=${Math.round(Math.random() * 1960) + 40}`,
            }}
            resizeMode="cover"
            style={[styles.containShort]}
        >
            <View style={[styles.containAge]}>
                <Text style={[styles.text]}>L</Text>
            </View>
            <View style={[styles.containIconsRight]}>
                <Image
                    source={{ uri: 'https://api.lorem.space/image/face' }}
                    style={[styles.containIconAvatar]}
                />
                <View style={[styles.containIconRight]}>
                    <AntDesign name="smile-circle" size={30} color="#fff" />
                    <Text style={[styles.text, styles.textIconsRight]}>
                        LOL
                    </Text>
                </View>
                <View style={[styles.containIconRight]}>
                    <AntDesign name="plus" size={30} color="#fff" />
                    <Text style={[styles.text, styles.textIconsRight]}>
                        Minha lista
                    </Text>
                </View>
                <View style={[styles.containIconRight]}>
                    <Feather name="send" size={30} color="#fff" />
                    <Text style={[styles.text, styles.textIconsRight]}>
                        Compartilhe
                    </Text>
                </View>
                <View style={[styles.containIconRight]}>
                    <FontAwesome name="play" size={30} color="#fff" />
                    <Text style={[styles.text, styles.textIconsRight]}>
                        Assistir
                    </Text>
                </View>
            </View>
            <View style={[styles.containIconLeft]}>
                <TouchableOpacity onPress={() => setMute(!mute)}>
                    <Octicons
                        name={mute ? 'unmute' : 'mute'}
                        size={30}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
);

const QuickLaugh: React.FC = () => {
    const [mute, setMute] = useState<boolean>(false);

    return (
        <View style={[styles.contain]}>
            <FlatList
                data={videoQL}
                keyExtractor={(i) => i.id.toString()}
                renderItem={() => <VideoQL mute={mute} setMute={setMute} />}
                snapToInterval={metrics.dimensions.height}
                snapToAlignment="end"
                decelerationRate="fast"
            />
        </View>
    );
};

export default QuickLaugh;
