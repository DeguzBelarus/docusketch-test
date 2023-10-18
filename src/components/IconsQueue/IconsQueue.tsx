import { FC } from 'react';
import { useAppSelector } from 'redux/hooks';

import { getIconsQueue } from 'redux/slices/mainSlice';
import { classNames } from 'helpers/classNames';
import { IconQueueItem } from './components/IconQueueItem/IconQueueItem';
import styles from './IconsQueue.module.scss';

export const IconsQueue: FC = () => {
  const iconsQueue = useAppSelector(getIconsQueue);
  const isIconsQueueEmpty = iconsQueue?.length < 1;
  return (
    <div className={classNames(styles.IconsQueue, [], { [styles.empty]: isIconsQueueEmpty })}>
      {isIconsQueueEmpty ? (
        <span className={classNames(styles['empty-notification-span'])}>
          there are no icons in the queue
        </span>
      ) : (
        <>
          {iconsQueue.map((iconInQueue, index) => {
            const { data, id } = iconInQueue;
            return <IconQueueItem data={data} position={index + 1} id={id} key={id} />;
          })}
        </>
      )}
    </div>
  );
};
