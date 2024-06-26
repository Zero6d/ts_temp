import Box from '@src/components/Box';
import Icon from '@src/components/Icon';
import ImageIcon from '@src/components/ImageIcon';
import Typography from '@src/components/Typography';
import theme from '@src/configs/theme';
import COLORS from '@src/configs/theme/colors';
import {FontFamilyNames} from '@src/configs/theme/typography';
import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  label,
  meta,
  required,
  onChange,
  // required,
  disabled,
  onFocus,
  allowClear,
  containerOnLayout,
  prefix,
  suffix,
  margin,
  padding,
  type,
  dontShowErrorMessage = false,
  loading,
  inputStyle,
  ...props
}) =>
  // ref,
  {
    // const inputRef = React.useRef();
    // useImperativeHandle(ref, () => inputRef.current);

    const combinedStyle: ViewStyle[] = useMemo(() => {
      const styleObject: any = {
        margin,
        padding,
      };
      const style: ViewStyle[] = Object.keys(styleObject)
        .map((key: any) => {
          if (styleObject[key]) {
            if (['margin', 'padding'].includes(key)) {
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
    }, [margin, padding]);

    const onClear = () => {
      onChange && onChange('');
    };
    const [secure, setSecure] = React.useState(
      type === 'password' ? true : false,
    );
    const toggle = () => {
      setSecure(!secure);
    };

    return (
      <>
        <View
          style={StyleSheet.flatten([combinedStyle])}
          onLayout={containerOnLayout}>
          {label && (
            <Typography
              margin={[0, 0, 5, 0]}
              type="Caption - Regular"
              color="MONO_700">
              {label}{' '}
              {required ? (
                <Typography type="Caption - Regular" color="RED_500">
                  *
                </Typography>
              ) : null}
            </Typography>
          )}
          <Box
            style={StyleSheet.flatten([
              styles.defaultInput,
              props.value && {borderColor: COLORS.BG_700},
              props.style && props.style,
              meta && meta.errors && meta.errors[0] && {borderColor: '#FF0900'},
            ])}>
            {prefix}
            <Box flex={1}>
              {loading ? (
                <ActivityIndicator size="small" color={COLORS.BLACK} />
              ) : (
                <TextInput
                  // ref={ref}
                  allowFontScaling={false}
                  numberOfLines={1}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={COLORS.MONO_300}
                  autoComplete={'off'}
                  onFocus={onFocus}
                  autoCapitalize={'none'}
                  selectionColor={'rgba(0,0,0,0.3)'}
                  autoCorrect={false}
                  clearTextOnFocus={false}
                  secureTextEntry={secure}
                  onChangeText={text => onChange && onChange(text)}
                  value={props.value}
                  editable={!disabled}
                  {...props}
                  style={StyleSheet.flatten([
                    styles.stylesText,
                    inputStyle && inputStyle,
                  ])}
                />
              )}
            </Box>
            {type === 'password' && (
              <Box activePress onPress={toggle}>
                <Icon
                  name={secure ? 'eye' : 'eye_close'}
                  size={24}
                  color={COLORS.BLUE_GREY_700}
                />
              </Box>
            )}
            {suffix}

            {allowClear && (
              <Box activePress onPress={onClear}>
                <ImageIcon name="x" size={24} color={COLORS.BLUE_GREY_700} />
              </Box>
            )}
          </Box>

          {meta?.errors && !dontShowErrorMessage && (
            <Box margin={[5, 0, 0, 0]}>
              <Typography
                margin={[0, 0, 5, 0]}
                type="Caption - Regular"
                color="RED_500">
                {meta?.errors}
              </Typography>
            </Box>
          )}
        </View>
      </>
    );
  };

export default Input;

const styles = StyleSheet.create({
  defaultInput: {
    height: 54,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    borderColor: '#D6D5DD',
  },
  stylesText: {
    flexWrap: 'wrap',
    fontSize: 16,
    backgroundColor: COLORS.WHITE,
    color: COLORS.MONO_100,
    fontFamily: FontFamilyNames.POPPINS_REGULAR,
    lineHeight: 24,
  },
});
