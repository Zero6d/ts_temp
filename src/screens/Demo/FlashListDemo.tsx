import {useFocusEffect} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import {useInfiniteScroll} from 'ahooks';
import React from 'react';

interface Result {
  list: string[];
  nextId: string | undefined;
}

const FlashListDemo: React.FC<
  HomeRouteScreenProps<ScreensName.FlashListDemo>
> = ({navigation}) => {
  const parent = navigation.getParent();
  useFocusEffect(
    React.useCallback(() => {
      parent && parent.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  // const resultData = [
  //   '0',
  //   '1',
  //   '2',
  //   '3',
  //   '4',
  //   '5',
  //   '6',
  //   '7',
  //   '8',
  //   '9',
  //   '10',
  //   '11',
  //   '12',
  //   '13',
  // ];
  const resultData = Array(1000000).fill(1);
  function loadMoreList(
    nextId: string | undefined,
    limit: number,
  ): Promise<Result> {
    let start = 0;
    if (nextId) {
      start = resultData.findIndex(i => i === nextId);
    }
    const end = start + limit;
    const list = resultData.slice(start, end);
    const nId = resultData.length >= end ? resultData[end] : undefined;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          list,
          nextId: nId,
        });
      }, 100);
    });
  }
  const {data, loading, loadingMore, loadMore, noMore} = useInfiniteScroll(
    (d: any) => loadMoreList(d?.nextId, 4),
    {
      isNoMore: d => d?.nextId === undefined,
    },
  );
  if (loading || !data) return null;
  if (data) {
    return (
      <>
        <Box padding={[20, 16]} background="BG_100" flex={1}>
          <FlashList
            data={data.list}
            renderItem={({item}) => (
              <>
                <Typography margin={[10, 0, 10, 0]} type="Body - Regular">
                  item {item}
                </Typography>
              </>
            )}
            onEndReached={() => loadMore()}
            estimatedItemSize={15}
          />
        </Box>
      </>
    );
  }
};
export default FlashListDemo;
