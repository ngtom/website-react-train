import React from "react";
import { CardItem } from "./CardItem";
import "./Cards.css";

import img9 from "../images/img-9.jpg";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img6 from "../images/img-7.jpg";
import img8 from "../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out awesome destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall"
              label="Adventures"
              path="/services"
            />
            <CardItem
              src={img1}
              text="Explore the hidden waterfall"
              label="Adventures"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img2}
              text="Explore the hidden waterfall"
              label="Adventures"
              path="/services"
            />
            <CardItem
              src={img3}
              text="Explore the hidden waterfall"
              label="Adventures"
              path="/products"
            />
            <CardItem
              src={img4}
              text="Explore the hidden waterfall"
              label="Adventures"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img6}
              text="Explore the hidden waterfall"
              label="Adventures"
              path="/products"
            />
            <CardItem
              src={img8}
              text="Explore the hidden waterfall"
              label="Adventures"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
