import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';

import styles from './styles';
import { gamesShow } from '../../../services/Utils';
import { metrics } from '../../../services/metrics';

const gamesImage = require('../../../assets/imgs/games.png');

const GameExample: React.FC = () => (
    <View style={[styles.containGameExample]}>
        <Image
            source={{
                uri: `https://api.lorem.space/image/game?w=${
                    Math.round(Math.random() * metrics.dimensions.width) + 20
                }&amp;amp;amp;amp;h=${
                    Math.round(Math.random() * metrics.dimensions.height) + 20
                }`,
            }}
            resizeMode="cover"
            style={[styles.imgGameExample]}
        />
        <View style={[styles.containSmallImg]}>
            <Image
                source={{
                    uri: `https://api.lorem.space/image/game?w=${
                        Math.round(Math.random() * metrics.dimensions.width) +
                        20
                    }&amp;amp;amp;amp;h=${
                        Math.round(Math.random() * metrics.dimensions.height) +
                        20
                    }`,
                }}
                resizeMode="cover"
                style={[styles.imgGameSmall]}
            />
            <View style={[styles.containTextGame]}>
                <Text style={[styles.textGameTitle]}>Lorem Ipsum</Text>
                <Text style={[styles.textGameUnder]}>Lorem</Text>
            </View>
        </View>
    </View>
);

const Games: React.FC = () => (
    <ScrollView style={[styles.contain]} showsVerticalScrollIndicator={false}>
        <Image source={gamesImage} resizeMode="cover" style={[styles.img]} />
        <View style={[styles.containContent]}>
            <View style={[styles.containGames]}>
                <Text style={[styles.textTitle]}>Lançados recentemente</Text>
                <FlatList
                    data={gamesShow}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={() => (
                        <View style={[styles.containGamesImg]}>
                            <Image
                                source={{
                                    uri: `https://api.lorem.space/image/game?w=${
                                        Math.round(
                                            Math.random() *
                                                metrics.dimensions.width
                                        ) + 20
                                    }&amp;amp;amp;amp;h=${
                                        Math.round(
                                            Math.random() *
                                                metrics.dimensions.height
                                        ) + 20
                                    }`,
                                }}
                                resizeMode="cover"
                                style={[styles.imgGames]}
                            />
                            <Text style={[styles.textUnderImg]}>
                                Lorem Ipsum
                            </Text>
                            <Text style={[styles.textGener]}>Lorem</Text>
                        </View>
                    )}
                />
            </View>
            <View style={[styles.containGames]}>
                <Text style={[styles.textTitle]}>
                    Jogos para celulaes e tables
                </Text>
                <FlatList
                    data={gamesShow}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={() => (
                        <View style={[styles.containGamesImg]}>
                            <Image
                                source={{
                                    uri: `https://api.lorem.space/image/game?w=${
                                        Math.round(
                                            Math.random() *
                                                metrics.dimensions.width
                                        ) + 20
                                    }&amp;amp;amp;amp;h=${
                                        Math.round(
                                            Math.random() *
                                                metrics.dimensions.height
                                        ) + 20
                                    }`,
                                }}
                                resizeMode="cover"
                                style={[styles.imgGames]}
                            />
                            <Text style={[styles.textUnderImg]}>
                                Lorem Ipsum
                            </Text>
                        </View>
                    )}
                />
            </View>
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
            <GameExample />
        </View>
    </ScrollView>
);

export default Games;
