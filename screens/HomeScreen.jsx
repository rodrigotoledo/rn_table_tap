import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import InternalLogo from '../components/InternalLogo';
import {faker} from '@faker-js/faker';
import LocationItem from '../components/LocationItem';
import CategoryCarousel from '../components/CategoryCarousel';
import HeaderBar from '../components/HeaderBar';

const generateFakeData = num => {
  return Array.from({length: num}, () => ({
    id: faker.string.uuid(),
    photoUrl: faker.image.urlLoremFlickr({width: 128, height: 128}),
    address: faker.location.streetAddress({useFullAddress: true}),
    deliveryTime: faker.date.soon({days: 10}),
  }));
};

const data = [
  {iconName: 'burger', iconType: 'FontAwesome', label: 'Fast Food'},
  {iconName: 'spoon', iconType: 'FontAwesome', label: 'Japanese'},
  {iconName: 'utensils', iconType: 'FontAwesome', label: 'Romantic'},
  {iconName: 'users', iconType: 'FontAwesome', label: 'Public Places'},
  {iconName: 'mug-hot', iconType: 'FontAwesome', label: 'Coffee'},
  {iconName: 'ice-cream', iconType: 'FontAwesome', label: 'Desserts'},
  {iconName: 'leaf', iconType: 'FontAwesome', label: 'Vegetarian'},
  {iconName: 'pizza-slice', iconType: 'FontAwesome', label: 'Pizza'},
  {iconName: 'anchor', iconType: 'FontAwesome', label: 'Seafood'},
];

const HomeScreen = () => {
  const [recommendedData, setRecommendedData] = useState([]);
  const [frequentData, setFrequentData] = useState([]);

  const fetchRecommendedData = async () => {
    const newData = generateFakeData(10);
    setRecommendedData(newData);
  };

  const fetchFrequentData = async () => {
    const newData = generateFakeData(10);
    setFrequentData(newData);
  };

  useEffect(() => {
    fetchRecommendedData();
  }, []);

  useEffect(() => {
    fetchFrequentData();
  }, []);

  return (
    <SafeAreaView className="bg-brown-light flex p-2 h-full pb-4">
      <HeaderBar />
      <InternalLogo />
      <View className="bg-white rounded-md p-4 mt-2 mb-2">
        <Text className="text-lg text-brown-dark mb-2 font-anton">
          Categories
        </Text>
        <View className="h-[100]">
          <CategoryCarousel items={data} />
        </View>
      </View>
      <View className="flex-1">
        <View className=" bg-white rounded-lg p-4 mb-2 h-1/2">
          <Text className="text-lg text-brown-dark mb-2 font-anton">
            Recommended Based on Location
          </Text>
          <FlatList
            style={{height: 120}}
            data={recommendedData}
            renderItem={({item}) => <LocationItem item={item} />}
            keyExtractor={item => item.id}
          />
        </View>

        <View className=" bg-white rounded-lg p-4 h-1/2">
          <Text className="text-lg text-brown-dark mb-2 font-anton">
            Frequent Locations
          </Text>
          <FlatList
            style={{height: 120}}
            data={frequentData}
            renderItem={({item}) => <LocationItem item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
