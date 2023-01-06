import styles from './OrderInfo.module.css';
import PropTypes from 'prop-types';



function OrderInfo({ orderId, orderStatus, orderInfoMessage }) {
  return (
    <div className={styles.content}>
      <h3 className={`${styles.header} text text_type_digits-large mt-4`}>{orderId}</h3>
      <p className='text text_type_main-medium mt-8'>идентификатор заказа</p>
      <div className={`${styles.image} mt-15`} ></div>
      <p className='text text_type_main-default mt-15'>{orderStatus}</p>
      <p className='text text_type_main-default text_color_inactive mt-2 mb-30'>{orderInfoMessage}</p>
    </div>
  );
}



OrderInfo.propTypes = {
  orderId: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderInfoMessage: PropTypes.string
};



export default OrderInfo;
