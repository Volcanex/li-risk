import styles from './user.module.scss';
import classNames from 'classnames';

export interface UserProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const User = ({ className }: UserProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames('row', styles.row)}>
                <div className={classNames('column', styles.column)}></div>
                <div className={classNames('column', styles.column)}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className={styles.ProfileImg}
                    />
                    <h2>USERNAME</h2>
                </div>
            </div>
            <div className={classNames('row', styles.row)}>
                <div className={classNames('column', styles.column)}>
                    <button className={styles.smallButton}>Button</button>
                </div>
                <div className={classNames('column', styles.column)}>
                    <button className={styles.smallButton}>Button</button>
                </div>
                <div className={classNames('column', styles.column)}>
                    <button className={styles.smallButton}>Button</button>
                </div>
                <div className={classNames('column', styles.column)}>
                    <button className={styles.smallButton}>Button</button>
                </div>
            </div>
        </div>
    );
};
