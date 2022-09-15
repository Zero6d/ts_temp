import Box from '@src/components/Box';
import Input from '@src/components/TForm/Input';
import useKeyboardHeight from '@src/hooks/useKeyboardHeight';
import {HomeRouteScreenProps, ScreensName} from '@src/routes/types';
import React, {useState} from 'react';
import {LayoutChangeEvent, Platform, ScrollView} from 'react-native';

const Animation: React.FC<
  HomeRouteScreenProps<ScreensName.Animation>
> = ({}) => {
  const [extraSpace, setExtraSpace] = useState(0);
  const scrollRef = React.useRef<ScrollView | null>();
  const getName = React.useRef<string>('');
  const input = React.useRef<{[key: string]: number}>({});

  const _scrollTo = (name: any) => () => {
    getName.current = name;
    if (Platform.OS === 'ios') {
      setExtraSpace(400);
    } else {
    }
  };

  useKeyboardHeight({
    onShow: () => {
      if (Platform.OS === 'ios') {
        scrollRef?.current?.scrollTo({
          y: input.current[getName.current] - 200,
        });
      } else {
      }
    },

    onHide: () => {
      setExtraSpace(0);
    },
  });
  const inputRef = (name: string) => (e: LayoutChangeEvent) => {
    input.current = {
      [name]: e.nativeEvent.layout.y,
    };
  };
  return (
    <>
      <Box padding={[20, 16]} background="BG_100" flex={1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={ref => (scrollRef.current = ref)}
          contentContainerStyle={{paddingBottom: extraSpace}}>
          <Input
            margin={[400, 0, 0, 0]}
            containerOnLayout={inputRef('test')}
            onFocus={_scrollTo('test')}
          />
        </ScrollView>
      </Box>
    </>
  );
};

export default Animation;
