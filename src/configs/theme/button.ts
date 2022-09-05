import { ViewStyle } from 'react-native';
import COLORS from './colors';

interface IButtonConfigs {
  primary: ViewStyle;
  ghost: ViewStyle;
  add: ViewStyle;
  added: ViewStyle;
}

const ButtonStyleConfigs: IButtonConfigs = {
  primary: {
    backgroundColor: COLORS.BRAND,
    height: 54,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ghost: {
    backgroundColor: COLORS.WHITE,
    height: 54,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.BRAND_400,
  },
  add: {
    backgroundColor: COLORS.WHITE,
    height: 28,
    width: 97,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D6D5DD',
  },
  added: {
    backgroundColor: COLORS.WHITE,
    height: 28,
    width: 75,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D6D5DD',
  },
};

export default ButtonStyleConfigs;
