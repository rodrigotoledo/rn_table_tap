import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="text-brown-dark text-lg">Bem-vindo à Página Inicial</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
