import {useFocusEffect} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {withNetworkConnection} from '@src/hooks/useCheckNetwork/withNetworkConnection';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import {getAllDummy} from '@src/services/api/getAll';
import i18n from '@src/utils/i18n';
import {useInfiniteScroll} from 'ahooks';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';

const API: React.FC<HomeRouteScreenProps<ScreensName.API>> = ({navigation}) => {
  const parent = navigation.getParent();
  useFocusEffect(
    React.useCallback(() => {
      parent && parent.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  async function loadMoreList(nextId: any, limit: number) {
    let start = 0;
    if (nextId) {
      start = nextId;
    }
    const end = start + limit;
    const list = await getAllDummy(limit, end);
    return {list: list.products, total: end === list?.total};
  }
  const limit = 10;
  const {data, loading, loadingMore, loadMore, noMore} = useInfiniteScroll(
    (d: any) => loadMoreList(d?.list?.length, limit),
    {
      isNoMore: d => (d?.total ? d?.total : false),
    },
  );
  if (loading || !data) return null;
  if (data) {
    return (
      <>
        <Box padding={[20, 16]} background="BG_100" flex={1}>
          <FlashList
            data={data.list}
            renderItem={({item}: any) => (
              <>
                <Typography type="Body - Regular">{item?.brand}</Typography>
                <FastImage
                  style={{width: 200, height: 150}}
                  source={{
                    uri: item?.images[0],
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </>
            )}
            ListFooterComponent={
              <>
                {!noMore && loadingMore && (
                  <ActivityIndicator size="small" color={COLORS.BLACK} />
                )}
                {noMore && <Typography>{i18n.t('no_more_data')}</Typography>}
              </>
            }
            onEndReached={() => loadMore()}
            estimatedItemSize={100}
          />
        </Box>
      </>
    );
  }
};
export default withNetworkConnection(API);
