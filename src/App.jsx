import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Eligible from "./pages/Eligible";
// import Ineligible from "./pages/Ineligible";
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
          <Route path="/eligible" component={Eligible} />
          <Route path="/ineligible" component={Eligible} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
