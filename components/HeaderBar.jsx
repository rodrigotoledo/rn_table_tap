import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const HeaderBar = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="w-full flex flex-row justify-between items-center p-2 bg-brown-dark rounded-md">
      <Text className="text-white font-anton">Hi, Username...</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="flex flex-row items-center">
        <Text className="text-white mr-2">Logout</Text>
        <Icon name="right-from-bracket" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
