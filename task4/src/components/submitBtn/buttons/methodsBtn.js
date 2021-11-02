import firebase from '../../../config/firebaseConfig';

const date = new Date();



export const sendMessage = function (user, text) {
  const messagesRef = firebase.database().ref("messages");
  const message = {
    name: user.displayName,
    text: text,
    time: date.toLocaleTimeString("ru", {
      hour: "numeric",
      hour24: true,
      minute: "numeric",
    }),
  };
  messagesRef.push(message);
};
