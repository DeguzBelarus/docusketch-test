import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { RootState } from '../store';
import { IIConData, MainState } from '../types';
import { Nullable } from 'types/types';

const initialState: MainState = {
  currentlyDisplayedIcon: null,
  iconsQueue: [],
  isIconChanging: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCurrentlyDisplayedIcon(
      state: WritableDraft<MainState>,
      { payload }: PayloadAction<Nullable<IconProp>>,
    ) {
      state.currentlyDisplayedIcon = payload;
    },
    setIconsQueue(state: WritableDraft<MainState>, { payload }: PayloadAction<Array<IIConData>>) {
      state.iconsQueue = payload;
    },
    setIsIconChanging(state: WritableDraft<MainState>, { payload }: PayloadAction<boolean>) {
      state.isIconChanging = payload;
    },
  },
});

export const {
  actions: { setCurrentlyDisplayedIcon, setIsIconChanging, setIconsQueue },
} = mainSlice;

export const getCurrentDisplayedIcon = ({ main: { currentlyDisplayedIcon } }: RootState) =>
  currentlyDisplayedIcon;
export const getIsIconChanging = ({ main: { isIconChanging } }: RootState) => isIconChanging;
export const getIconsQueue = ({ main: { iconsQueue } }: RootState) => iconsQueue;

export const { reducer } = mainSlice;
