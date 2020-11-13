import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Employees from "./components/employees/Employees";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployee from "./components/employees/AddEmployee";
import EditEmployee from "./components/employees/EditEmployee";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Employees} />
                <Route exact path="/employees/add" component={AddEmployee} />
                <Route
                  exact
                  path="/employees/edit/:id"
                  component={EditEmployee}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
