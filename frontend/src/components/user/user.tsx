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
            <div className="row">
                <div className="column">
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
                </div>
                <div className="column">
                    <h2>USERNAME</h2>
                    <p>Test</p>
                </div>
            </div>
        </div>
    );
};
