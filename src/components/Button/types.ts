import { TextStyle } from 'react-native';
import { COLORS } from '@vbike/configs/theme/colors';
import { BoxProps } from './../Box/types';

type ButtonType =
  | 'primary'
  | 'ghost'
  | 'add'
  | 'added'
  | 'addCard'
  | 'placeholder';

import { ReactNode } from 'react';
import { TypoKeys } from '@vbike/configs/theme/typography';

export interface ButtonProps extends BoxProps {
  type?: ButtonType;
  textType?: TypoKeys;
  textColor?: keyof typeof COLORS;
  textStyle?: TextStyle;
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  loading?: boolean;
}