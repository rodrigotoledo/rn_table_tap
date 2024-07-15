import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InternalLogo from '../components/InternalLogo';
import {faker} from '@faker-js/faker';
import LocationItem from '../components/LocationItem';
import CategoryCarousel from '../components/CategoryCarousel';

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

const CustomerHomeScreen = () => {
  const [foodThoughts, setFoodThoughts] = useState('');
  const [categories, setCategories] = useState([]);
  const [recommendedData, setRecommendedData] = useState([]);
  const [frequentData, setFrequentData] = useState([]);
  const [recommendedPage, setRecommendedPage] = useState(1);
  const [frequentPage, setFrequentPage] = useState(1);

  const fetchRecommendedData = async () => {
    const newData = generateFakeData(10);
    setRecommendedData(prevData => [...prevData, ...newData]);
  };

  const fetchFrequentData = async () => {
    const newData = generateFakeData(10);
    setFrequentData(prevData => [...prevData, ...newData]);
  };

  useEffect(() => {
    fetchRecommendedData();
  }, [recommendedPage]);

  useEffect(() => {
    setCategories(data);
  }, []);

  useEffect(() => {
    fetchFrequentData();
  }, [frequentPage]);

  return (
    <SafeAreaView className="bg-brown-light flex p-2 h-full pb-4">
      <View className="flex flex-row items-center justify-around w-full">
        <InternalLogo />
        <View>
          <Text className="text-brown-dark mb-2 font-anton">
            What are you thinking of ordering?
          </Text>
          <View className="flex flex-col w-full">
            <TextInput
              className="bg-white p-2 rounded-t-md w-fit h-[80]"
              placeholder="Just type here..."
              value={foodThoughts}
              onChangeText={setFoodThoughts}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
            <TouchableOpacity className="bg-brown w-full rounded-b-md justify-center items-center p-2">
              <Icon name="search-plus" size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-md p-4 mt-2 mb-2">
        <Text className="text-lg text-brown-dark mb-2 font-anton">
          Categories
        </Text>
        <View className="h-[100]">
          <CategoryCarousel items={categories} />
        </View>
      </View>
      <View className="flex-1">
        <View className="h-1/2 bg-white rounded-lg p-4 mb-2">
          <Text className="text-lg text-brown-dark mb-2 font-anton">
            Recommended Based on Location
          </Text>
          <FlatList
            data={recommendedData}
            renderItem={({item}) => <LocationItem item={item} />}
            keyExtractor={item => item.id}
            onEndReached={() => setRecommendedPage(prevPage => prevPage + 1)}
            onEndReachedThreshold={0.5}
          />
        </View>

        <View className="h-1/2 bg-white rounded-lg p-4">
          <Text className="text-lg text-brown-dark mb-2 font-anton">
            Frequent Locations
          </Text>
          <FlatList
            data={frequentData}
            renderItem={({item}) => <LocationItem item={item} />}
            keyExtractor={item => item.id}
            onEndReached={() => setFrequentPage(prevPage => prevPage + 1)}
            onEndReachedThreshold={0.5}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomerHomeScreen;
