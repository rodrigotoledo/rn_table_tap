This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start -- --reset-cache

# OR using Yarn
yarn start
```

### Tip

In linux (ubuntu...), you will need to install `adb` and run the following commands:

```bash
sudo apt-get install adb
```

And make the bridge available:

```bash
adb reverse tcp:9090 tcp:9090
adb reverse tcp:8081 tcp:8081
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# ISSUEs tips

First of all, start without cache:

```
npm start -- --reset-cache
```



## Icons

```
https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#react-native-web-setup
```

## react-native-gesture-handler

```
npm install react-native-gesture-handler
```

## moti

[https://moti.fyi/installation](https://moti.fyi/installation)

```bash
npm i moti --legacy-peer-deps
npm i react-native-reanimated
npm i react-native-gesture-handler
```

## fixes

```
I am also having same issue - React native - 0.70.6 react-native-screens - "^3.15.0"

instead of "^3.15.0" set "3.29.0" (without ^)
```

## Fonts

https://dev.to/mitchiemt11/custom-fonts-in-react-native-pro-tip-4693


# 📱 Building a Stunning React Native App with TailwindCSS: Smooth Navigation and Stylish Effects

## 1. Creating the Application
### Installing and Using TailwindCSS
- Learn how to set up TailwindCSS in your React Native project.
- Understand how to utilize TailwindCSS for styling components.

```bash
npx @react-native-community/cli@latest init TableTap
cd TableTap
```

**gradle**

Windows with error on last version of gradle, possible location:

```
android\gradle\wrapper\gradle-wrapper.propertie
```

Look for:

```
distributionUrl=https\://services.gradle.org/distributions/gradle-8.6-all.zip
```

Try change to:

```
distributionUrl=https://services.gradle.org/distributions/gradle-8.5-all.zip
```

Now run the project

```bash
npm start -- --reset-cache
```

**nativewind**

```bash
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
npx tailwindcss init
```

Loof for `tailwind.config.js` and add

```js
// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

And modify your babel.config.js

```js
// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ["nativewind/babel"],
};
```

### First Screen with a "Hello World"
- Create your first screen displaying a simple "Hello World" message.

in `screens/HomeScreen.jsx`

```jsx
import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex h-full items-center justify-center bg-gray-200">
      <Text className="text-lg text-gray-800">Hello, this is my component</Text>
    </View>
  );
};

export default HomeScreen;
```

and `App.jsx` just with

```jsx
import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
```

## 2. Navigation Between Screens

Visit https://reactnavigation.org/

And install

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler
```

### Login Screen with Fields and Enter Button
- Create a login screen with input fields for username and password.
- Add an enter button for user submission.

### Method for Proceeding with Correct or Incorrect Credentials
- Implement logic to check user credentials.
- Learn how to handle login success and failure scenarios.

### Proceed to the Home Screen if Credentials are Correct
- Navigate to the home screen upon successful login.

```jsx
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
} from 'react-native';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('password');

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
        <Text>Logo...</Text>
        <View className="w-full space-y-0">
          <TextInput
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email Address"
          />
          <TextInput
            placeholder={'Password'}
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
          className="bg-orange-500 p-4 rounded w-full items-center flex flex-row justify-center space-x-2">
          <Text className="text-white text-lg">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
```

```jsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
```

## 3. Icons, Colors, and Custom Fonts
### Install Icon Libraries
- Install and use popular icon libraries in your application.

```bash
npm install --save react-native-vector-icons
```

To make font management smoother on Android, use this method:

Edit `android/app/build.gradle` and add:

```
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

Integrating Library for getImageSource Support
The following steps are optional and are only necessary if you intend to utilize the Icon.getImageSource function.

Edit the `android/settings.gradle` file as shown below after `include ':app'`:

```
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```

### Refactoring `LoginScreen` with `Icon`

Add:

```jsx
import Icon from 'react-native-vector-icons/FontAwesome';
```

Inside the `Touch`

```jsx
<Icon name="sign-in" size={30} color="#FFFFFF" />
```

### Install Custom Fonts
- Add custom fonts to your project for a personalized look.

Download the `Anton.ttf` font from:

https://drive.google.com/file/d/1nto2oDnGY0KcbRt_DVfkoTZMwwJGkqwj/view?usp=drive_link

Create and paste the font inside:

`assets/fonts`

and

`android/app/src/main/assets/fonts`

In `tailwind.config.js` add font `Anton`

```js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton'],
      },
    },
  },
  plugins: [],
}
```

### Customize Colors
- Learn how to apply custom colors to various components in your application.

Again, in the `tailwind.config.js`:

```js
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          light: '#D2B48C',
          DEFAULT: '#A52A2A',
          dark: '#5C4033',
        },
      },
      fontFamily: {
        anton: ['Anton'],
      },
    },
  },
  plugins: [],
}
```

And in the `LoginScreen.jsx`

```jsx
<TouchableOpacity
   onPress={handleLogin}
   className="bg-brown p-4 rounded w-full items-center flex flex-row justify-center space-x-2">
   <Icon name="sign-in" size={30} color="#FFFFFF" />
   <Text className="text-white text-lg">Login</Text>
</TouchableOpacity>
```

## 4. Proper Home Screen Layout
### Organize Screen Spaces
- Structure the home screen layout for a clean and organized appearance.
- Install the package `@faker-js/faker` for dummy data
- Refact the 

```bash
npm install --save-dev @faker-js/faker
```

First create the `components` folder and the file `components/LocationItem.jsx` with faker data

```jsx
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
```

And refact the `HomeScreen.jsx`

```jsx
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {faker} from '@faker-js/faker';
import LocationItem from '../components/LocationItem';

const generateFakeData = num => {
  return Array.from({length: num}, () => ({
    id: faker.string.uuid(),
    photoUrl: faker.image.urlLoremFlickr({width: 128, height: 128}),
    address: faker.location.streetAddress({useFullAddress: true}),
    deliveryTime: faker.date.soon({days: 10}),
  }));
};

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
      <Text>Header...</Text>
      <Text>Logo...</Text>
      <View className="bg-white rounded-md p-4 mt-2 mb-2">
        <Text className="text-lg text-brown-dark mb-2 font-anton">
          Categories
        </Text>
        <View className="h-[100]">
          <Text>CategoryCarousel</Text>
        </View>
      </View>
      <View>
        <View className=" bg-white rounded-lg p-4 mb-2">
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

        <View className=" bg-white rounded-lg p-4">
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
```

## 5. Creating Logo Components
### Logo Component with Icon for Login
- Design a logo component that includes an icon specifically for the login screen.

Create `components/Logo.jsx` with:

```jsx
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
```

### Logo Component with Icon and Search for Home Screen
- Develop a logo component that includes an icon and a search feature for the home screen.

And `components/InternalLogo.jsx` with:

```jsx
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
```

And, finally reafct the screens `LoginScreen.jsx`and `HomeScreen.jsx` with the components

```jsx
import Logo from '../components/Logo';
// ....
<Logo />
```

```jsx
import InternalLogo from '../components/InternalLogo';
// ....
<InternalLogo />
```

## 6. Implement Different Inputs on Login
### Install Input Library with Icons
- Install a library that provides input fields with icons.
- Utilize the installed input components on the login screen for enhanced user experience.

Install the package

```bash
npm install react-native-textinput-effects --save
```

Refact the `LoginScreen`

```jsx
import React, {useState} from 'react';
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
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('password');

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
```

React the `HomeScreen` with `InternalLogo`:

```jsx
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {faker} from '@faker-js/faker';
import LocationItem from '../components/LocationItem';
import InternalLogo from '../components/InternalLogo';

const generateFakeData = num => {
  return Array.from({length: num}, () => ({
    id: faker.string.uuid(),
    photoUrl: faker.image.urlLoremFlickr({width: 128, height: 128}),
    address: faker.location.streetAddress({useFullAddress: true}),
    deliveryTime: faker.date.soon({days: 10}),
  }));
};

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
      <Text>Header...</Text>
      <InternalLogo />
      <View className="bg-white rounded-md p-4 mt-2 mb-2">
        <Text className="text-lg text-brown-dark mb-2 font-anton">
          Categories
        </Text>
        <View className="h-[100]">
          <Text>CategoryCarousel</Text>
        </View>
      </View>
      <View>
        <View className=" bg-white rounded-lg p-4 mb-2">
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

        <View className=" bg-white rounded-lg p-4">
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
```

## 7. Carousel on the Home Screen
### Install Moti and Other Libraries

```bash
npm install react-native-reanimated --save
```

And fix the `babel.config.js`

```js
module.exports = {
   presets: ['module:@react-native/babel-preset'],
  plugins: ["nativewind/babel", 'react-native-reanimated/plugin'],
};
```

- Set up Moti and necessary libraries for animations.

```bash
npm install moti --legacy-peer-deps
npm install @motify/core @motify/components --save
```

### Create Carousel Component
- Develop a carousel component to display rotating content on the home screen.

Create the component `CategoryCarousel`

```jsx
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
```

Refact the `HomeScreen` with `data` and add the `CategoryCarousel` component

```jsx
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
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
      <Text>Header...</Text>
      <InternalLogo />
      <View className="bg-white rounded-md p-4 mt-2 mb-2">
        <Text className="text-lg text-brown-dark mb-2 font-anton">
          Categories
        </Text>
        <View className="h-[100]">
          <CategoryCarousel items={data} />
        </View>
      </View>
      <View>
        <View className=" bg-white rounded-lg p-4 mb-2">
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

        <View className=" bg-white rounded-lg p-4">
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
```

## 8. Header with Logout
### Create Header Component
- Design a header component that includes a logout button.
- Implement navigation to the login screen when the logout button is pressed.

Create the component `HeaderBar` with:

```jsx
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
    <View className="w-full flex flex-row justify-between items-center p-2 bg-brown rounded-md">
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
```

Refact the `HomeScreen` component with the `HeaderBar` component

```jsx
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
      <View>
        <View className=" bg-white rounded-lg p-4 mb-2">
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

        <View className=" bg-white rounded-lg p-4">
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
```

## 9. Reafactoring the LoginScreen with callbacks

Clear inputs with callbacks with:

```jsx
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useCallback } from 'react';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    useCallback(() => {

      setEmail('')
      setPassword('')
    }, [])
  );
```
