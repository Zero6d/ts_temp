import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackRoute from './RootStackRoute';

// import {
//   useAuthenStateValue,
//   useRehydrateAuthenState,
// } from '@vbike/atom/authen';
// import SettingUpLanguage from '@vbike/components/SettingUpLanguageLoading';

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
