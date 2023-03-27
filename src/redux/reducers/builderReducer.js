import { builderTypes } from "../types/builderTypes";

const initialState = {
  ingredients: [
    {
      id: "1",
      name: "Tomate",
      price: 5,
      img: "https://i.ibb.co/k6hDX6F/tomate.png",
      burgerImg: "https://i.ibb.co/qFXQ8dL/tomates.png",
    },
    {
      id: "2",
      name: "Lechuga",
      price: 2,
      img: "https://i.ibb.co/9t32qPS/lechuga.png",
      burgerImg: "https://i.ibb.co/tHpFNs8/lechuga.png",
    },
    {
      id: "3",
      name: "Queso",
      price: 5,
      img: "https://www.merkadomi.com/wp-content/uploads/2020/11/QUESO-DOBLE-CREMA-TAJADO.jpg",
      burgerImg: "https://i.ibb.co/GFfP2hF/quesito.png",
    },
    {
      id: "4",
      name: "Carne",
      price: 20,
      img: "https://media.istockphoto.com/id/1204417280/photo/grilled-hamburger-meat-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=72xYpv2v3TuUB0SpMTa2lyBvc1K25o1bXQIx7iMHchM=",
      burgerImg: "https://i.ibb.co/56P3Qd2/carne.png",
    },
  ],
  selectedIngredients: [],
  totalBurger: 0,
  burgers: [],
  totalPrice: 0,
};

export const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case builderTypes.ADD_INGREDIENT:
      const ingredient = state.ingredients.find(
        (ingredient) => ingredient.id === action.payload
      );
      console.log(ingredient);
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.payload],
        totalBurger: state.totalBurger + ingredient.price,
      };
    case builderTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          (_, index) => index !== action.payload
        ),
        totalBurger:
          state.totalBurger -
          state.ingredients.find(
            (ingredient) =>
              ingredient.id === state.selectedIngredients[action.payload]
          ).price,
      };
    case builderTypes.CONFIRM_BURGER:
      return {
        ...state,
        burgers: [...state.burgers, action.payload],
        selectedIngredients: [],
        totalBurger: 0,
        totalPrice: state.totalPrice + action.payload.total,
      };

    case builderTypes.DELETE_BURGER:
      return {
        ...state,
        burgers: state.burgers.filter((burger) => burger.id !== action.payload),
        totalPrice:
          state.totalPrice -
          state.burgers.find((burger) => burger.id === action.payload).total,
      };
    case builderTypes.RESET_RECEIPT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
