import React, { createContext, useEffect, useReducer, useState } from "react";
import { getUser } from "../../actions/service";
import { Reducer } from "./Reducer";

const url = "https://localhost:44376/user/user";
// Initial State
let userDefault = {
  users: [],
  reducerUsers: [],
};

// Create Context
export const Context = createContext();

// Provider Component: make a wrap al app.js
const Provedor = ({ children }) => {
  const [ft, setUser] = useState([]);

  useEffect(() => {
    getUser(url)
      .then((response) => {
        setUser(response.data);
        userDefault.users = response.data;
        userDefault.reducerUsers = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [state, dispatch] = useReducer(Reducer, userDefault);
  // Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  const searchUserInput = (email) => {
    dispatch({
      type: "SEARCH_USER_INPUT",
      payload: email,
    });
  };

  const searchUserCheckMinor = (bool) => {
    dispatch({
      type: "SEARCH_USER_CHECK_MINOR",
      payload: bool,
    });
  };

  const searchUserCheckBetter = (bool) => {
    dispatch({
      type: "SEARCH_USER_CHECK_BETTER",
      payload: bool,
    });
  };

  const searchUserSelect = (value) => {
    dispatch({
      type: "SEARCH_USER_SELECT",
      payload: value,
    });
  };

  const searchUserSwitch = (bool, value1, value2) => {
    dispatch({
      type: "SEARCH_USER_SWITCH",
      payload: [bool, value1, value2],
    });
  };

  return (
    <Context.Provider
      value={{
        users: state.users,
        removeUser,
        editUser,
        searchUserInput,
        searchUserSelect,
        searchUserCheckMinor,
        searchUserCheckBetter,
        searchUserSwitch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provedor;
