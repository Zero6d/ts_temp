import Box from '@src/components/Box';
import useFlatlist from '@src/hooks/useFlatlist';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import {getAllDummy} from '@src/services/api/getAll';
import React from 'react';

const API: React.FC<HomeRouteScreenProps<ScreensName.API>> = ({}) => {
  const {flatListProps, data, loading} = useFlatlist(
    async ({...rest}) => {
      const result = await getAllDummy();
      return {...result, list: data?.data};
    },
    {
      isNoMore: (r: any) => {
        return r?.page >= r?.totalPage;
      },

      loadMore: true,
    },
  );
  // const { flatListProps, loading, data } = useFlatlist(
  //   async ({ ...rest }) => {
  //     const { page_info } = rest;
  //     const query = _buildQuery(filter);
  //     const result = await listBrand({
  //       ...(query || {}),
  //       page: !page_info ? 1 : page_info?.current_page + 1,
  //       pageSize: 50,
  //     });
  //     return { ...result, list: result?.items };
  //   },
  //   {
  //     contentFooter: renderFooter,
  //     isNoMore: r => {
  //       if (!r.page_info) {
  //         return false;
  //       }
  //       return r?.page_info?.current_page >= r?.page_info?.total_pages;
  //     },
  //     // onSuccess: () => {
  //     //   flatListRef.current &&
  //     //     flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
  //     // },
  //     debounceInterval: 250,
  //     refreshDeps: [filter],
  //     loadMore: true,
  //   },
  // );
  return (
    <>
      <Box
        padding={[20, 16]}
        background="BG_100"
        flex={1}
        justify="center"></Box>
    </>
  );
};

export default API;
