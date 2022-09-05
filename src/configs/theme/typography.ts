import { TextStyle } from 'react-native';
import COLORS from './colors';
interface ITextConfigs {
  'Display - Bold': TextStyle;
  'Display - Regular': TextStyle;
  'Headline - Bold': TextStyle;
  'Headline - Regular': TextStyle;
  'Title - Semibold': TextStyle;
  'Title - Regular': TextStyle;
  'Subheader - Semibold': TextStyle;
  'Subheader - Medium': TextStyle;
  'Subheader - Regular': TextStyle;
  'Body - Semibold': TextStyle;
  'Body - Medium': TextStyle;
  'Body - Regular': TextStyle;
  'Caption - Semibold': TextStyle;
  'Caption - Medium': TextStyle;
  'Caption - Regular': TextStyle;
  'Small - Semibold': TextStyle;
  'Small - Regular': TextStyle;
}

export enum FontFamilyNames {
  POPPINS_BLACK = 'Poppins-Black',
  POPPINS_SEMI_BOLD = 'Poppins-SemiBold',
  POPPINS_THIN = 'Poppins-Thin',
  POPPINS_BOLD = 'Poppins-Bold',
  POPPINS_LIGHT = 'Poppins-Light',
  POPPINS_MEDIUM = 'Poppins-Medium',
  POPPINS_REGULAR = 'Poppins-Regular',
}

export type TypoKeys = keyof typeof TextConfigs;

const TextConfigs: ITextConfigs = {
  'Display - Bold': {
    fontSize: 36,
    lineHeight: 54,

    fontFamily: FontFamilyNames.POPPINS_BOLD,
    color: COLORS.BG_700,
  },
  'Display - Regular': {
    fontSize: 36,
    lineHeight: 54,

    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    color: COLORS.BG_700,
  },
  'Headline - Bold': {
    fontSize: 28,
    lineHeight: 42,

    fontFamily: FontFamilyNames.POPPINS_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  'Headline - Regular': {
    fontSize: 28,
    lineHeight: 42,

    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    color: COLORS.BG_700,
  },
  'Title - Semibold': {
    fontSize: 20,
    lineHeight: 30,

    fontFamily: FontFamilyNames.POPPINS_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  'Title - Regular': {
    fontSize: 20,
    lineHeight: 30,

    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    color: COLORS.BG_700,
  },
  'Subheader - Semibold': {
    fontSize: 16,
    lineHeight: 24,

    fontFamily: FontFamilyNames.POPPINS_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  'Subheader - Medium': {
    fontSize: 16,
    lineHeight: 24,

    fontFamily: FontFamilyNames.POPPINS_MEDIUM,
    color: COLORS.BG_700,
  },
  'Subheader - Regular': {
    fontSize: 16,
    lineHeight: 24,

    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    color: COLORS.BG_700,
  },
  'Body - Semibold': {
    fontSize: 14,
    lineHeight: 21,

    fontFamily: FontFamilyNames.POPPINS_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  'Body - Medium': {
    fontSize: 14,
    lineHeight: 21,

    fontFamily: FontFamilyNames.POPPINS_MEDIUM,
    color: COLORS.BG_700,
  },
  'Body - Regular': {
    fontSize: 14,
    lineHeight: 21,

    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    color: COLORS.BG_700,
  },
  'Caption - Semibold': {
    fontSize: 12,
    lineHeight: 18,

    fontFamily: FontFamilyNames.POPPINS_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  'Caption - Medium': {
    fontSize: 12,
    lineHeight: 18,

    fontFamily: FontFamilyNames.POPPINS_MEDIUM,
    color: COLORS.BG_700,
  },
  'Caption - Regular': {
    fontSize: 12,
    lineHeight: 18,

    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    color: COLORS.BG_700,
  },
  'Small - Semibold': {
    fontSize: 10,
    lineHeight: 15,

    fontFamily: FontFamilyNames.POPPINS_SEMI_BOLD,
    color: COLORS.BG_700,
  },
  'Small - Regular': {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    color: COLORS.BG_700,
  },
};

export default TextConfigs;
