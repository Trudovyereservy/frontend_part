import { useMemo } from 'react';

import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  CARD_COUNT_DESKTOP,
  CARD_COUNT_LAPTOP,
  CARD_COUNT_MOBILE,
} from '../utils/constResizeWindow';

type CardCountConfig = {
  default: number;
  [BREAKPOINT_LAPTOP]?: number;
  [BREAKPOINT_DESKTOP]?: number;
  [BREAKPOINT_MOBILE]?: number;
};

const cardCountConfigs: Record<string, CardCountConfig> = {
  mainComponent: {
    default: 3,
    [BREAKPOINT_MOBILE]: 4,
  },
  blogsComponent: {
    default: CARD_COUNT_LAPTOP,
    [BREAKPOINT_LAPTOP]: 8,
    [BREAKPOINT_DESKTOP]: 9,
    [BREAKPOINT_MOBILE]: 8,
  },
  coachesComponent: {
    default: CARD_COUNT_LAPTOP,
    [BREAKPOINT_LAPTOP]: 8,
    [BREAKPOINT_DESKTOP]: 9,
    [BREAKPOINT_MOBILE]: 8,
  },
};

const useCardCount = (width: number, componentName: string): number =>
  useMemo(() => {
    const cardCountConfig = cardCountConfigs[componentName];
    // Возвращаем количество карточек для конкретного разрешения, если оно указано
    // В противном случае возвращаем значение по умолчанию
    if (width >= BREAKPOINT_DESKTOP && typeof cardCountConfig[BREAKPOINT_DESKTOP] === 'number') {
      return cardCountConfig[BREAKPOINT_DESKTOP];
    } else if (
      width >= BREAKPOINT_LAPTOP &&
      typeof cardCountConfig[BREAKPOINT_LAPTOP] === 'number'
    ) {
      return cardCountConfig[BREAKPOINT_LAPTOP];
    } else if (
      width > BREAKPOINT_MOBILE &&
      typeof cardCountConfig[BREAKPOINT_MOBILE] === 'number'
    ) {
      return cardCountConfig[BREAKPOINT_MOBILE];
    } else {
      return cardCountConfig.default;
    }
  }, [width, componentName]);

export { useCardCount };
