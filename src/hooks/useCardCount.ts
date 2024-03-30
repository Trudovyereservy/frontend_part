import { useMemo } from 'react';

import {
  BREAKPOINT_MOBILE,
  CARD_COUNT_DESKTOP,
  CARD_COUNT_MOBILE,
} from '../utils/constResizeWindow';

const useCardCount = (width: number): number => {
  return useMemo(() => {
    switch (true) {
      case width <= BREAKPOINT_MOBILE:
        return CARD_COUNT_MOBILE;
      default:
        return CARD_COUNT_DESKTOP;
    }
  }, [width]);
};

export { useCardCount };
