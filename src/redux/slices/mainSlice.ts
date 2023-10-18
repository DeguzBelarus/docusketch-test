import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

import { RootState } from '../store';
import { MainState } from '../types';
import { Nullable } from 'types/types';

const initialState: MainState = {
  currentDisplayedIcon: null,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCurrentDisplayedIcon(
      state: WritableDraft<MainState>,
      { payload }: PayloadAction<Nullable<string>>,
    ) {
      state.currentDisplayedIcon = payload;
    },
  },
});

export const {
  actions: { setCurrentDisplayedIcon },
} = mainSlice;

export const getCurrentDisplayedIcon = ({ main: { currentDisplayedIcon } }: RootState) =>
  currentDisplayedIcon;

export const { reducer } = mainSlice;
