import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const InternalLogo = () => {
  return (
    <View className="items-center justify-center">
      <Text className="text-brown-dark text-2xl font-anton">TableTap</Text>
      <View className="bg-brown rounded-full w-16 h-16 items-center justify-center overflow-hidden shadow shadow-black">
        <View className="w-full h-full items-center justify-center rounded-full">
          <Icon name="champagne-glasses" size={24} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};

export default InternalLogo;
