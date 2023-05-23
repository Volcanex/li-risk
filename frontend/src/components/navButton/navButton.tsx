// src/components/navButton/navButton.tsx
import React from 'react';
import classNames from 'classnames';
import styles from './navButton.module.scss';

interface NavButtonProps {
    isActive: boolean;
    handleClick: () => void;
    label: string;
    isUsernameButton?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ isActive, handleClick, label, isUsernameButton }) => {
    return (
        <button
            className={classNames(
                styles.navButton,
                isActive && styles.active,
                isActive && styles.clicked,
                isUsernameButton && styles.UsernameButton
            )}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default NavButton;
