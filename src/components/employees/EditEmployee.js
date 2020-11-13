import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee, updateEmployee } from "../../actions/employeeAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (employee != null) {
      setName(employee.name);
      setEmail(employee.email);
    }
    dispatch(getEmployee(id));
  }, [employee]);

  const onUpdateEmployee = (e) => {
    e.preventDefault();

    const update_employee = Object.assign(employee, {
      name: name,
      email: email,
    });

    dispatch(updateEmployee(update_employee));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Employee</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateEmployee(e)}>
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
          <button className="btn btn-warning" type="submit">
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
