import React, {ComponentProps, ComponentType, useCallback} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import NoInternetConnection from './NoInternetConnection';

export const withNetworkConnection =
  <Component extends ComponentType<any>>(Component: Component) =>
  (props: ComponentProps<Component>) => {
    const [isConnected, setIsConnected] = React.useState(true);
    const isFocused = useIsFocused();
    const lastState = React.useRef(true);
    const networkConnectionRequest = React.useRef(0);

    const asyncFetch = useCallback(async () => {
      try {
        const state = await NetInfo.fetch();
        if (!state.isConnected) {
          if (isFocused) {
            if (networkConnectionRequest.current) {
              cancelAnimationFrame(networkConnectionRequest.current);
            }
            networkConnectionRequest.current = requestAnimationFrame(() => {
              if (!state.isConnected) {
                setIsConnected(false);
                lastState.current = false;
              } else {
                if (lastState.current) {
                  setIsConnected(true);
                  lastState.current = true;
                }
              }
            });
          } else {
            lastState.current = true;
          }
        }
      } catch (error) {
        console.log('asyncFetch.error', error);
      }
    }, [isFocused]);

    useFocusEffect(
      useCallback(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
          asyncFetch();
        });
        return () => {
          lastState.current = true;
          unsubscribe();
        };
      }, [asyncFetch]),
    );

    const _onTryAgain = () => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          setIsConnected(true);
        }
      });
    };

    if (!isConnected) {
      return <NoInternetConnection onPress={_onTryAgain} />;
    }

    return <Component {...props} />;
  };
