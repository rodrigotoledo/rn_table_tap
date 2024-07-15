import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LocationItem = ({item}) => {

  return (
    <View className="flex-row items-center space-y-2 space-x-2">
      <Image source={{uri: item.photoUrl}} className="w-10 h-10 rounded-md" />
      <View className="flex-1">
        <Text className="text-base text-brown-dark flex-shrink">
          {item.address}
        </Text>
        <Text className="text-sm text-gray-500">
          Delivery time: {Math.floor(Math.random() * 11)+1} hours
        </Text>
      </View>
      <TouchableOpacity className="bg-brown p-2 rounded-md flex flex-row items-center justify-center space-x-1">
        <Icon name="map-marker" size={20} color="#fff" />
        <Text className="text-white">More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationItem;
