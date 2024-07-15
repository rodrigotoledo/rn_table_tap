import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Logo = () => {
  return (
    <View className="items-center justify-center">
      <Text className="text-brown-dark text-2xl font-anton">TableTap</Text>
      <View className="bg-brown w-40 h-40 rounded-full items-center justify-center overflow-hidden">
        <View className="w-full h-full items-center justify-center rounded-full">
          <Icon name="champagne-glasses" size={100} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};

export default Logo;
