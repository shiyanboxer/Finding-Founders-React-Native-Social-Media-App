# Finding Founders React Native Social Media App

<div style="display: inline">
<img src="https://github.com/shiyanboxer/Finding-Founders-React-Native-Social-Media-App/blob/master/appdemo.png" alt="IMAGE ALT TEXT HERE" width="1000" border="1" style="margin-right: 300px" />
</div>

### About
Finding Founders is a social media app built with React Native.

### Demo 
[Figma demo](https://www.figma.com/proto/tADMBNRb7unxknBxtskRwP/Finding-Founders-App?node-id=0%3A2&scaling=scale-down)

### Tools
- React Native
- JavaScript
- Expo
- Firebase
- Redux
- Streaming API
- Chat API

### Create an App
```
npm install expo-cli  --global
expo init projectName
cd projectNameexpo 
expo start
```

### 2 ways of Emulating
1. **Expo:** Download Expo in app store, scan QR code
2. **Android Studio** In Android Studies, click configure, AVD, create, select device, pie, finish, click on play under actions, have it open then click "run on android device emulator" in expo

**Run App**
```
npx react-native link
react-native run-ios
```
**Stream**
https://getstream.io/react-native-activity-feed/tutorial/
```
create-react-native-app ActivityFeedExample
cd ActivityFeedExample
yarn add expo-activity-feed
expo install react-native-safe-area-view react-native-safe-area-context
```

### Files in this Project 
- **epxo & expo shared** - configuration don't need to touch
- **assets** - images
- **node module** - dependencies and packages
- **git ignore** - which files to track or not track for version control
- **App.js** - project code, kick starts the app
- **App.json** - info about the projects, name
- **babble** - configure how babble works to allow modern JavaScript

### Features 
- Login with other social media authentication
- Securely store user information
- Send messages
- Flat feeds
- Timelines and Newsfeeds
- Notification feed
- Likes
- Comments
- Activity detail view
- Realtime notifications
- Notifications
- Message list navigation
- Input box
- Message row
- Reaction list
- Giphy cards
- Enriched URL previews
- Deployable on Android and IOS

### Resources
- [Firebase Setup](https://firebase.google.com/docs/web/setup#prerequisites)
- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [Emulating](https://www.youtube.com/watch?v=pflXnUNMsNk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=2)
- [React Native Chat App Tutorial](https://getstream.io/chat/react-native-chat/tutorial/)
- [Streaming API](https://getstream.io/chat/react-native-chat/tutorial/)
- [Top Level Components Chat](https://getstream.github.io/stream-chat-react-native/) 
- [Guide](https://medium.com/@vishalnarkhede.iitd/slack-clone-with-react-native-part-1-f71a5e6a339f?source=friends_link&sk=b06d7cc0c49bd08bcf398df9c89d48d7)
- [News Feed](https://github.com/GetStream/react-native-activity-feed)
- [News Feed API](https://getstream.io/react-native-activity-feed/tutorial/)
- [News Feed Git](https://github.com/GetStream/react-native-example)
