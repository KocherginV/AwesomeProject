# AwesomeProject
Coursework done during [React Native course](https://frontendmasters.com/courses/react-native-v2/) from Frontend Masters. <br /> The app purpose is to show different
color palettes.

Application consists of three screens. On the first user can see color palette listing:
| iOS | Android |
|:-------:|:-------:|
| ![iOS](https://user-images.githubusercontent.com/23701921/229481402-d3bff731-18bb-4b79-a805-1b207018e7ec.png) | ![Android](https://user-images.githubusercontent.com/23701921/229481650-c5cdb8e6-89e8-4219-9ecb-799dd1ae476a.png) |

On the second screen user can create custom palette:
| iOS | Android |
|:-------:|:-------:|
| ![iOS](https://user-images.githubusercontent.com/23701921/229481442-e5ee50bf-0976-4819-8e21-982cbc1b96f4.png) | ![Android](https://user-images.githubusercontent.com/23701921/229481679-7c63b6bc-5240-4ccf-8c30-78c8aaeaddc2.png) |


Palette will be displayed on top of the list after creation:

| iOS | Android |
|:-------:|:-------:|
| ![iOS](https://user-images.githubusercontent.com/23701921/229481548-408c663e-685f-4360-a49f-29a614df73fa.png) | ![Android](https://user-images.githubusercontent.com/23701921/229481700-b5704eb2-86f9-48e3-b93b-a8ee84a7d4cd.png) |

If user taps on palette on the home screen, palette details will be opened on the third screen.

| iOS | Android |
|:-------:|:-------:|
| ![iOS](https://user-images.githubusercontent.com/23701921/229746983-38c9321a-0eab-42c5-a227-1efcc40fb1e6.png) | ![Android](https://user-images.githubusercontent.com/23701921/229747036-45010677-5649-4f13-ac94-99a101f64fb8.png) |

# To run project
<h3>Prerequisites:</h3>

 - [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) & [Android Studio](https://developer.android.com/studio) downloaded and running successfully
 - React Native CLI environment setup [guide](https://reactnative.dev/docs/environment-setup) followed thoroughly

<h3>Starting project:</h3>
<h4>iOS: </h4>

**First way:**

 - In terminal navigate to AwesomeProject dir 
 - Run: `npx react-native run-ios` 

**Second way:**
 
  - Open project in XCode
  - Select device 
  - Hit run button
 
 <h4>Android:</h4>
 
  - Launch emulator from Android studio, 
  - Navigate to AwesomeProject dir 
  - Run: `npx react-native run-android`

# To run tests
<h3>Component tests:</h3>
WIP

<h3>End-to-end tests</h3>

[Detox](https://wix.github.io/Detox/) is used as E2E testing tool.<br />
Run following comand in the project's folder:
`npm run e2e`. <br/> Please note, at the moment E2E tests can be ran only on iOS device, Android support is TBD.

# Troubleshooting
If you have issues with setting up or running project, please refer to:

 - Course [website](https://kadikraman.github.io/react-native-v2/setup-rn)
 - React native env setup [guide](https://reactnative.dev/docs/environment-setup)
