import {ViewStyle} from 'react-native';
import COLORS from './colors';

interface IButtonConfigs {
  primary: ViewStyle;
  ghost: ViewStyle;
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
};

export default ButtonStyleConfigs;
