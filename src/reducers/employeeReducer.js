import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SELECT_EMPLOYEE,
  CLEAR_EMPLOYEE,
  DELETE_SELECTED_EMPLOYEE,
} from "../constant/types";

const intialState = {
  employees: [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
    },
  ],
  employee: null,
  selectedEmployees: [],
};

export const employeeReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };
    case GET_EMPLOYEE:
      let arr = state.employees.filter(
        (employee) => employee.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        employee: arr,
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    case DELETE_SELECTED_EMPLOYEE:
      return {
        ...state,
        employees: [],
      };
    case SELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: action.payload,
      };

    case CLEAR_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: [],
      };
    default:
      return state;
  }
};
