import theme from '@src/configs/theme';
import React, {useMemo} from 'react';
import {ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import Box from '../Box';
import Typography from '../Typography';
import {ButtonProps} from './types';
import styles from './styles';
import COLORS from '@src/configs/theme/colors';

const Button: React.FC<ButtonProps> = ({
  type,
  flexDirection,
  justify,
  align,
  alignSelf,
  flex,
  background,
  label,
  borderRadius,
  height,
  width,
  margin,
  textType,
  textColor,
  padding,
  prefix,
  suffix,

  ...props
}) => {
  let defaultType = useMemo(() => {
    if (type) {
      return type;
    }
    return 'primary';
  }, [type]);

  const combinedStyle: ViewStyle[] = useMemo(() => {
    const styleObject: any = {
      type: defaultType,
      flexDirection,
      justify,
      align,
      alignSelf,
      flex,
      background,
      borderRadius,
      height,
      width,
      margin,
      padding,
    };
    const style: ViewStyle[] = Object.keys(styleObject)
      .map((key: any) => {
        if (key === 'type') {
          return styles[defaultType];
        }
        if (styleObject[key]) {
          if (['margin', 'padding', 'borderRadius'].includes(key)) {
            const normalizeOptions = theme.utils.styles.normalizeOptions(
              styleObject[key],
            );
            return theme.utils.styles[key](normalizeOptions);
          }

          return theme.utils.styles[key](styleObject[key]);
        }
      })
      .filter(e => e);
    return style;
  }, [
    defaultType,
    align,
    alignSelf,
    background,
    flex,
    flexDirection,
    height,
    justify,
    borderRadius,
    margin,
    padding,
    width,
  ]);

  const text = useMemo(() => {
    if (
      defaultType === 'primary' ||
      defaultType === 'ghost' ||
      defaultType === 'placeholder'
    ) {
      return 'Body - Semibold';
    }
    return 'Body - Regular';
  }, [defaultType]);

  return (
    <Box
      flexDirection="row"
      style={StyleSheet.flatten([combinedStyle, props.style])}
      activePress={props.loading ? false : true}
      {...props}>
      {prefix}
      <Box flex={suffix ? 1 : 0}>
        {props.loading && (
          <ActivityIndicator size="small" color={COLORS.WHITE} />
        )}

        {!props.loading && (
          <Typography
            type={textType ? textType : text}
            color={textColor ? textColor : 'WHITE'}
            numberOfLines={1}>
            {label}
          </Typography>
        )}
      </Box>
      {suffix}
    </Box>
  );
};

export default Button;
