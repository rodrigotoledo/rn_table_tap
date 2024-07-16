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

## gradle

Windows with error on last version of gradle:

Possible location:

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



# 📱 Creating a Mobile Application in React Native with Quality and Effects

## 1. Creating the Application
### Installing and Using TailwindCSS
- Learn how to set up TailwindCSS in your React Native project.
- Understand how to utilize TailwindCSS for styling components.

### First Screen with a "Hello World"
- Create your first screen displaying a simple "Hello World" message.

## 2. Navigation Between Screens
### Login Screen with Fields and Enter Button
- Create a login screen with input fields for username and password.
- Add an enter button for user submission.

### Method for Proceeding with Correct or Incorrect Credentials
- Implement logic to check user credentials.
- Learn how to handle login success and failure scenarios.

### Proceed to the Home Screen if Credentials are Correct
- Navigate to the home screen upon successful login.

## 3. Icons, Colors, and Custom Fonts
### Install Icon Libraries
- Install and use popular icon libraries in your application.

### Install Custom Fonts
- Add custom fonts to your project for a personalized look.

### Customize Colors
- Learn how to apply custom colors to various components in your application.

## 4. Proper Home Screen Layout
### Organize Screen Spaces
- Structure the home screen layout for a clean and organized appearance.

### Add Elements with Placeholder Data
- Populate your home screen with elements using dummy data.

## 5. Creating Logo Components
### Logo Component with Icon for Login
- Design a logo component that includes an icon specifically for the login screen.

### Logo Component with Icon and Search for Home Screen
- Develop a logo component that includes an icon and a search feature for the home screen.

## 6. Implement Different Inputs on Login
### Install Input Library with Icons
- Install a library that provides input fields with icons.

### Apply to Login Screen
- Utilize the installed input components on the login screen for enhanced user experience.

## 7. Carousel on the Home Screen
### Install Faker
- Use Faker to generate fake data for your carousel.

### Install Moti and Other Libraries
- Set up Moti and necessary libraries for animations.

### Create Carousel Component
- Develop a carousel component to display rotating content on the home screen.

## 8. Header with Logout
### Create Header Component
- Design a header component that includes a logout button.

### Navigation to Login on Logout Button Press
- Implement navigation to the login screen when the logout button is pressed.
