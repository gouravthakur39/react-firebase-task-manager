import React, { Fragment } from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";

export const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Content/>
      </div>
    </Fragment>
  );
};
