import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Datepicker from '@src/components/TForm/DatePicker';
import Icon from '@src/components/Icon';
import ImageIcon from '@src/components/ImageIcon';
import Typography from '@src/components/Typography';
import COLORS from '@src/configs/theme/colors';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import i18n from '@src/utils/i18n';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Popup, {PopUpRef} from '@src/components/Popup';
import Input from '@src/components/TForm/Input';
import TForm from '@src/components/TForm';
import {Field, useForm} from 'rc-field-form';
import RadioGroup from '@src/components/TForm/RadioGroup';
import Select from '@src/components/TForm/Select';
import {useFocusEffect} from '@react-navigation/native';
import LoadingScreen from '@src/components/Loading';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

const PresetComponent: React.FC<
  HomeRouteScreenProps<ScreensName.PresetComponent>
> = ({navigation}) => {
  const ref = React.useRef<PopUpRef>();
  const parent = navigation.getParent();
  useFocusEffect(
    React.useCallback(() => {
      parent && parent.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  const [form] = useForm();
  const dummy = [
    {
      label: 'option1',
      value: 1,
    },
    {
      label: 'option2',
      value: 2,
    },
  ];
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [show, setShow] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  return (
    <>
      <Box padding={[20, 16]} background="BG_100" flex={1}>
        <ScrollView>
          <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
            {i18n.t('Box')}
          </Typography>
          <Box background="PRIMARY_400" height={100} width={300} />
          <Box
            margin={[20, 0, 0, 0]}
            background="BLUE_400"
            circle={100}
            activePress
          />
          <Box
            margin={[20, 0, 0, 0]}
            background="BG_400"
            size={200}
            align="center"
            justify="center">
            <Box size={100} background="BG_700" />
          </Box>
          <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
            {i18n.t('Typography')}
          </Typography>
          <Typography type="Small - Semibold" color="YELLOW_700">
            test
          </Typography>
          <Typography
            type="Headline - Regular"
            color="RED_400"
            textAlign="right">
            test
          </Typography>
          <Typography
            type="Title - Semibold"
            color="BLUE_400"
            textAlign="center"
            underline>
            test
          </Typography>
          <Typography fontSize={50} color="BLACK" textAlign="center">
            test
          </Typography>
          <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
            {i18n.t('Button')}
          </Typography>
          <Button type="primary" label="test" />
          <Button
            margin={[20, 0, 0, 0]}
            type="ghost"
            label="test"
            textColor="PRIMARY_500"
          />
          <Button
            margin={[20, 0, 0, 0]}
            width={100}
            height={50}
            background="YELLOW_600"
            label="test"
            textType="Title - Semibold"
            textColor="BLACK"
          />
          <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
            {i18n.t('Icon')}
          </Typography>
          <Icon name="wrench" size={50} color={COLORS.RED_400} />
          <Icon name="star" size={50} color={COLORS.YELLOW_400} />
          <Icon name="shield" size={50} color={COLORS.GREEN_400} />
          <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
            {i18n.t('ImageIcon')}
          </Typography>
          <ImageIcon style={{width: 50, height: 50}} name="crown" />
          <ImageIcon style={{width: 150, height: 150}} name="vi" />
          <ImageIcon
            style={{width: 100, height: 100, backgroundColor: '#bababa'}}
            name="south_korea"
          />
          <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
            {i18n.t('Popup')}
          </Typography>
          <Button
            width={100}
            onPress={() => ref.current?.success('test', 'test')}
            label="test popup"
          />
          <Popup ref={ref} />
          <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
            {i18n.t('Form')}
          </Typography>
          <TForm form={form}>
            <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
              {i18n.t('Input')}
            </Typography>
            <Field name="test">
              {({onChange, value}, meta) => {
                return (
                  <Input
                    onChange={onChange}
                    meta={meta}
                    value={value}
                    placeholder="test"
                    label="test"
                  />
                );
              }}
            </Field>
            <Field
              name="test2"
              rules={[
                {required: true, message: i18n.t('error_field_required')},
              ]}>
              {({onChange, value}, meta) => {
                return (
                  <Input
                    onChange={onChange}
                    meta={meta}
                    value={value}
                    placeholder="require"
                  />
                );
              }}
            </Field>
            <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
              {i18n.t('RadioGroup')}
            </Typography>
            <Field name="test3">
              {({onChange, value}, meta) => {
                return (
                  <RadioGroup
                    options={dummy}
                    onChange={onChange}
                    value={value}
                    meta={meta}
                  />
                );
              }}
            </Field>
            <Typography margin={[20, 0, 20, 0]} type="Body - Semibold">
              {i18n.t('Select')}
            </Typography>
            <Field name="test4">
              {({onChange, value}, meta) => {
                return (
                  <Select
                    margin={[12, 0, 0, 0]}
                    options={dummy}
                    onChange={onChange}
                    value={value}
                    meta={meta}
                    preicon={false}
                    label={i18n.t('select_share_acc')}
                    style={styles.container}
                    suficon={
                      <Box margin={[0, 16, 0, 0]}>
                        <Icon name="angle_down" size={25} />
                      </Box>
                    }
                  />
                );
              }}
            </Field>
          </TForm>
          <Button onPress={() => setShow(true)} />
          {/* {show && ( */}
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onChange}
            display={'spinner'}
          />
          {/* )} */}
        </ScrollView>
      </Box>
    </>
  );
};

export default PresetComponent;

const styles = StyleSheet.create({
  container: {
    height: 54,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
