import React from "react";
import "../styles/header.css";
import { Route, Switch } from "react-router-dom";
import img1 from "../images/viessmann_1.png";
import img2 from "../images/viessmann_2.png";
import img3 from "../images/viessmann_3.png";

const Header = () => {
  //   const images = [img1, img2, img3];
  //   const index = Math.floor(Math.random() * 3);
  //   const img = images[index];
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img2} alt="d" />} />
        <Route path="/contact" render={() => <img src={img3} alt="d" />} />
        <Route path="/products" render={() => <img src={img1} alt="d" />} />
        <Route path="/admin" render={() => <img src={img3} alt="d" />} />
        <Route render={() => <img src={img1} alt="d" />} />
      </Switch>
      {/* <img src={img} alt="hej" /> */}
    </>
  );
};

export default Header;
