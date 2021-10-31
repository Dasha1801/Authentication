import firebase from "../config/firebaseConfig";

const socialAuth = async (provider) => {
  return await firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return er.message;
    });
};


export default socialAuth;


