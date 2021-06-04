import { createSlice } from "@reduxjs/toolkit";
import globalConstants from "../constants/globalConstants";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import routes from "../routes.json";
import { toast } from "react-toastify";

// Slice
const jwt = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loggedIn: jwt ? true : false,
    loading: true,
    error: "",
    errors: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.loading = false;
      state.errors = false;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.loggedIn = false;
      state.loading = false;
      state.errors = true;
    },
    getCurrentUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.loading = false;
      state.errors = false;
    },
    getCurrentUserError: (state, action) => {
      state.error = action.payload;
      state.loggedIn = false;
      state.loading = false;
      state.errors = true;
    },
    postDetailsSuccess: (state, action) => {
      state.patient = action.payload;
      state.loggedIn = true;
      state.loading = false;
      state.errors = false;
    },
    postDetailsError: (state, action) => {
      state.error = action.payload;
      state.loggedIn = false;
      state.loading = false;
      state.errors = true;
    },
    logoutSuccess: (state, action) => {
      state.loggedIn = false;
      state.loading = false;
      state.errors = false;
    },
  },
});
export default slice.reducer;
// Actions
const {
  loginSuccess,
  loginError,
  logoutSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
  postDetailsSuccess,
  postDetailsError,
} = slice.actions;

export const login = (data) => async (dispatch) => {
  try {
    const { userName, password, id } = data;
    const db = firebase.firestore();
    const res = await db
      .collection("doctor")
      .where("userName", "==", userName)
      .where("id", "==", id)
      .where("password", "==", password)
      .get();
    if (res.docs[0].exists) {
      dispatch(loginSuccess({ userName, id }));
      localStorage.setItem(globalConstants.LOCAL_STR_TOKEN, res.docs[0].id);
      window.location = routes.HOMEPAGE;
    }
  } catch (error) {
    toast.error("Wrong username or password");
    dispatch(loginError("Wrong email or password"));
    console.log(error);
  }
};
export const getCurrentUser = () => async (dispatch) => {
  try {
    const id = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
    const db = firebase.firestore();
    const res = await db.collection("doctor").doc(id).get();
    if (res.exists) {
      dispatch(
        getCurrentUserSuccess({
          userName: res.data().userName,
          id: res.data().id,
          name: res.data().name,
        })
      );
    } else throw Error;
  } catch (error) {
    dispatch(getCurrentUserError());
  }
};
export const postResult = (data) => async (dispatch) => {
  try {
    const db = firebase.firestore();
    const id = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
    data.doctorId = id;
    await db.collection("patient").add(data);
    dispatch(postDetailsSuccess());
  } catch (error) {
    console.log(error);
    dispatch(postDetailsError(error));
  }
};
export const getResult = (data) => async (dispatch) => {
  try {
    const db = firebase.firestore();
    const id = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
    data.doctorId = id;
    await db.collection("patient").add(data);
    dispatch(postDetailsSuccess());
  } catch (error) {
    console.log(error);
    dispatch(postDetailsError(error));
  }
};
