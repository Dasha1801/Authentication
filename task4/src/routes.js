import Auth from "./auth/auth";
import Chat from "./chat/chat";
import { AUTH_ROUT, CHAT_ROUT } from "./utils/consts";

export const publicRoute = [
  {
    path: AUTH_ROUT,
    Component: Auth,
  },
];

export const privateRoute = [
  {
    path: CHAT_ROUT,
    Component: Chat,
  },
];
