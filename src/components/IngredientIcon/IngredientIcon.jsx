import React from 'react';
import styles from './IngredientIcon.module.css';



export function IngredientIcon({ ingredientId, numberToRender = 0 }) {
  return (
    <div className={styles.iconContainerWrapper}>
      <div className={styles.iconContainer}>
        <img
          src='https://koshka.top/uploads/posts/2021-11/thumbs/1637346594_33-koshka-top-p-nastoyashchikh-koshechek-40.jpg'
          alt="pic"
          className={styles.image}
        />
        {numberToRender ? (<div className={styles.overlay}>
          <p className='text text_type_main-default'>{`+${numberToRender}`}</p>
        </div>) : null}
      </div>
    </div>
  );
}
