import Box from '@src/components/Box';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import Typography from '@src/components/Typography';
import FastImage from 'react-native-fast-image';
import {useFocusEffect} from '@react-navigation/native';

const FlashListDemo: React.FC<
  HomeRouteScreenProps<ScreensName.FlashListDemo>
> = ({navigation}) => {
  const parent = navigation.getParent();
  useFocusEffect(
    React.useCallback(() => {
      parent && parent.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  const DATA = [
    {
      title: 'First Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'Second Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'First Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'Second Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'First Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'Second Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'First Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'Second Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'First Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'Second Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'First Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
    {
      title: 'Second Item',
      image:
        'https://gratisography.com/wp-content/uploads/2022/05/gratisography-heavenly-free-stock-photo-1170x775.jpg',
    },
  ];
  return (
    <>
      <Box padding={[20, 16]} background="BG_100" flex={1} justify="center">
        <FlashList
          data={DATA}
          renderItem={({item}) => (
            <>
              <Typography type="Body - Regular">{item.title}</Typography>
              <FastImage
                style={{width: 200, height: 200}}
                source={{
                  uri: item.image,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </>
          )}
          estimatedItemSize={200}
        />
      </Box>
    </>
  );
};

export default FlashListDemo;
