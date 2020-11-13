import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../actions/employeeAction";
import { useDispatch } from "react-redux";

const Employee = ({ employee, selectAll }) => {
  const dispatch = useDispatch();
  const { name, email, id } = employee;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/employees/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
          cursor="pointer"
          onClick={() => dispatch(deleteEmployee(id))}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

export default Employee;
