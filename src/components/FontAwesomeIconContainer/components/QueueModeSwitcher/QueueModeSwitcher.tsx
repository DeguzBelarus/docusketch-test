import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { classNames } from 'helpers/classNames';
import { getIsQueueMode, setIsQueueMode, getIconsQueue } from 'redux/slices/mainSlice';
import styles from './QueueModeSwitcher.module.scss';

export const QueueModeSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const isQueueMode = useAppSelector(getIsQueueMode);
  const iconsQueue = useAppSelector(getIconsQueue);
  const queueModeEnableTextIndicator = isQueueMode ? 'enabled' : 'disabled';

  const queueModeToggler = () => {
    dispatch(setIsQueueMode(!isQueueMode));
  };
  return (
    <div className={classNames(styles.QueueModeSwitcher)}>
      <button
        className={classNames(styles['queue-mode-toggle-button'], [], {
          [styles.active]: isQueueMode,
        })}
        type="button"
        disabled={Boolean(iconsQueue?.length)}
        onClick={queueModeToggler}
      >
        <span>{`queue mode: ${queueModeEnableTextIndicator}`}</span>
      </button>
    </div>
  );
};
