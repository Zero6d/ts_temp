import React, { useRef, useCallback } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Box from '../Box';
import { useMount } from 'ahooks';

const ScanCircle: React.FC<any> = () => {
  const scaleRef = useRef(new Animated.Value(1)).current;
  const nextValue = useRef(1.1);

  const animateLoop = useCallback(() => {
    Animated.timing(scaleRef, {
      toValue: nextValue.current,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        nextValue.current = nextValue.current === 1 ? 1.1 : 1;
        animateLoop();
      }
    });
  }, [scaleRef]);

  useMount(() => {
    animateLoop();
  });

  return (
    // <Animated.View style={[{ transform: [{ scale: scaleRef }] }]}>
    <Box style={styles.outterCircle} />
    // </Animated.View>
  );
};

export default ScanCircle;

const styles = StyleSheet.create({
  outterCircle: {
    width: 50,
    height: 50,
    borderRadius: 75,
    opacity: 0.9,
    backgroundColor: 'red',
  },
});
