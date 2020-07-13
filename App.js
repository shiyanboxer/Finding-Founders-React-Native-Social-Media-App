//@flow
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import {
  STREAM_API_KEY,
  STREAM_API_TOKEN,
  STREAM_APP_ID,
} from 'babel-dotenv';

import {ChannelHeader} from './src/components/ChannelHeader';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ChannelList} from './src/components/ChannelList';
import {DateSeparator} from './src/components/DateSeparator';
import {MessageSlack} from './src/components/MessageSlack';
import {InputBox} from './src/components/InputBox';
import streamChatTheme from './src/stream-chat-theme.js';
import Icon from './components/Icon';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SinglePostScreen from './screens/SinglePostScreen';
import StatusUpdateScreen from './screens/StatusUpdateScreen';
import {StreamChat} from 'stream-chat';
import {
  Chat,
  MessageList,
  MessageInput,
  Channel,
} from 'stream-chat-react-native';
import {
  Avatar,
  StreamApp,
  IconBadge,
} from 'expo-activity-feed';
import type { UserResponse } from './types';


const chatClient = new StreamChat(STREAM_API_KEY);
const userToken = STREAM_API_TOKEN;
const user = {
  id: STREAM_APP_ID,
  name: 'Shiyan',
};

chatClient.setUser(user, userToken);

// $FlowFixMe
const NotificationsStack = createStackNavigator({
  Notifications: { screen: NotificationsScreen },
});

const ProfileStack = createStackNavigator({
  Profile: { screen: ProfileScreen },
});

const SearchStack = createStackNavigator({
  Search: { screen: SearchScreen },
});

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    Notifications: NotificationsStack,
    Profile: ProfileStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <Icon name="home" />;
        } else if (routeName === 'Search') {
          return <Icon name="search" />;
        } else if (routeName === 'Notifications') {
          return (
            <IconBadge showNumber>
              <Icon name="notifications" />
            </IconBadge>
          );
        } else if (routeName === 'Profile') {
          return (
            <Avatar
              source={(userData: UserResponse) => userData.data.profileImage}
              size={25}
              noShadow
            />
          );
        }
      },
    }),
    initialRouteName: 'Home',
  },
);

const doNotShowHeaderOption = {
  navigationOptions: {
    header: null,
  },
};

const Navigation = createStackNavigator({
  Tabs: {
    screen: TabNavigator,
    ...doNotShowHeaderOption,
  },
  SinglePost: { screen: SinglePostScreen },
  NewPost: { screen: StatusUpdateScreen },
  EditProfile: { screen: EditProfileScreen },
});

const ChannelListDrawer = props => {
  return (
    <ChannelList
      client={chatClient}
      changeChannel={channelId => {
        props.navigation.jumpTo('ChannelScreen', {
          channelId,
        });
      }}
    />
  );
};
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  container: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: '#3F0E40',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});

function ChannelScreen({navigation, route}) {
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    if (!channel) {
      navigation.openDrawer();
    }
    const channelId = route.params ? route.params.channelId : null;
    const _channel = chatClient.channel('messaging', channelId);
    setChannel(_channel);
  }, [route.params]);

  return (
    <SafeAreaView style={styles.channelScreenSaveAreaView}>
      <View style={styles.channelScreenContainer}>
        <ChannelHeader
          navigation={navigation}
          channel={channel}
          client={chatClient}
        />
        <View style={styles.chatContainer}>
          <Chat client={chatClient} style={streamChatTheme}>
            <Channel channel={channel}>
              <MessageList
                Message={MessageSlack}
                DateSeparator={DateSeparator}
              />
              <MessageInput
                Input={InputBox}
                additionalTextInputProps={{
                  placeholderTextColor: '#979A9A',
                  placeholder:
                    channel && channel.data.name
                      ? 'Message #' +
                        channel.data.name.toLowerCase().replace(' ', '_')
                      : 'Message',
                }}
              />
            </Channel>
          </Chat>
        </View>
      </View>
    </SafeAreaView>
  );
}

const App = () => {
  let apiKey = STREAM_API_KEY;
  let appId = STREAM_APP_ID;
  let token = STREAM_API_TOKEN;

  return (
    <StreamApp
      apiKey={apiKey}
      appId={appId}
      token={token}
      defaultUserData={{
        name: 'Shiyan',
        url: 'https://shiyanboxer.netlify.app/',
        desc: 'Hello world.',
        profileImage:
          'https://i.kinja-img.com/gawker-media/image/upload/s--PUQWGzrn--/c_scale,f_auto,fl_progressive,q_80,w_800/yktaqmkm7ninzswgkirs.jpg',
        coverImage:
          'https://i0.wp.com/photos.smugmug.com/Portfolio/Full/i-mwrhZK2/0/ea7f1268/X2/GothamCity-X2.jpg?resize=1280%2C743&ssl=1',
      }}
    >
    <NavigationContainer>
      <View style={styles.container}>
        <Drawer.Navigator
          drawerContent={ChannelListDrawer}
          drawerStyle={styles.drawerNavigator}>
          <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
    <Navigation />
    </StreamApp>
  );
};