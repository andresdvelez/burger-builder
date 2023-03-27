import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  addIngredient,
  confirmBurger,
} from "../../redux/actions/builderActions";
import Ingredients from "../ingredient/Ingredient";
import { BtnWrapperSC, Bread, BurgerSC, ContainerbtnCS } from "./styles.js";
import "./burger.scss";

import { motion } from "framer-motion";
import { useState } from "react";

const Burger = () => {
  const { selectedIngredients, ingredients, totalBurger, burgers } =
    useSelector((store) => store.builder);

  const [isShown, setIsShown] = useState(false);

  const dispatch = useDispatch();

  const handleInterval = () => {
    setTimeout(() => {
      setIsShown(false);
    }, 500);
  };

  const handleBurger = () => {
    if (selectedIngredients.length !== 0) {
      setIsShown(true);
      dispatch(
        confirmBurger(totalBurger, selectedIngredients, burgers.length + 1)
      );
    } else {
      Swal.fire("Elija los ingredientes para su hamburguesa");
    }
  };
  return (
    <>
      <ContainerbtnCS>
        <BtnWrapperSC>
          {ingredients.map((ingredient, index) => (
            <button
              key={index}
              onClick={() => dispatch(addIngredient(ingredient.id))}
            >
              <img src={ingredient.img} alt="Ingredient" />
            </button>
          ))}
        </BtnWrapperSC>
        <section className="burgercontainer">
          <motion.button
            transition={{ duration: 1 }}
            className="button-confirm"
            onClick={() => {
              handleBurger();
            }}
          >
            Agregar hamburgesa
          </motion.button>

          <BurgerSC>
            <img
              onLoad={handleInterval()}
              className={`smoke ${isShown ? "" : "hidden"}`}
              src="https://media.giphy.com/media/drj4KPFH32Mw/giphy.gif"
              alt=""
            />
            <Bread>
              <img src="https://i.ibb.co/F3fNLqH/panTop.png" alt="panTop" />
            </Bread>
            <Ingredients />
            <motion.div>
              <Bread variant="bottom">
                <img
                  src="https://i.ibb.co/PCN4pR7/pancito.png"
                  alt="panBottom"
                />
              </Bread>
            </motion.div>
          </BurgerSC>
        </section>
      </ContainerbtnCS>
    </>
  );
};

export default Burger;
