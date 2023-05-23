// src/components/link-button/linkButton.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './link-button.module.scss';

interface LinkButtonProps {
  to: string;
  isActive: boolean;
  label: string;
  handleClick: () => void;
  isUsernameButton?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  isActive,
  label,
  handleClick,
  isUsernameButton,
}) => {
  return (
    <NavLink
      to={to}
      className={classNames(
        styles.linkButton,
        isActive && styles.active,
        isActive && styles.clicked,
        isUsernameButton && styles.usernameButton
      )}
      onClick={handleClick}
    >
      {label}
    </NavLink>
  );
};

export default LinkButton;
