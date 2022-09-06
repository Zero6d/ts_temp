import Box from '@src/components/Box';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import React from 'react';

const Home: React.FC<HomeRouteScreenProps<ScreensName.Home>> = ({
  navigation,
}) => {
  return (
    <>
      <Box padding={[20, 16]} background="BG_100" flex={1} />
    </>
  );
};

export default Home;
