import styles from './map.module.scss';
import classNames from 'classnames';

export interface MapProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Map = ({ className }: MapProps) => {
    return <div className={classNames(styles.root, className)}>Map</div>;
};
