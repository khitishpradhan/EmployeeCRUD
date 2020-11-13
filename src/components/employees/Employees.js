import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Employee from "./Employee";
import {
  selectAllEmployee,
  clearAllEmployee,
  deleteAllEmployee,
} from "../../actions/employeeAction";

const Employees = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const employees = useSelector((state) => state.employee.employees);
  const selctedContcats = useSelector(
    (state) => state.employee.selectedEmployees
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllEmployee(employees.map((employee) => employee.id)));
    } else {
      dispatch(clearAllEmployee());
    }
  }, [selectAll]);

  return (
    <div>
      {selctedContcats.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllEmployee())}
        >
          delete all
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <Employee
              employee={employee}
              key={employee.id}
              selectAll={selectAll}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
