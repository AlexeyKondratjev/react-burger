import styles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



function IngredientDetails() {
  const { id } = useParams();
  const { allIngredients } = useSelector(store => store.allIngredients);
  const ingredientData = allIngredients?.find(item => item._id === id);

  if (!ingredientData) {
    return null;
  }

  return (
    <div className={styles.content}>
      <img src={ingredientData.image_large} alt={ingredientData.name} className={styles.image} />
      <h3 className="text text_type_main-medium mt-4">{ingredientData.name}</h3>

      <ul className={`${styles.propertiesList} mt-8`}>
        <li className={`${styles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Калории,&nbsp;ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.calories}</p>
        </li>
        <li className={`${styles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Белки,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.proteins}</p>
        </li>
        <li className={`${styles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Жиры,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.fat}</p>
        </li>
        <li className={styles.propertiesListItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}


export default IngredientDetails;
