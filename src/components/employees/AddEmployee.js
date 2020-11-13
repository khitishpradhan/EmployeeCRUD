import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../actions/employeeAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createEmployee = (e) => {
    e.preventDefault();
    const new_employee = {
      id: shortid.generate(),
      name: name,
      email: email,
    };
    dispatch(addEmployee(new_employee));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Employee</div>
      <div className="card-body">
        <form onSubmit={(e) => createEmployee(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Employee Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Employee E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
