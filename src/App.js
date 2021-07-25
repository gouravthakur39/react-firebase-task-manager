import React, { Fragment } from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import "./App.scss";

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <Fragment>
          <div className="App">
            <Header />
            <Content />
          </div>
        </Fragment>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
