
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useLayoutEffect } from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { useStyle, cm, bcm, mcm, scm } from '@/style'
import { DrawerActions, ParamListBase } from '@react-navigation/native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import c from '@constants/Constants'
const AD_BANNER_ID = Platform.select({
  ios: c.ADMOB_IDs.ios_banner,
  android: c.ADMOB_IDs.android_banner
});
// const AD_ID = __DEV__ ? TestIds : AD_BANNER_ID

export default function HomeScreen() {

  const { s, sc, Colors: { emphasis } } = useStyle()

  return (
    <SafeAreaView style={[s.container, s.centered]}>
      <BannerAd
        unitId={AD_BANNER_ID!}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />

      <View style={[sc.card, s.shadow]}>
        <Text style={s.titleText}>Home</Text>
        <Text style={s.subTitleText}>Sub title</Text>

        <Text style={s.normalText}>normal blah .....</Text>
        <Text style={s.subText}>sub text</Text>

      </View>

      <>
        <Pressable style={sc.boxAct}>
          <Text style={s.normalText}>act</Text>
        </Pressable>
        <Pressable style={sc.boxLink}>
          <Text style={s.normalText}>link</Text>
        </Pressable>
        <View style={s.round}>
          <Text>R</Text>
        </View>
        <View style={sc.roundAct}>
          <Text>A</Text>
        </View>

        <Text style={s.normalText}>normal blah .....<Text style={{ color: emphasis }}>Emphasis highLight</Text></Text>
        <Text style={s.subText}>sub text</Text>
      </>

    </SafeAreaView>
  );
}