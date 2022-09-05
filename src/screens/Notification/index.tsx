import Box from '@src/components/Box';
import {AccountRouteScreenProps, ScreensName} from '@src/routes/types';

import React from 'react';

const Notification: React.FC<
  AccountRouteScreenProps<ScreensName.test>
> = () => {
  return (
    <>
      <Box flex={1} background="WHITE" />
    </>
  );
};

export default Notification;
