import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Sae} from 'react-native-textinput-effects';
import Logo from '../components/Logo';

const styles = StyleSheet.create({
  customText: {
    color: '#5c4033',
  },
});

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    useCallback(() => {

      setEmail('')
      setPassword('')
    }, [])
  );

  const handleLogin = () => {
    if (email === 'test@test.com' && password === 'password') {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Error',
        'Something is wrong, check your credentials and try again',
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-amber-200 px-6">
      <View className="flex flex-col w-full space-y-4 justify-center items-center h-full">
        <Logo />
        <View className="w-full space-y-0">
          <Sae
            label={'Email Address'}
            labelStyle={styles.customText}
            inputStyle={styles.customText}
            iconClass={Icon}
            iconName={'address-card'}
            iconColor={'#5c4033 '}
            inputPadding={16}
            borderHeight={2}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Sae
            label={'Password'}
            labelStyle={styles.customText}
            inputStyle={styles.customText}
            iconClass={Icon}
            iconName={'key'}
            iconColor={'#5c4033 '}
            inputPadding={16}
            borderHeight={2}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="password"
          />
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-brown p-4 rounded w-full items-center flex flex-row justify-center space-x-2">
          <Icon name="sign-in" size={30} color="#FFFFFF" />
          <Text className="text-white text-lg">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
