import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import usePromptContext from './src/hooks/use-prompt-context';

import DrawerNavivigator from './src/routes/drawer';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { BottomSheet, Dialog } = usePromptContext();
  const [loading, setLoading] = useState(true);

  async function loadResources() {
    try {
      await Font.loadAsync({});
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      SplashScreen.hideAsync();
    }
  }

  useEffect(() => {
    loadResources()
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerNavivigator />
        <BottomSheet />
        <Dialog />
      </SafeAreaView>
    </NavigationContainer>
  );
}