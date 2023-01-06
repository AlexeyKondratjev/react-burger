import React from 'react';
import styles from './IngredientIcon.module.css';



export function IngredientIcon({ ingredient, numberToRender = 0 }) {
  return (
    <div className={styles.iconContainer}>
      <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
      {numberToRender ? (<div className={styles.overlay}>
        <p className='text text_type_main-default'>{`+${numberToRender}`}</p>
      </div>) : null}
    </div>
  );
}
