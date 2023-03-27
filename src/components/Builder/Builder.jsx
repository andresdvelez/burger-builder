import Burger from "../Burger/Burger";
import ListIngredients from "../listIngredients/ListIngredients";
import NavBar from "../navBar/NavBar";
import "./builder.scss";

const Builder = () => {
  return (
    <>
      <NavBar />
      <section className="builder-container">
        <section className="builder-container__burguer">
          <Burger />
        </section>
        <section className="builder-container__ingredients">
          <ListIngredients />
        </section>
      </section>
    </>
  );
};

export default Builder;
