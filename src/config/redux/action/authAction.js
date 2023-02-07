import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import '../../firebase';

export const CHANGE_LOADING = 'CHANGE_LOADING';
export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_USER = 'CHANGE_USER';
export const CHANGE_ERROR = 'CHANGE_ERROR';

const auth = getAuth();

export const registerUserAPI = (data) => (dispatch) => {
  const { email, password } = data;
  return new Promise((resolve, reject) => {
    dispatch({ type: 'CHANGE_LOADING', value: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch({ type: 'CHANGE_LOADING', value: false });
        resolve(true);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);

        dispatch({ type: 'CHANGE_LOADING', value: false });
        reject(error);
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  dispatch({ type: 'CHANGE_LOADING', value: true });
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in Success
      const { user } = userCredential;
      const dataUser = {
        email: user.email,
        uid: user.uid,
        emailVerified: user.emailVerified,
        refreshToken: user.refreshToken,
      };

      dispatch({ type: 'CHANGE_ERROR', value: false });
      dispatch({ type: 'CHANGE_LOADING', value: false });
      dispatch({ type: 'CHANGE_LOGIN', value: true });
      dispatch({ type: 'CHANGE_USER', value: dataUser });
    })
    .catch((error) => {
      // Sign In Failed
      dispatch({ type: 'CHANGE_LOADING', value: false });
      dispatch({ type: 'CHANGE_LOGIN', value: false });
      dispatch({ type: 'CHANGE_ERROR', value: error.message });
    });
};
