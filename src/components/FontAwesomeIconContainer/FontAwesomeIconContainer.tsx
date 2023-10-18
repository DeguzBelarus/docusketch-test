import { FC } from 'react';
import { useAppSelector } from 'redux/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getCurrentDisplayedIcon } from 'redux/slices/mainSlice';
import { classNames } from 'helpers/classNames';
import { ChangeIconButton } from './components/ChangeIconButton/ChangeIconButton';
import defaultIcon from '../../assets/img/ds-icon.jpg';
import styles from './FontAwesomeIconContainer.module.scss';

export const FontAwesomeIconContainer: FC = () => {
  const currentlyDisplayedIcon = useAppSelector(getCurrentDisplayedIcon);

  return (
    <div className={classNames(styles.FontAwesomeIconContainer)}>
      <div className={classNames(styles['icon-wrapper'])}>
        {currentlyDisplayedIcon ? (
          <FontAwesomeIcon icon={currentlyDisplayedIcon} style={{ width: '95%', height: '95%' }} />
        ) : (
          <img
            src={defaultIcon}
            className={classNames(styles['default-icon-image'])}
            alt="a symbol of a question"
          />
        )}
      </div>
      <ChangeIconButton />
    </div>
  );
};
