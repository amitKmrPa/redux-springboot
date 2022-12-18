import { USER_LOGIN } from "../Actions/ActionType";

const initialState = {
  login: [],
};

 const UserLogin = (state = initialState, action) => {

  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default UserLogin;
