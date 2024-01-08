import { Button, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import c from '@constants/Constants'

const AD_BANNER_ID = Platform.select({
  ios: c.ADMOB_IDs.ios_banner,
  android: c.ADMOB_IDs.android_banner
});
const AD_ID = __DEV__ ? TestIds.BANNER : AD_BANNER_ID;

export default function TabOneScreen() {

  console.log(process.env.EXPO_PUBLIC_OMDB_BASE_URL)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <BannerAd
        unitId={AD_ID!}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
      <Button onPress={() => console.log('--->')} title='test 123' />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
