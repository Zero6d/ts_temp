import Box from '@src/components/Box';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import React from 'react';
import Typography from '@src/components/Typography';
import {useFocusEffect} from '@react-navigation/native';

const Home: React.FC<HomeRouteScreenProps<ScreensName.Home>> = ({
  navigation,
}) => {
  const parent = navigation.getParent();
  useFocusEffect(
    React.useCallback(() => {
      parent && parent.setOptions({tabBarStyle: {display: 'flex'}});
    }, []),
  );

  const toScreen = (Sc: any) => {
    navigation.navigate(Sc);
  };
  return (
    <>
      <Box padding={[20, 30]} background="BG_100" flex={1}>
        <Box
          margin={[20, 0, 20, 0]}
          activePress
          onPress={() => toScreen(ScreensName.PresetComponent)}>
          <Typography type="Subheader - Semibold">Preset Component</Typography>
        </Box>
        <Box
          margin={[20, 0, 20, 0]}
          activePress
          onPress={() => toScreen(ScreensName.FlashListDemo)}>
          <Typography type="Subheader - Semibold">FlashList</Typography>
        </Box>
        <Box
          margin={[20, 0, 20, 0]}
          activePress
          onPress={() => toScreen(ScreensName.API)}>
          <Typography type="Subheader - Semibold">API</Typography>
        </Box>
        <Box
          margin={[20, 0, 20, 0]}
          activePress
          onPress={() => toScreen(ScreensName.Animation)}>
          <Typography type="Subheader - Semibold">Animation</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
