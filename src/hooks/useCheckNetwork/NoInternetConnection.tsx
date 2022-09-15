import {Image, StyleSheet} from 'react-native';
import i18n from '@src/utils/i18n';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import images from '@src/components/ImageIcon/resources';
import {deviceWidth} from '@src/configs/theme/common';
interface nicProps {
  onPress?: () => void;
}

const NoInternetConnection: React.FC<nicProps> = ({onPress}) => {
  return (
    <>
      <Box style={styles.container}>
        <Image source={images.no_connection} />
        <Typography style={styles.messageText}>
          {i18n.t('no_internet')}
        </Typography>
        <Box style={styles.btnTryAgain} onPress={onPress} activePress>
          <Typography color="YELLOW_500" type="Subheader - Semibold">
            {i18n.t('try_again')}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NoInternetConnection;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 12,
    marginTop: '5%',
  },
  btnTryAgain: {
    padding: 16,
    width: deviceWidth - 150,
    marginLeft: 0,

    borderRadius: 12,
    alignItems: 'center',
  },
});
