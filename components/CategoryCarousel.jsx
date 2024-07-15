import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {MotiView} from 'moti';

const CategoryItem = ({item}) => (
  <View className="items-center">
    <TouchableOpacity className="w-16 h-16 bg-brown rounded-full items-center justify-center mb-2">
      <Icon name={item.iconName} size={40} color="#FFFFFF" />
    </TouchableOpacity>
    <Text className="text-brown-dark font-anton">{item.label}</Text>
  </View>
);

const CategoryCarousel = ({items}) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < 4; i++) {
      visibleItems.push(items[(index + i) % items.length]);
    }
    return visibleItems;
  };

  return (
    <View className="items-center justify-center flex-row flex space-x-2">
      <TouchableOpacity onPress={handlePrev}>
        <Icon name="angle-left" size={30} color="#A52A2A" />
      </TouchableOpacity>
      <View className="flex flex-row justify-between space-x-2">
        {getVisibleItems().map((item, i) => (
          <MotiView
            from={{opacity: 0, translateY: 10, scale: 0.9}}
            animate={{opacity: 1, translateY: 0, scale: 1}}
            exit={{opacity: 0, translateY: 10, scale: 0.9}}
            transition={{
              type: 'timing',
              duration: 200,
              delay: i * 200,
            }}
            key={item.label}>
            <CategoryItem item={item} />
          </MotiView>
        ))}
      </View>
      <TouchableOpacity onPress={handleNext}>
        <Icon name="angle-right" size={30} color="#A52A2A" />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCarousel;
