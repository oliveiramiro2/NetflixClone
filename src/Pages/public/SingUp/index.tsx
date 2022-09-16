import {
    View,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import styles from './styles';

const SingUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <View style={[styles.contain]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView style={[styles.containContent]}>
                    <View style={[styles.MT5]}>
                        <View style={[styles.containLabel]}>
                            <Text style={[styles.textLabel]}>Email</Text>
                        </View>
                        <TextInput
                            defaultValue={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={[styles.input]}
                            ref={(ref) => {
                                if (
                                    ref !== undefined &&
                                    ref &&
                                    !ref.isFocused()
                                ) {
                                    setTimeout(() => ref.focus(), 100);
                                }
                            }}
                        />
                    </View>
                    <View style={[styles.MT5]}>
                        <View style={[styles.containLabel]}>
                            <Text style={[styles.textLabel]}>Senha</Text>
                        </View>
                        <TextInput
                            style={[styles.input]}
                            defaultValue={password}
                            autoCapitalize="none"
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <View style={[styles.containButton]}>
                        <TouchableOpacity>
                            <Text style={[styles.textButton]}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containNeededHelp]}>
                        <TouchableOpacity>
                            <Text style={[styles.textNeededHelp]}>
                                Precisa de ajuda?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containNewUser]}>
                        <TouchableOpacity>
                            <Text
                                style={[
                                    styles.textNeededHelp,
                                    styles.textNewUser,
                                ]}
                            >
                                Novo por aqui? Inscreva-se agora.
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containNewUser, styles.containInfoRC]}>
                        <Text style={[styles.textInfoRC]}>
                            O acesso está protegido pelo Google reCAPTCHA para
                            garantir que você não é um robô.
                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

export default SingUp;