import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SELECT_EMPLOYEE,
  CLEAR_EMPLOYEE,
  DELETE_SELECTED_EMPLOYEE,
} from "../constant/types";

// actions
export const addEmployee = (employee) => ({
  type: CREATE_EMPLOYEE,
  payload: employee,
});

// get a employee
export const getEmployee = (id) => ({
  type: GET_EMPLOYEE,
  payload: id,
});

// update a employee
export const updateEmployee = (employee) => ({
  type: UPDATE_EMPLOYEE,
  payload: employee,
});

// delete a employee
export const deleteEmployee = (id) => ({
  type: DELETE_EMPLOYEE,
  payload: id,
});

// select all employee
export const selectAllEmployee = (id) => ({
  type: SELECT_EMPLOYEE,
  payload: id,
});

// clear selected employees
export const clearAllEmployee = () => ({
  type: CLEAR_EMPLOYEE,
});

// delete selected employees
export const deleteAllEmployee = () => ({
  type: DELETE_SELECTED_EMPLOYEE,
});
