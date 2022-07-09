import PropTypes from 'prop-types';
import ingredientDetailsStyles from './IngredientDetails.module.css';

function IngredientDetails({ name, image, calories, proteins, fats, carbohydrates }) {
  return (
    <div className={ingredientDetailsStyles.content}>
      <img src={image} alt={name} className={ingredientDetailsStyles.image} />
      <h3 className="text text_type_main-medium mt-4">{name}</h3>

      <ul className={`${ingredientDetailsStyles.propertiesList} mt-8`}>
        <li className={`${ingredientDetailsStyles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Калории,&nbsp;ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{calories}</p>
        </li>
        <li className={`${ingredientDetailsStyles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Белки,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
        </li>
        <li className={`${ingredientDetailsStyles.propertiesListItem} mr-5`}>
          <p className="text text_type_main-default text_color_inactive">Жиры,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{fats}</p>
        </li>
        <li className={ingredientDetailsStyles.propertiesListItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы,&nbsp;г</p>
          <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired
};

export default IngredientDetails;
