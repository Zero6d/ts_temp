import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackRoute from './RootStackRoute';

// import {
//   useAuthenStateValue,
//   useRehydrateAuthenState,
// } from '@src/atom/authen';
// import SettingUpLanguage from '@src/components/SettingUpLanguageLoading';

export default function Routes() {
  // const { loading: changeLanguageLoading, reinitialized } =
  //   useAuthenStateValue();

  // useRehydrateAuthenState();

  // if (reinitialized) {
  //   return null;
  // }

  // if (changeLanguageLoading) {
  //   return (
  //     <Box flex={1} justify="center" align="center">
  //       <SettingUpLanguage />
  //     </Box>
  //   );
  // }

  return (
    <NavigationContainer>
      <RootStackRoute />
    </NavigationContainer>
  );
}
