import { FontFamilyNames } from '@vbike/configs/theme/typography';
import COLORS from '@vbike/configs/theme/colors';
import inputConfigs, { inputKeys } from '@vbike/configs/theme/input';
import { StyleSheet, ViewStyle } from 'react-native';

type inputStyle = {
  [key in inputKeys]: ViewStyle;
};

const styles: any = StyleSheet.create<inputStyle>(inputConfigs);
export const defaultInput: any = StyleSheet.create<any>({
  height: 54,
  borderWidth: 1,
  borderRadius: 8,
  paddingLeft: 16,
  paddingRight: 16,
  alignItems: 'center',
  flexDirection: 'row',
  borderColor: '#D6D5DD',
});

export const stylesText: any = StyleSheet.create<any>({
  flexWrap: 'wrap',
  fontSize: 16,
  backgroundColor: COLORS.WHITE,
  color: COLORS.MONO_100,
  fontFamily: FontFamilyNames.POPPINS_REGULAR,
  lineHeight: 24,
});
export const borderInput: any = StyleSheet.create<any>({
  borderColor: COLORS.BG_700,
});

export const borderError: any = StyleSheet.create<any>({
  borderColor: '#FF0900',
});

export default styles;
