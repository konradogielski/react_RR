import React from "react";
import { Route } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route path="/" exact render={() => <p>jestes na stronie glowenej</p>} />
      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <p>
              jestes na stronie: <span>{props.match.params.page}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
