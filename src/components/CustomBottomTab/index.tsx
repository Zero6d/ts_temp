import Box from '@src/components/Box';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {ScreensName} from '@src/routes/types';
import i18n from '@src/utils/i18n';
import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import Icon from '../Icon';
import Typography from '../Typography';

const CustomCurvedBottomTab = (props: any) => {
  const tabs = [1, 2, 3, 4];
  const MAP_URL = [
    ScreensName.HomeRoute,
    ScreensName.RentRoute,
    ScreensName.BuyTicketRoute,
    ScreensName.AccountTab,
  ];
  const icon = ['home', 'bicycle', 'ticket', 'user'];
  const label = ['home', 'renting_bike', 'buy_ticket', 'account'];

  const _goToPage = (e: any) => {
    props.navigation.navigate(MAP_URL[e]);
  };
  const {state, descriptors} = props;
  const {index: activeIcon} = state;
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'flex') {
    return (
      <Box style={styles.content}>
        <Box style={styles.subContent}>
          {tabs.slice(0, 2).map((e, i) => {
            return (
              <Box
                key={i}
                onPress={() => _goToPage(e - 1)}
                activePress
                align="center"
                justify="space-between">
                <Icon
                  name={icon[e - 1]}
                  size={20}
                  color={activeIcon === e - 1 ? COLORS.WHITE : COLORS.MONO_300}
                />
                <Typography
                  key={i}
                  margin={[5, 0, 0, 0]}
                  type="Small - Semibold"
                  color={activeIcon === i ? 'WHITE' : 'MONO_300'}>
                  {i18n.t(label[e - 1])}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box style={styles.subContent2}>
          {tabs.slice(2, 4).map((e, i) => {
            return (
              <Box
                key={i}
                onPress={() => _goToPage(e - 1)}
                activePress
                align="center"
                justify="space-between">
                <Icon
                  name={icon[e - 1]}
                  size={20}
                  color={activeIcon === e ? COLORS.WHITE : COLORS.MONO_300}
                />
                <Typography
                  margin={[5, 0, 0, 0]}
                  type="Small - Semibold"
                  color={activeIcon === i + 3 ? 'WHITE' : 'MONO_300'}>
                  {i18n.t(label[e - 1])}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          style={styles.subContent3}
          activePress
          circle={62 * (deviceWidth / 414)}
          onPress={() => props?.navigation?.navigate(ScreensName.UnlockRoute)}
        />
        <Svg width="100%" height="120" viewBox="0 -8 414 120" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M208 84C220.673 84 232.034 78.3875 239.735 69.5126C250.594 56.9984 263.431 42 280 42H406C410.418 42 414 45.5817 414 50V119C414 119.552 413.552 120 413 120H1.00001C0.447723 120 0 119.552 0 119V50C0 45.5817 3.58172 42 8 42H136C152.569 42 165.406 56.9984 176.265 69.5126C183.966 78.3875 195.327 84 208 84Z"
            fill="#990078"
          />
          <Rect
            width="82"
            height="78"
            transform="translate(0 42)"
            fill="#990078"
          />

          <Path
            d="M193.415 92.02V99H192.015V94.46L190.145 99H189.085L187.205 94.46V99H185.805V92.02H187.395L189.615 97.21L191.835 92.02H193.415ZM199.849 96.26C199.849 96.8667 199.739 97.3833 199.519 97.81C199.306 98.23 198.999 98.55 198.599 98.77C198.206 98.99 197.736 99.1 197.189 99.1C196.683 99.1 196.229 98.99 195.829 98.77C195.436 98.55 195.126 98.23 194.899 97.81C194.673 97.3833 194.559 96.8667 194.559 96.26C194.559 95.3533 194.796 94.6567 195.269 94.17C195.743 93.6833 196.393 93.44 197.219 93.44C197.586 93.44 197.933 93.4967 198.259 93.61C198.586 93.7233 198.863 93.89 199.089 94.11C199.269 94.0567 199.413 93.9667 199.519 93.84C199.626 93.7067 199.703 93.5467 199.749 93.36C199.796 93.1667 199.819 92.9533 199.819 92.72H201.289L201.359 92.83C201.293 93.15 201.199 93.45 201.079 93.73C200.966 94.0033 200.793 94.24 200.559 94.44C200.326 94.64 200.006 94.7933 199.599 94.9C199.679 95.0933 199.739 95.3033 199.779 95.53C199.826 95.7567 199.849 96 199.849 96.26ZM196.079 96.26C196.079 96.62 196.116 96.9233 196.189 97.17C196.269 97.41 196.393 97.5933 196.559 97.72C196.726 97.84 196.943 97.9 197.209 97.9C197.476 97.9 197.689 97.84 197.849 97.72C198.016 97.5933 198.136 97.41 198.209 97.17C198.289 96.9233 198.329 96.62 198.329 96.26C198.329 95.9 198.289 95.6 198.209 95.36C198.136 95.12 198.016 94.94 197.849 94.82C197.683 94.7 197.466 94.64 197.199 94.64C196.806 94.64 196.519 94.7767 196.339 95.05C196.166 95.3167 196.079 95.72 196.079 96.26ZM198.419 91.74C198.419 91.9867 198.353 92.1933 198.219 92.36C198.086 92.52 197.889 92.6333 197.629 92.7L197.579 93.05H196.729L196.619 92.33C196.866 92.29 197.033 92.23 197.119 92.15C197.206 92.0633 197.249 91.96 197.249 91.84C197.249 91.7333 197.216 91.6533 197.149 91.6C197.083 91.5467 196.993 91.52 196.879 91.52C196.753 91.52 196.633 91.53 196.519 91.55C196.413 91.57 196.306 91.5967 196.199 91.63V90.81C196.293 90.7767 196.419 90.75 196.579 90.73C196.739 90.71 196.899 90.7 197.059 90.7C197.513 90.7 197.853 90.79 198.079 90.97C198.306 91.15 198.419 91.4067 198.419 91.74ZM207.249 99L205.369 96.64V99H203.969V91.6H205.369V95.81L207.229 93.46H209.049L206.609 96.24L209.069 99H207.249ZM212.929 93.38C213.349 93.38 213.722 93.4733 214.049 93.66C214.376 93.84 214.629 94.11 214.809 94.47C214.996 94.8233 215.089 95.25 215.089 95.75V99H213.689V95.94C213.689 95.5 213.579 95.1633 213.359 94.93C213.139 94.69 212.839 94.57 212.459 94.57C212.072 94.57 211.766 94.69 211.539 94.93C211.319 95.1633 211.209 95.5 211.209 95.94V99H209.809V91.6H211.209V94.15C211.389 93.91 211.629 93.7233 211.929 93.59C212.229 93.45 212.562 93.38 212.929 93.38ZM218.88 99.09C218.347 99.09 217.867 98.9733 217.44 98.74C217.014 98.5 216.677 98.1633 216.43 97.73C216.19 97.2967 216.07 96.7967 216.07 96.23C216.07 95.6633 216.194 95.1633 216.44 94.73C216.694 94.2967 217.037 93.9633 217.47 93.73C217.904 93.49 218.387 93.37 218.92 93.37C219.454 93.37 219.937 93.49 220.37 93.73C220.804 93.9633 221.144 94.2967 221.39 94.73C221.644 95.1633 221.77 95.6633 221.77 96.23C221.77 96.7967 221.64 97.2967 221.38 97.73C221.127 98.1633 220.78 98.5 220.34 98.74C219.907 98.9733 219.42 99.09 218.88 99.09ZM218.88 97.87C219.134 97.87 219.37 97.81 219.59 97.69C219.817 97.5633 219.997 97.3767 220.13 97.13C220.264 96.8833 220.33 96.5833 220.33 96.23C220.33 95.7033 220.19 95.3 219.91 95.02C219.637 94.7333 219.3 94.59 218.9 94.59C218.5 94.59 218.164 94.7333 217.89 95.02C217.624 95.3 217.49 95.7033 217.49 96.23C217.49 96.7567 217.62 97.1633 217.88 97.45C218.147 97.73 218.48 97.87 218.88 97.87ZM222.437 96.21C222.437 95.65 222.547 95.1533 222.767 94.72C222.994 94.2867 223.297 93.9533 223.677 93.72C224.064 93.4867 224.494 93.37 224.967 93.37C225.381 93.37 225.741 93.4533 226.047 93.62C226.361 93.7867 226.611 93.9967 226.797 94.25V93.46H228.207V99H226.797V98.19C226.617 98.45 226.367 98.6667 226.047 98.84C225.734 99.0067 225.371 99.09 224.957 99.09C224.491 99.09 224.064 98.97 223.677 98.73C223.297 98.49 222.994 98.1533 222.767 97.72C222.547 97.28 222.437 96.7767 222.437 96.21ZM226.797 96.23C226.797 95.89 226.731 95.6 226.597 95.36C226.464 95.1133 226.284 94.9267 226.057 94.8C225.831 94.6667 225.587 94.6 225.327 94.6C225.067 94.6 224.827 94.6633 224.607 94.79C224.387 94.9167 224.207 95.1033 224.067 95.35C223.934 95.59 223.867 95.8767 223.867 96.21C223.867 96.5433 223.934 96.8367 224.067 97.09C224.207 97.3367 224.387 97.5267 224.607 97.66C224.834 97.7933 225.074 97.86 225.327 97.86C225.587 97.86 225.831 97.7967 226.057 97.67C226.284 97.5367 226.464 97.35 226.597 97.11C226.731 96.8633 226.797 96.57 226.797 96.23ZM226.607 92.02L224.307 93.07V92.07L226.607 90.88V92.02Z"
            fill="#990078"
          />

          <Rect
            width="82"
            height="78"
            transform="translate(332 42)"
            fill="#990078"
          />

          <Rect x="171" y="4" width="72" height="72" rx="36" fill="#990078" />
          <Path
            d="M200.778 54H194.556C194.143 54 193.748 53.8361 193.456 53.5444C193.164 53.2527 193 52.857 193 52.4445V46.2222C193 45.8097 192.836 45.414 192.545 45.1223C192.253 44.8306 191.857 44.6667 191.445 44.6667C191.032 44.6667 190.636 44.8306 190.345 45.1223C190.053 45.414 189.889 45.8097 189.889 46.2222V52.4445C189.889 53.6821 190.381 54.8691 191.256 55.7443C192.131 56.6195 193.318 57.1111 194.556 57.1111H200.778C201.191 57.1111 201.586 56.9472 201.878 56.6555C202.17 56.3638 202.334 55.9681 202.334 55.5556C202.334 55.143 202.17 54.7474 201.878 54.4556C201.586 54.1639 201.191 54 200.778 54ZM222.556 44.6667C222.143 44.6667 221.748 44.8306 221.456 45.1223C221.164 45.414 221 45.8097 221 46.2222V52.4445C221 52.857 220.836 53.2527 220.545 53.5444C220.253 53.8361 219.857 54 219.445 54H213.222C212.81 54 212.414 54.1639 212.123 54.4556C211.831 54.7474 211.667 55.143 211.667 55.5556C211.667 55.9681 211.831 56.3638 212.123 56.6555C212.414 56.9472 212.81 57.1111 213.222 57.1111H219.445C220.682 57.1111 221.869 56.6195 222.745 55.7443C223.62 54.8691 224.111 53.6821 224.111 52.4445V46.2222C224.111 45.8097 223.947 45.414 223.656 45.1223C223.364 44.8306 222.968 44.6667 222.556 44.6667ZM219.445 22.8889H213.222C212.81 22.8889 212.414 23.0528 212.123 23.3445C211.831 23.6363 211.667 24.0319 211.667 24.4445C211.667 24.857 211.831 25.2527 212.123 25.5444C212.414 25.8361 212.81 26 213.222 26H219.445C219.857 26 220.253 26.1639 220.545 26.4556C220.836 26.7474 221 27.143 221 27.5556V33.7778C221 34.1904 221.164 34.586 221.456 34.8777C221.748 35.1695 222.143 35.3334 222.556 35.3334C222.968 35.3334 223.364 35.1695 223.656 34.8777C223.947 34.586 224.111 34.1904 224.111 33.7778V27.5556C224.111 26.3179 223.62 25.1309 222.745 24.2558C221.869 23.3806 220.682 22.8889 219.445 22.8889ZM191.445 35.3334C191.857 35.3334 192.253 35.1695 192.545 34.8777C192.836 34.586 193 34.1904 193 33.7778V27.5556C193 27.143 193.164 26.7474 193.456 26.4556C193.748 26.1639 194.143 26 194.556 26H200.778C201.191 26 201.586 25.8361 201.878 25.5444C202.17 25.2527 202.334 24.857 202.334 24.4445C202.334 24.0319 202.17 23.6363 201.878 23.3445C201.586 23.0528 201.191 22.8889 200.778 22.8889H194.556C193.318 22.8889 192.131 23.3806 191.256 24.2558C190.381 25.1309 189.889 26.3179 189.889 27.5556V33.7778C189.889 34.1904 190.053 34.586 190.345 34.8777C190.636 35.1695 191.032 35.3334 191.445 35.3334ZM203.889 29.1111H197.667C197.254 29.1111 196.859 29.275 196.567 29.5667C196.275 29.8585 196.111 30.2541 196.111 30.6667V36.8889C196.111 37.3015 196.275 37.6971 196.567 37.9889C196.859 38.2806 197.254 38.4445 197.667 38.4445H203.889C204.302 38.4445 204.697 38.2806 204.989 37.9889C205.281 37.6971 205.445 37.3015 205.445 36.8889V30.6667C205.445 30.2541 205.281 29.8585 204.989 29.5667C204.697 29.275 204.302 29.1111 203.889 29.1111ZM202.334 35.3334H199.222V32.2222H202.334V35.3334ZM210.111 38.4445H216.334C216.746 38.4445 217.142 38.2806 217.434 37.9889C217.725 37.6971 217.889 37.3015 217.889 36.8889V30.6667C217.889 30.2541 217.725 29.8585 217.434 29.5667C217.142 29.275 216.746 29.1111 216.334 29.1111H210.111C209.699 29.1111 209.303 29.275 209.011 29.5667C208.72 29.8585 208.556 30.2541 208.556 30.6667V36.8889C208.556 37.3015 208.72 37.6971 209.011 37.9889C209.303 38.2806 209.699 38.4445 210.111 38.4445ZM211.667 32.2222H214.778V35.3334H211.667V32.2222ZM203.889 41.5556H197.667C197.254 41.5556 196.859 41.7195 196.567 42.0112C196.275 42.3029 196.111 42.6986 196.111 43.1111V49.3334C196.111 49.7459 196.275 50.1416 196.567 50.4333C196.859 50.725 197.254 50.8889 197.667 50.8889H203.889C204.302 50.8889 204.697 50.725 204.989 50.4333C205.281 50.1416 205.445 49.7459 205.445 49.3334V43.1111C205.445 42.6986 205.281 42.3029 204.989 42.0112C204.697 41.7195 204.302 41.5556 203.889 41.5556ZM202.334 47.7778H199.222V44.6667H202.334V47.7778ZM210.111 46.2222C210.524 46.2222 210.92 46.0584 211.211 45.7666C211.503 45.4749 211.667 45.0793 211.667 44.6667C212.079 44.6667 212.475 44.5028 212.767 44.2111C213.059 43.9194 213.222 43.5237 213.222 43.1111C213.222 42.6986 213.059 42.3029 212.767 42.0112C212.475 41.7195 212.079 41.5556 211.667 41.5556H210.111C209.699 41.5556 209.303 41.7195 209.011 42.0112C208.72 42.3029 208.556 42.6986 208.556 43.1111V44.6667C208.556 45.0793 208.72 45.4749 209.011 45.7666C209.303 46.0584 209.699 46.2222 210.111 46.2222ZM216.334 41.5556C215.921 41.5556 215.525 41.7195 215.234 42.0112C214.942 42.3029 214.778 42.6986 214.778 43.1111V47.7778C214.365 47.7778 213.97 47.9417 213.678 48.2334C213.386 48.5251 213.222 48.9208 213.222 49.3334C213.222 49.7459 213.386 50.1416 213.678 50.4333C213.97 50.725 214.365 50.8889 214.778 50.8889H216.334C216.746 50.8889 217.142 50.725 217.434 50.4333C217.725 50.1416 217.889 49.7459 217.889 49.3334V43.1111C217.889 42.6986 217.725 42.3029 217.434 42.0112C217.142 41.7195 216.746 41.5556 216.334 41.5556ZM210.111 47.7778C209.804 47.7778 209.503 47.869 209.247 48.04C208.991 48.2109 208.792 48.4538 208.674 48.7381C208.556 49.0223 208.526 49.3351 208.586 49.6368C208.646 49.9386 208.794 50.2158 209.011 50.4333C209.229 50.6509 209.506 50.799 209.808 50.859C210.11 50.919 210.422 50.8882 210.707 50.7705C210.991 50.6528 211.234 50.4534 211.405 50.1976C211.576 49.9418 211.667 49.641 211.667 49.3334C211.667 48.9208 211.503 48.5251 211.211 48.2334C210.92 47.9417 210.524 47.7778 210.111 47.7778Z"
            fill="white"
          />
        </Svg>
      </Box>
    );
  } else {
    return null;
  }
};

export default CustomCurvedBottomTab;

const styles = StyleSheet.create({
  content: {
    zIndex: 0,
    width: deviceWidth,
    height: 0,
    justifyContent: 'flex-end',
  },
  subContent: {
    width: (deviceWidth - 140) / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    left: 15,
  },

  subContent2: {
    width: (deviceWidth - 140) / 2,
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    right: 15,
  },

  subContent3: {
    zIndex: 1,
    position: 'absolute',
    bottom: 45,
    left: deviceWidth / 2 - (62 * (deviceWidth / 414)) / 2,
  },
});
