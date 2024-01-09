import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen  } from 'expo-router';
import { useEffect } from 'react';
// import { useColorScheme } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import Settings from './settings';
import { useStyle } from '@/style';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'home',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('@assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const {isDark, NavColors} = useStyle();

  const navTheme = isDark ? DarkTheme : DefaultTheme
  const NavTheme = {
    ...navTheme,
    colors: {
      ...navTheme.colors,
      ...NavColors
    }
  }

  return (
    <ThemeProvider value={NavTheme}>
      <Drawer
      // initialRouteName='(main)'
        // drawerContent={(props) => <Settings {...props} />}
        >
        <Drawer.Screen
          name="(main)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: '(main)',
            title: 'drawer',
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}
