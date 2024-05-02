import { useMemo } from 'react';

import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
} from '../utils/constResizeWindow';
import cardCountConfigs from '../utils/cardCountConfigs';

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
