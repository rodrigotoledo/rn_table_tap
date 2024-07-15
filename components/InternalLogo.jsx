import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const InternalLogo = () => {
  const [foodThoughts, setFoodThoughts] = useState('');

  return (
    <View className="flex flex-row items-center justify-around w-full">
      <View className="items-center justify-center">
        <Text className="text-brown-dark text-2xl font-anton">TableTap</Text>
        <View className="bg-brown rounded-full w-16 h-16 items-center justify-center overflow-hidden shadow shadow-black">
          <View className="w-full h-full items-center justify-center rounded-full">
            <Icon name="champagne-glasses" size={24} color="#FFFFFF" />
          </View>
        </View>
      </View>
      <View>
        <Text className="text-brown-dark mb-2 font-anton">
          What are you thinking of ordering?
        </Text>
        <View className="flex flex-col w-full">
          <TextInput
            className="bg-white p-2 rounded-t-md w-fit h-[60]"
            placeholder="Just type here..."
            value={foodThoughts}
            onChangeText={setFoodThoughts}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
          <TouchableOpacity className="bg-brown w-full rounded-b-md justify-center items-center p-2">
            <Icon name="magnifying-glass-plus" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InternalLogo;

<InternalLogo />;
