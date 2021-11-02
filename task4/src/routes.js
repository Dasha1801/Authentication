import SignIn from "./signIn/signIn";
import Chat from "./chat/chat";
import { AUTH_ROUT, CHAT_ROUT } from "./utils/consts";

export const privateRoute = [
  {
    path: CHAT_ROUT,
    Component: Chat,
  },
];

export const publicRoute = [
  {
    path: AUTH_ROUT,
    Component: SignIn,
  },
];
