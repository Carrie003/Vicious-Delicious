# Vicious Delicious

Vicious Delicious is a recipe discovery app designed to help you learn about, and share, tasty recipes. It is a cross-platform appplication that can run on iOS and Android.

To access the full code of the application, visit the project page: https://github.com/waschbar01/Vicious-Delicious

To access the server code, visit our back-end repository: https://github.com/waschbar01/Vicious-Server

___
Authors

- Tianyou Li
- Xinyu Yang
- Jennifer Arnold
- Allen Quan

## User Testing and Feedback
Users can submit feedback about app features and appearance here:
https://goo.gl/forms/QjTjw7MKM4iZQcn82

If you encounter any bugs or glitches, you can report them here:
http://github.com/waschbar01/Vicious-Delicious/issues

## Notes

Application was built with:
- Ionic 2
- AngularJS
- HTML
- Typescript
- Javascript
- CSS
- Heroku
- mongoDB

A token.js authentication file is required to build the app. This is for API access for image hosting.

Please e-mail viciousdeliciousapp@gmail.com for requests or inquiries.

# Building the App

If you are installing on an iOS application, you will need the following requirement 
- Xcode Version 7 or higher
- iOS 9+
- Apple ID Account 

1. Download or update Xcode on your Mac.
2. Open viciousDelicious.xcodeproj on Xcode
3. Plug in and unlock your phone
4. Select your phone to run
5. Phone may ask for permission to install application, please say yes.
6. Application should be installed

If you have a code sign in error, please go to the following link to troubleshoot this issue:
http://ionicframework.com/docs/intro/deploying/

If you have an android device, you can opt to install with the convenient APK provided

https://www.dropbox.com/s/smw0klevt95uk4o/vicious-delicious-android-release-SIGNED.apk?dl=0

Last updated: 5/5/2017

Otherwise if building the entire application from source code, you will need to have the following installed
- Java JDK
- Android Studio
- Updated Android SDK tools

### Installation steps using the source code
1. Install https://nodejs.org/en/
2. Install the cordova application framework using the CLI command `npm install -g cordova`
3. Install ionic using the CLI command
4. Download or clone the Vicious Delicious repository
5. Add the relevant platform (note iOS cannot be installed on windows) using CLI command `ionic platform add ios/android`

Desktop browser testing is the fastest way to use the application, run it using CLI command: `ionic serve --lab`

An emulator can also be used for simulation testing purposes: `ionic build ios/android` and `ionic emulate ios/android`

To deploy it to a phone, use the CLI command: `ionic run ios/android`
