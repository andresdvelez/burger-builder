import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { removeBurger, resetReceipt } from "../../redux/actions/builderActions";
import "./receipt.scss";
import { FaTrashAlt } from "react-icons/fa";
import { BiLeftArrow } from "react-icons/bi";

import { useState } from "react";
const Receipt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(-1);
  const { totalBurger, totalPrice, burgers } = useSelector(
    (store) => store.builder
  );

  const handleDelete = (id) => {
    Swal.fire({
      icon: "info",
      title: "¿No quieres esta hamburguesa 😢?",
      text: "¡Mira que está bien sabrosa!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })
      .then((response) => {
        if (response.isConfirmed) {
          dispatch(removeBurger(id));

          Swal.fire({
            icon: "success",
            title: "Tú te lo pierdes!",
            text: "¡Ya la hemos botado a la basura 😭!",
            confirmButtonColor: "#3085d6",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log({
    totalBurger: totalBurger,
    totalPrice: totalPrice,
    burgers: burgers,
  });

  const nameBurger = (ingredients) => {
    if (ingredients.length <= 3) {
      return "Hamburguesa sencilla";
    } else if (ingredients.length === 4) {
      return "Hamburguesa especial";
    } else if (ingredients.length > 4) {
      return "Hamburguesa extra grande";
    }
  };
  const confirm = () => {
    Swal.fire({
      icon: "info",
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })
      .then((response) => {
        if (response.isConfirmed) {
          dispatch(resetReceipt());

          Swal.fire({
            icon: "success",
            title: "¡Hecho!",
            text: "¡El pedido ha sido enviado!",
            confirmButtonColor: "#3085d6",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <article className="receipt">
      <figure onClick={() => navigate("/")} className="back backBtn">
        <BiLeftArrow style={{ marginRight: "1rem" }} />
        <span>Volver</span>
      </figure>
      <div className="receipt__info">
        <section>
          <div>
            <h1>
              FACTURA<span>3000-0101</span>
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5787/5787016.png"
              alt="logo"
            />
          </div>
          <h4>VENTABURGERS</h4>
          <small>Agustín Codazzi</small>

          <table>
            <thead>
              <tr>
                <th>PRODUCTO</th>
                <th>INGREDIENTES</th>
                <th>PRECIO</th>
              </tr>
            </thead>
            <tbody>
              {burgers.map((burger, index) => (
                <tr key={index}>
                  <td
                    className="pr"
                    onMouseLeave={() => setShowDelete(-1)}
                    onMouseEnter={() => setShowDelete(index)}
                  >
                    {" "}
                    <FaTrashAlt
                      onClick={() => handleDelete(burger.id)}
                      className={`iconclose ${
                        index == showDelete ? "showclose" : ""
                      }`}
                    />
                    {nameBurger(burger.ingredients)}
                  </td>
                  <td>{burger.ingredients.length}</td>
                  <td>$ {burger.total} lucas</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <strong>TOTAL</strong>
            <small>$ {totalPrice} Lucas</small>
          </div>

          <small>
            <strong>Vendedor:</strong> Wilinton Ascanio
          </small>
          <small>
            <strong>El de los juguitos:</strong> Andres Vélez
          </small>
        </section>
        <button onClick={confirm}>Comprar</button>
      </div>
    </article>
  );
};

export default Receipt;
