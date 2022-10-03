import React, { useState } from "react";
// import { create } from "../../actions/service";
// const url = "https://localhost:44376/user/user/add";

export const Reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      console.log(state);
      console.log(action);
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case "SEARCH_USER":
      console.log(state);
      console.log(action);
      return {
        users: state.users.filter((user) => {
          return user.email === action.payload;
        }),
      };
    case "ADD_USER":
      console.log(state);
      console.log(action);

      return {
        users: [...state.users, action.payload],
      };

    case "EDIT_USER":
      console.log(action);
      const updateUser = action.payload;

      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return {
            id: updateUser.id,
            name: updateUser.name,
            lastName: updateUser.lastName,
            email: updateUser.email,
            age: updateUser.age,
            amountDonate: updateUser.amountDonate + user.amountDonate,
          };
        }
        return user;
      });
      return {
        users: updateUsers,
      };

    default:
      return state;
  }
};
