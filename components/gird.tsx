import styles from '../styles/Grid.module.css';
import cx from 'classnames';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    additionalStyles?: string
}

export default function Grid({ children, additionalStyles }: Props) {
    return (
        <div className={cx("grid gap-1 grid-cols-4 lg:grid-cols-12 lg:gap-5", styles.gridWidthFull, additionalStyles)}>
            {children}
        </div>
    )
}