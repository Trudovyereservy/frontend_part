import { useMemo } from 'react';
import {
    BREAKPOINT_DESKTOP,
    BREAKPOINT_LAPTOP,
    CARD_COUNT_DESKTOP,
    CARD_COUNT_LAPTOP,
} from '../utils/constResizeWindow';

const useCardCount = (width: number): number => {
  return useMemo(() => {
    switch (true) {
      case width === BREAKPOINT_LAPTOP:
        return CARD_COUNT_LAPTOP;
      case width < BREAKPOINT_DESKTOP:
        return CARD_COUNT_DESKTOP;
      default:
        return CARD_COUNT_LAPTOP;
    }
  }, [width]);
};

export { useCardCount };
