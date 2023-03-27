import { builderTypes } from "../types/builderTypes";

const addIngredient = (id) => {
  return {
    type: builderTypes.ADD_INGREDIENT,
    payload: id,
  };
};

const removeIngredient = (index) => {
  return {
    type: builderTypes.REMOVE_INGREDIENT,
    payload: index,
  };
};

const confirmBurger = (total, ingredients, id) => {
  return {
    type: builderTypes.CONFIRM_BURGER,
    payload: {
      id: id,
      ingredients: ingredients,
      total: total,
    },
  };
};

const removeBurger = (id) => {
  return {
    type: builderTypes.DELETE_BURGER,
    payload: id,
  };
};
const resetReceipt = () => {
  return {
    type: builderTypes.RESET_RECEIPT,
  }
}

export { addIngredient, removeIngredient, confirmBurger, removeBurger, resetReceipt };
