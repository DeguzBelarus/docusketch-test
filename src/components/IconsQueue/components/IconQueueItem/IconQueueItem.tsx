import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  setIconsQueue,
  getIconsQueue,
  setCurrentlyDisplayedIcon,
  getIsQueueMode,
} from 'redux/slices/mainSlice';
import { classNames } from 'helpers/classNames';
import styles from './IconQueueItem.module.scss';

interface Props {
  position: number;
  data: IconProp;
  id: string;
}

export const IconQueueItem: FC<Props> = ({ position, data, id }) => {
  const isFirst = position === 1;
  const dispatch = useAppDispatch();
  const iconsQueue = useAppSelector(getIconsQueue);
  const isQueueMode = useAppSelector(getIsQueueMode);

  const changeCurrentlyDisplayedIcon = () => {
    dispatch(setIconsQueue(iconsQueue.filter((iconQueueItem) => iconQueueItem.id !== id)));
    dispatch(setCurrentlyDisplayedIcon(data));
  };
  return (
    <div className={classNames(styles.IconQueueItem)}>
      <span className={classNames(styles['id-span'])}>{position}</span>
      <FontAwesomeIcon icon={data} style={{ width: 'auto', height: '85%', color: '#007DB6' }} />
      {isFirst || !isQueueMode ? (
        <div
          className={classNames(styles['progress-bar'])}
          onAnimationEnd={changeCurrentlyDisplayedIcon}
        ></div>
      ) : null}
    </div>
  );
};
