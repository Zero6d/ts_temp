import Box from '@src/components/Box';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import React from 'react';

const API: React.FC<HomeRouteScreenProps<ScreensName.API>> = ({}) => {
  return (
    <>
      <Box
        padding={[20, 16]}
        background="BG_100"
        flex={1}
        justify="center"></Box>
    </>
  );
};

export default API;
