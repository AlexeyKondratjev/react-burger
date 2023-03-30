import { TIngredient } from "../services/types/data";



const getOrderIngredients = (ingredientsArr: string[], allIngredientsArr: TIngredient[]) => {
  return ingredientsArr?.map(id => {
    return allIngredientsArr.find((item) => {
      return item._id === id
    });
  });
};

const getOrderPrice = (ingredientsArr: (TIngredient | undefined)[]) => {
  return ingredientsArr?.reduce((sum, item) => {
    return sum += item ? item.price : 0;
  }, 0);
};


export { getOrderIngredients, getOrderPrice };
