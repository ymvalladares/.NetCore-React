let arrayPrueba = [];

export const Reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      console.log(state);
      console.log(action);
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
        reducerUsers: state.reducerUsers,
      };
    case "SEARCH_USER_INPUT":
      // console.log(state);
      // console.log(action);
      if (action.payload === "") {
        return {
          users: state.reducerUsers,
          reducerUsers: state.reducerUsers,
        };
      } else {
        return {
          users: state.users.filter((user) => {
            return user.email === action.payload;
          }),
          reducerUsers: state.reducerUsers,
        };
      }

    case "SEARCH_USER_SELECT":
      console.log(state);
      console.log(action);
      if (action.payload == 2) {
        let user = state.users.sort((a, b) => {
          return b.amountDonate - a.amountDonate;
        });
        return {
          users: user,
          reducerUsers: state.reducerUsers,
        };
      }
      if (action.payload == 1) {
        let user = state.users.sort((a, b) => {
          return a.amountDonate - b.amountDonate;
        });
        return {
          users: user,
          reducerUsers: state.reducerUsers,
        };
      } else {
        return {
          users: state.users,
          reducerUsers: state.reducerUsers,
        };
      }

    case "SEARCH_USER_SWITCH":
      console.log(state.reducerUsers);
      // console.log(state);
      // console.log(action);
      console.log(state.users);
      const result1 = state.reducerUsers.filter(
        (user) =>
          user.amountDonate > action.payload[1] &&
          user.amountDonate < action.payload[2]
      );
      if (action.payload[0] && arrayPrueba.length > 0) {
        arrayPrueba = arrayPrueba.concat(result1);
      }
      if (action.payload[0] && arrayPrueba.length === 0) {
        arrayPrueba = result1;
      }

      return {
        users: arrayPrueba.filter((item, index) => {
          return arrayPrueba.indexOf(item) === index;
        }),
        reducerUsers: state.reducerUsers,
      };

    case "SEARCH_USER_CHECK_MINOR":
      // console.log(state.users);
      // console.log(action);
      if (action.payload === true) {
        let value = Math.min(...state.users.map((user) => user.amountDonate));
        return {
          users: state.reducerUsers.filter((user) => {
            return user.amountDonate === value;
          }),
          reducerUsers: state.reducerUsers,
        };
      } else {
        return {
          ...state,
          users: state.reducerUsers,
        };
      }

    case "SEARCH_USER_CHECK_BETTER":
      // console.log(state.users);
      // console.log(action);
      if (action.payload === true) {
        let value = Math.max(
          ...state.reducerUsers.map((user) => user.amountDonate)
        );
        return {
          users: state.reducerUsers.filter((user) => {
            return user.amountDonate === value;
          }),
          reducerUsers: state.reducerUsers,
        };
      } else {
        return {
          //users: state.reducerUsers,
          ...state,
          reducerUsers: state.reducerUsers,
        };
      }

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
