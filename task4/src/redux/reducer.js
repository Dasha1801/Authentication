import { initStore } from "./store";

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogin: action.payload };
    // case "ADD_BRO":
    //   return { ...state, countBro: action.payload };
    // case "ADD_SIS":
    //   return { ...state, countSis: action.payload };
    default:
      return state;
  }
};
