import { useMemo } from 'react';

import {
    BREAKPOINT_TABLET,
    CARD_COUNT_LAPTOP,
    CARD_COUNT_MOBILE
} from '../utils/constResizeWindow';

const useCardCount = (width: number): number => {
  return useMemo(() => {
    switch (true) {
      case width >= BREAKPOINT_TABLET:
        return CARD_COUNT_LAPTOP;
      default:
        return CARD_COUNT_MOBILE;
    }
  }, [width]);
};

export { useCardCount };
