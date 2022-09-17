import ingredientDetailsStyles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';



function IngredientDetails() {
  const ingredientData = useSelector(store => store.viewedIngredient.ingredientData);

  return (
    <div className={ingredientDetailsStyles.content}>
      <img src={ingredientData.image_large} alt={ingredientData.name} className={ingredientDetailsStyles.image} />
      <h3 className="text text_type_main-medium mt-4">{ingredientData.name}</h3>

      <ul className={`${ingredientDetailsStyles.propertiesList} mt-8`}>
        <li className={`${ingredientDetailsStyles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Калории,&nbsp;ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.calories}</p>
        </li>
        <li className={`${ingredientDetailsStyles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Белки,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.proteins}</p>
        </li>
        <li className={`${ingredientDetailsStyles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Жиры,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.fat}</p>
        </li>
        <li className={ingredientDetailsStyles.propertiesListItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredientData.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}


export default IngredientDetails;
