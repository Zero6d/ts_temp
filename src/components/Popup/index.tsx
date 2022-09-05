import React, { useImperativeHandle, useState } from 'react';
import { Linking, Modal, Platform } from 'react-native';
import Box from '../Box';
import Typography from '../Typography';
import { container, defaultBox } from './styles';
import Icon from '../Icon';
import Button from '../Button';
import COLORS from '@vbike/configs/theme/colors';
import i18n from '@vbike/utils/i18n';
import { IconType } from '../Icon/type';
import { StackActions, useNavigation } from '@react-navigation/native';

type PopupState = {
  visible: boolean;
  icon?: IconType;
  label?: string;
  color?: COLORS;
  toScreen?: string;
  popToTop?: boolean;
  goBack?: boolean;
  notification?: string;
  buttonCurrentLoc?: any;
};

export type PopUpRef =
  | {
      success: (
        success_message?: string,
        label?: string,
        goBack?: boolean,
        screenName?: string,
        popToTop?: boolean,
      ) => void;
      error: (
        error_message?: string,
        label?: string,
        screenName?: string,
        popToTop?: boolean,
        buttonCurrentLoc?: any,
      ) => void;
      dismiss: () => void;
    }
  | undefined;

interface PopupProps {}

const Popup = React.forwardRef<PopUpRef, PopupProps>(({}, ref) => {
  const navigation = useNavigation();
  const [state, setState] = useState<PopupState>({
    visible: false,
    icon: undefined,
    label: undefined,
    color: undefined,
    toScreen: undefined,
    popToTop: false,
    notification: undefined,
    buttonCurrentLoc: undefined,
  });

  const error = (
    error_message?: string,
    label?: string,
    screenName?: string,
    popToTop?: boolean,
    buttonCurrentLoc?: any,
  ) => {
    setState({
      visible: true,
      icon: 'error',
      label: label,
      color: COLORS.RED_500,
      toScreen: screenName,
      popToTop: popToTop,
      notification: error_message ? error_message : undefined,
      buttonCurrentLoc: buttonCurrentLoc,
    });
  };
  const success = (
    success_message?: string,
    label?: string,
    goBack?: boolean,
    screenName?: string,
    popToTop?: boolean,
  ) => {
    setState({
      visible: true,
      icon: 'check_full_circle',
      label: label,
      color: COLORS.GREEN_500,
      toScreen: screenName,
      popToTop: popToTop,
      goBack: goBack,
      notification: success_message ? success_message : undefined,
    });
  };

  const dismiss = () => {
    setState({
      visible: false,
      icon: undefined,
      label: undefined,
      color: undefined,
    });
    if (state.toScreen) {
      if (state.popToTop === true) {
        navigation.dispatch(StackActions.popToTop());
      }

      // @ts-ignore ignore this for now but need to be fix later
      navigation.navigate(state.toScreen);
    }
    if (state.goBack) {
      navigation.goBack();
    }
  };

  useImperativeHandle(ref, () => ({ error, success, dismiss }));
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${state.buttonCurrentLoc && state.buttonCurrentLoc.lat},${
    state.buttonCurrentLoc && state?.buttonCurrentLoc?.long
  }`;
  const url = Platform.select({
    ios: `${scheme} Current location @${latLng}`,
    android: `${scheme}${latLng}(Current location)`,
  });

  return (
    <Modal transparent={true} visible={state.visible}>
      <Box style={container}>
        <Box style={[defaultBox]}>
          {state?.icon && (
            <Icon name={state.icon} size={26} color={state.color} />
          )}
          <Typography
            textAlign="center"
            type="Body - Regular"
            margin={[12, 0, 12, 0]}
            color="NEUTRAL_900"
          >
            {state.label}
          </Typography>

          {state?.notification && (
            <Typography
              textAlign="center"
              type="Caption - Regular"
              margin={[12, 0, 12, 0]}
              color="MONO_700"
            >
              {state?.notification}
            </Typography>
          )}
          {(state?.toScreen || state?.goBack) && (
            <Button
              width={285}
              type="ghost"
              background="BRAND_400"
              label={i18n.t('next')}
              onPress={dismiss}
            />
          )}

          {!state?.toScreen && !state?.goBack && (
            <Button
              width={285}
              background="PRIMARY_200"
              label={i18n.t('close')}
              onPress={dismiss}
              textColor="BRAND"
            />
          )}
          {state?.buttonCurrentLoc && (
            <Box
              margin={[30, 0, 0, 0]}
              padding={[10, 20, 10, 20]}
              activePress
              background="RED_700"
              borderRadius={12}
              flexDirection="row"
              onPress={() => url && Linking.openURL(url)}
            >
              <Icon name="location_arrow" size={20} color={COLORS.WHITE} />
              <Typography
                margin={[0, 0, 0, 10]}
                type="Body - Semibold"
                color="WHITE"
              >
                {i18n.t('Vị trí hiện tại')}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
});
export default Popup;
