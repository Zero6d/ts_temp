import {useAuthenState} from '@src/atom/authen';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {AccountRouteScreenProps, ScreensName} from '@src/routes/types';
import {storage, StorageKey} from '@src/storage';
import React from 'react';

const Account: React.FC<AccountRouteScreenProps<ScreensName.Account>> = ({
  navigation,
}) => {
  const [, setAuthen] = useAuthenState();
  const logout = () => {
    storage.set(StorageKey.Authen, '');
    setAuthen({
      token: undefined,
      loading: false,
      reinitialized: false,
    });
  };
  return (
    <>
      <Box padding={[20, 16]} background="BG_100" flex={1} justify="center">
        <Button onPress={logout} label="logout" />
      </Box>
    </>
  );
};

export default Account;
