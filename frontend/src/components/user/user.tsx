import React, { useState } from 'react';
import styles from './user.module.scss';
import classNames from 'classnames';
import LinkButton from '../link-button/link-button';

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
                    <LinkButton
                        to="/profile"
                        isActive={isActive['Profile']}
                        handleClick={() => handleClick('Profile')}
                        label="+"
                        isUsernameButton
                    />
                </div>
                <div className={classNames(styles.navButtons)}>
                    <LinkButton
                        to="/profile"
                        isActive={isActive['Profile']}
                        handleClick={() => handleClick('Profile')}
                        label="Profile"
                    />
                    <LinkButton
                        to="/play"
                        isActive={isActive['Play']}
                        handleClick={() => handleClick('Play')}
                        label="Play"
                    />
                    <LinkButton
                        to="/messages"
                        isActive={isActive['Messages']}
                        handleClick={() => handleClick('Messages')}
                        label="Messages"
                    />
                    <LinkButton
                        to="/about"
                        isActive={isActive['About us']}
                        handleClick={() => handleClick('About us')}
                        label="About us"
                    />
                </div>
            </nav>
        </div>
    );
};
