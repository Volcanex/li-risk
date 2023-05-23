import styles from './control.module.scss';
import classNames from 'classnames';
import Button from '../button/button';

export interface ControlProps {
    className?: string;
}

export const Control = ({ className }: ControlProps) => {
    return (
        <div className={classNames(styles.root, className, styles.ControlHolder)}>
            <Button
                label="Cards"
                isActive={false}
                handleClick={() => {
                    // handle click logic for Cards button
                }}
            />
            <Button
                label="Next phase"
                isActive={false}
                handleClick={() => {
                    // handle click logic for Next phase button
                }}
            />
            <Button
                label="View"
                isActive={false}
                handleClick={() => {
                    // handle click logic for View button
                }}
            />
        </div>
    );
};
