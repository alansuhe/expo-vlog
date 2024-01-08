/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import { useSettings } from '../store';

// import { useStyle } from '../style'
import { DrawerContentComponentProps } from '@react-navigation/drawer';

function App(props: DrawerContentComponentProps) {

  // const { isDark, updateSettings } = useSettings()

  // const { s, sc, Colors } = useStyle()

  // const toggleTheme = () => {
  //   updateSettings({ isDark: !isDark })
  // }

  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  );
}

export default App;
