import { SIGN_UP, USER_LOGIN } from "../Actions/ActionType";

const initialState = {
  login: [],
  signUp:[],
};

 const UserLogin = (state = initialState, action) => {

  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
      case SIGN_UP:
        return {
          ...state,
          signUp: action.payload,
        };
    default:
      return state;
  }
};

export default UserLogin;
