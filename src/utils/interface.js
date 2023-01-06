import commonStyles from '../pages/commonStyles.module.css';

export const renderOrderStatus = (status, styles) => {
    switch (status) {
        case 'done':
            return <p className={`${styles} ${commonStyles.statusDone}`}>{'Выполнен'}</p>;
        case 'pending':
            return <p className={styles}>{'Готовится'}</p>;
        case 'created':
            return <p className={styles}>{'Создан'}</p>;
        case 'cancelled':
            return <p className={`${styles} ${commonStyles.statusCancelled}`}>{'Отменен'}</p>;
        default:
            return <p className={styles}>{status}</p>
    }
}