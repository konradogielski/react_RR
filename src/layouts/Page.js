import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import ProductListPage from "../pages/productListPage";
import ContactPage from "../pages/contactPage";
import AdminPage from "../pages/adminPage";
import ErrorPage from "../pages/errorPage";
import LoginPage from "../pages/loginPage";
const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
