import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Typography from '@src/components/Typography';
import {OutsideScreenProps, ScreensName} from '@src/routes/types';
import React from 'react';

const Notification: React.FC<OutsideScreenProps<ScreensName.test>> = () => {
  return (
    <>
      <Box background="YELLOW_700" flex={1}>
        <Typography>asdf</Typography>
        <Button />
      </Box>
    </>
  );
};

export default Notification;
