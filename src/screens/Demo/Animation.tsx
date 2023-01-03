import Box from '@src/components/Box';
import { HomeRouteScreenProps, ScreensName } from '@src/routes/types';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';

const Animation: React.FC<HomeRouteScreenProps<ScreensName.Animation>> = () => {
  const pinchRef = React.createRef();
  const panRef = React.createRef();
  const translateX = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(0)).current;
  const scale = React.useRef(new Animated.Value(1)).current;

  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );

  const onPinchEvent = Animated.event([{ nativeEvent: { scale } }], {
    useNativeDriver: false,
  });

  const onHandlerStateChange = React.useCallback(() => {
    translateX.extractOffset();
    translateY.extractOffset();
  }, []);

  const handlePinchStateChange = event => {
    if (event.nativeEvent.scale < 1) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 2,
      }).start();
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <>
      <GestureHandlerRootView>
        <PanGestureHandler
          ref={panRef}
          onGestureEvent={onPanEvent}
          onHandlerStateChange={onHandlerStateChange}
          enabled={true}
          minPointers={1}
          maxPointers={1}
        >
          <PinchGestureHandler
            onGestureEvent={onPinchEvent}
            onHandlerStateChange={handlePinchStateChange}
            ref={pinchRef}
          >
            <Animated.View
              style={[
                styles.bank,
                {
                  transform: [
                    { scale },
                    { perspective: 200 },
                    { translateX: translateX },
                    { translateY: translateY },
                  ],
                },
              ]}
            >
              <Box activePress style={styles.abc} />
              <Box activePress style={styles.abcd} />
              <Box activePress style={styles.abcde} />
            </Animated.View>
          </PinchGestureHandler>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </>
  );
};

export default Animation;

const styles = StyleSheet.create({
  imageStyle: {
    width: 4000,
    height: 4000,
  },
  bank: {
    width: 1200,
    height: 1200,
    borderRadius: 7,
    backgroundColor: 'red',
  },
  abc: {
    width: 200,
    height: 200,
    borderRadius: 7,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  abcd: {
    width: 200,
    height: 200,
    borderRadius: 7,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  abcde: {
    width: 200,
    height: 200,
    borderRadius: 7,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: 10,
    right: 20,
  },
});
