import Box from '@src/components/Box';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import React from 'react';

const Animation: React.FC<
  HomeRouteScreenProps<ScreensName.Animation>
> = ({}) => {
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

export default Animation;
