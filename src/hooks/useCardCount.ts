import { useMemo } from 'react';

import {
  BREAKPOINT_NETBOOK,
  CARD_COUNT_DESKTOP,
  CARD_COUNT_MOBILE,
} from '../utils/constResizeWindow';

const useCardCount = (width: number): number =>
  useMemo(() => {
    switch (true) {
      case width <= BREAKPOINT_NETBOOK:
        return CARD_COUNT_MOBILE;
      default:
        return CARD_COUNT_DESKTOP;
    }
  }, [width]);

export { useCardCount };
