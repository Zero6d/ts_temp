import Box from '@src/components/Box';
import Button from '@src/components/Button';
import TForm from '@src/components/TForm';
import Input from '@src/components/TForm/Input';
import Typography from '@src/components/Typography';
import {OutsideScreenProps, ScreensName} from '@src/routes/types';
import i18n from '@src/utils/i18n';
import React, {useState} from 'react';
import {Field, useForm} from 'rc-field-form';
import Icon from '@src/components/Icon';
import {storage, StorageKey} from '@src/storage';
import {useAuthenState} from '@src/atom/authen';

const SignIn: React.FC<OutsideScreenProps<ScreensName.SignIn>> = ({
  navigation,
}) => {
  const [form] = useForm();
  const [toggle, setToggle] = useState(false);
  const [authenState, setAuthen] = useAuthenState();

  const _login = () => {
    if (toggle) {
      storage.set(StorageKey.Authen, true);
    }

    setAuthen({
      ...authenState,
      token: 'true',
    });
  };
  return (
    <>
      <Box padding={[20, 16]} background="BG_100" flex={1} justify="center">
        <Box alignSelf="center" margin={[0, 0, 60, 0]}>
          <Typography type="Title - Semibold">
            {i18n.t('sign_in_header')}
          </Typography>
        </Box>

        <TForm form={form} onFinish={_login}>
          <Field
            name="username"
            rules={[{required: true, message: 'error_field_required'}]}>
            {({onChange, value}, meta) => {
              return (
                <Input
                  margin={[24, 0, 0, 0]}
                  onChange={onChange}
                  meta={meta}
                  value={value}
                  placeholder={i18n.t('sign_in_username')}
                />
              );
            }}
          </Field>
          <Field
            name="password"
            rules={[{required: true, message: 'error_field_required'}]}>
            {({onChange, value}, meta) => {
              return (
                <Input
                  margin={[24, 0, 0, 0]}
                  onChange={onChange}
                  meta={meta}
                  value={value}
                  type={'password'}
                  placeholder={i18n.t('sign_in_password')}
                />
              );
            }}
          </Field>
          <Box flexDirection="row" align="center" alignSelf="flex-end">
            <Typography>{i18n.t('sign_in_remember')}</Typography>
            <Box
              margin={[0, 0, 0, 15]}
              size={20}
              activePress
              align="center"
              justify="center"
              onPress={() => setToggle(!toggle)}
              style={{borderColor: '#000', borderWidth: 1}}>
              {toggle && <Icon name="x" size={15} />}
            </Box>
          </Box>
        </TForm>
        <Button
          label={i18n.t('sign_in')}
          margin={[24, 0, 0, 0]}
          onPress={form.submit}
        />
      </Box>
    </>
  );
};

export default SignIn;
