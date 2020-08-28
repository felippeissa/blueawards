import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

import Src from './src';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function fetchFont() {
      await Font.loadAsync({
        PoppinsBold: require('./src/assets/Fonts/Poppins-Bold.ttf'),
        PoppinsLight: require('./src/assets/Fonts/Poppins-Light.ttf'),
        PoppinsRegular: require('./src/assets/Fonts/Poppins-Regular.ttf'),
      });

      setFontLoaded(true);
    }
    fetchFont();
  }, []);

  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  return fontLoaded && <Src />;
}
