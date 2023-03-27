import React from "react";
import { useSelector } from "react-redux";
import { ImgsWrapperSC } from "./ingredients";
import './styles.scss'
import {motion} from 'framer-motion'


function Ingredients() {
  const { selectedIngredients, ingredients } = useSelector(
    (store) => store.builder
  );

  return (
    <ImgsWrapperSC >
      {selectedIngredients.map((ingredient, index) => {
        const currentIngredient = ingredients.find(
          (item) => item.id == ingredient
        );
        return (
          <motion.img 
          initial={{translateX: '-400px'}}
          transition={{duration: 0.7}}
          animate={{translateX: '0px'}}
          className={currentIngredient.name} key={index} src={currentIngredient.burgerImg} alt="ingredient" />
        );
      })}
    </ImgsWrapperSC>
  );
}

export default Ingredients;
