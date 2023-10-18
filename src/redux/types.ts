import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Nullable } from 'types/types';

export interface IIConData {
  data: IconProp;
  id: string;
}

// redux initial state interfaces
export interface MainState {
  currentlyDisplayedIcon: Nullable<IconProp>;
  iconsQueue: Array<IIConData>;
  isIconChanging: boolean;
}
