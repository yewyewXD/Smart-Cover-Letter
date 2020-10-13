import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Eligible from "./pages/Eligible";
import Ineligible from "./pages/Ineligible";
import SelectBar from "./components/SelectBar";

function App() {
  return (
    <BrowserRouter>
      <header>
        <SelectBar />
      </header>
      <main>
        <Switch>
          <Redirect from="/" to="eligible" exact />
          <Route path="/eligible" component={Eligible} exact />
          <Route path="/ineligible" component={Ineligible} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
