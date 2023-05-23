// src/components/user/user.tsx
import React, { useState } from 'react';
import styles from './user.module.scss';
import classNames from 'classnames';
import NavButton from '../navButton/navButton';

export interface UserProps {
    className?: string;
}

export const User = ({ className }: UserProps) => {
    const [isActive, setActive] = useState<Record<string, boolean>>({});

    const handleClick = (buttonName: string) => {
        setActive({ [buttonName]: true });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <nav className={classNames(styles.navbar, styles.navbar)}>
                <div className={classNames(styles.profileSection)}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className={styles.profileImg}
                    />
                    <h2 className={styles.username}>Volcanex</h2>
                    <NavButton
                        isActive={isActive['Profile']}
                        handleClick={() => handleClick('Profile')}
                        label="+"
                        isUsernameButton
                    />
                </div>
                <div className={classNames(styles.navButtons)}>
                    <NavButton
                        isActive={isActive['Profile']}
                        handleClick={() => handleClick('Profile')}
                        label="Profile"
                    />
                    <NavButton
                        isActive={isActive['Play']}
                        handleClick={() => handleClick('Play')}
                        label="Play"
                    />
                    <NavButton
                        isActive={isActive['Messages']}
                        handleClick={() => handleClick('Messages')}
                        label="Messages"
                    />
                    <NavButton
                        isActive={isActive['About us']}
                        handleClick={() => handleClick('About us')}
                        label="About us"
                    />
                </div>
            </nav>
        </div>
    );
};
