import React, { useState } from 'react';
import styles from './user.module.scss';
import classNames from 'classnames';

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
                    <button
                        className={classNames(
                            styles.navButton,
                            isActive['Profile'] && styles.active,
                            isActive['Profile'] && styles.clicked,
                            styles.UsernameButton
                        )}
                        onClick={() => handleClick('Profile')}
                    >
                        +
                    </button>
                </div>
                <div className={classNames(styles.navButtons)}>
                    <button
                        className={classNames(
                            styles.navButton,
                            isActive['Profile'] && styles.active,
                            isActive['Profile'] && styles.clicked
                        )}
                        onClick={() => handleClick('Profile')}
                    >
                        Profile
                    </button>
                    <button
                        className={classNames(
                            styles.navButton,
                            isActive['Play'] && styles.active,
                            isActive['Play'] && styles.clicked
                        )}
                        onClick={() => handleClick('Play')}
                    >
                        Play
                    </button>
                    <button
                        className={classNames(
                            styles.navButton,
                            isActive['Messages'] && styles.active,
                            isActive['Messages'] && styles.clicked
                        )}
                        onClick={() => handleClick('Messages')}
                    >
                        Messages
                    </button>
                    <button
                        className={classNames(
                            styles.navButton,
                            isActive['About us'] && styles.active,
                            isActive['About us'] && styles.clicked
                        )}
                        onClick={() => handleClick('About us')}
                    >
                        About us
                    </button>
                </div>
            </nav>
        </div>
    );
};
