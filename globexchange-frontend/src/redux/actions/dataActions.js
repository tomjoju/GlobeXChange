import {
  SET_COUNTRIES,
  LOADING_DATA,
  DELETE_REVIEW,
  SET_COUNTRY,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  POST_REVIEW,
  SET_UNIVERSITIES,
  SET_UNIVERSITY,
} from "../types";
import axios from "axios";

// Get all Countries
export const getCountries = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/countries")
    .then((res) => {
      dispatch({
        type: SET_COUNTRIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_COUNTRIES,
        payload: [],
      });
    });
};

export const getUniversities = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/universities")
    .then((res) => {
      dispatch({
        type: SET_UNIVERSITIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_UNIVERSITIES,
        payload: [],
      });
    });
};

// For the Country Page
export const getCountry = (countryId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/country/${countryId}`)
    .then((res) => {
      dispatch({
        type: SET_COUNTRY,
        payload: res.data.reviews,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_COUNTRY,
        payload: [],
      });
    });
};

export const postReview = (countryId, newReview) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/country/${countryId}/review`, newReview)
    .then((res) => {
      dispatch({
        type: POST_REVIEW,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const deleteReview = (reviewId, countryId) => (dispatch) => {
  axios
    .delete(`/country/${countryId}/review/${reviewId}`)
    .then(() => {
      dispatch({
        type: DELETE_REVIEW,
        payload: reviewId,
      });
    })
    .catch((err) => console.log(err));
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// User Page
export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_COUNTRY,
        payload: res.data.reviews,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_COUNTRY,
        payload: [],
      });
    });
};

// University Page
export const getUniData = (uniId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/university/${uniId}`)
    .then((res) => {
      dispatch({
        type: SET_UNIVERSITY,
        payload: res.data.users,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_UNIVERSITY,
        payload: [],
      });
    });
};
