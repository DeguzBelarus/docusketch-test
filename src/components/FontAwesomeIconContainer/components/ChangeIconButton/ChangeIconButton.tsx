import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as freeBrandsSvgIcons from '@fortawesome/free-brands-svg-icons';
import * as freeRegularSvgIcons from '@fortawesome/free-regular-svg-icons';
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidV4 } from 'uuid';

import { getIsIconChanging, setIconsQueue, getIconsQueue } from 'redux/slices/mainSlice';
import styles from './ChangeIconButton.module.scss';
import { classNames } from 'helpers/classNames';

export const ChangeIconButton: FC = () => {
  const dispatch = useAppDispatch();
  const isIconChanging = useAppSelector(getIsIconChanging);
  const iconsQueue = useAppSelector(getIconsQueue);
  const iconsSets = [freeBrandsSvgIcons, freeRegularSvgIcons, freeSolidSvgIcons];
  const maxIconsSetIndex = iconsSets?.length - 1;

  const getRandomIcon = () => {
    const randomChosenIconSet = iconsSets[Math.round(Math.random() * maxIconsSetIndex)];
    const chosenIconsSetIconsNames = Object.keys(randomChosenIconSet) as Array<
      keyof typeof randomChosenIconSet
    >;
    const maxChosenIconIndex = chosenIconsSetIconsNames?.length - 1;
    const randomChosenIconFromSet = randomChosenIconSet[
      chosenIconsSetIconsNames[Math.round(Math.random() * maxChosenIconIndex)]
    ] as IconProp;
    const id = uuidV4();
    dispatch(setIconsQueue([...iconsQueue, { data: randomChosenIconFromSet, id }]));
  };
  return (
    <div
      className={classNames(styles.ChangeIconButton, [], { [styles.disabled]: isIconChanging })}
      role="button"
      onClick={getRandomIcon}
    >
      generate an icon
    </div>
  );
};
