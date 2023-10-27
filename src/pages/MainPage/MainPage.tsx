import { FC } from 'react';

import { classNames } from 'helpers/classNames';
import { FontAwesomeIconContainer } from 'components/FontAwesomeIconContainer/FontAwesomeIconContainer';
import styles from './MainPage.module.scss';
import { IconsQueue } from 'components/IconsQueue/IconsQueue';

export const MainPage: FC = () => {
  return (
    <div className={classNames(styles.MainPage)}>
      <IconsQueue />
      <FontAwesomeIconContainer />
    </div>
  );
};
