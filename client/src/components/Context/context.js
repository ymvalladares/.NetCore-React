import React, { createContext, useEffect, useReducer, useState } from "react";
import { getUser } from "../../actions/service";
import { Reducer } from "./Reducer";

const url = "https://localhost:44376/user/user";
// Initial State
let userDefault = {
  users: [],
};

// Create Context
export const Context = createContext();

// Provider Component: make a wrap al app.js
const Provedor = ({ children }) => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUser(url)
      .then((response) => {
        setUser(response.data);
        userDefault.users = response.data;
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

  const searchUser = (email) => {
    dispatch({
      type: "SEARCH_USER",
      payload: email,
    });
  };

  return (
    <Context.Provider
      value={{
        users: state.users,
        addUser,
        removeUser,
        editUser,
        searchUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provedor;
