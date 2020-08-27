import {
  SET_COUNTRIES,
  LOADING_DATA,
  DELETE_REVIEW,
  SET_COUNTRY,
  POST_REVIEW,
  SET_UNIVERSITIES,
  SET_UNIVERSITY,
} from "../types";

const initialState = {
  countries: [],
  country: {},
  loading: false,
  reviews: [],
  universities: [],
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case SET_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload,
        loading: false,
      };
    case SET_UNIVERSITY:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_COUNTRY:
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW:
      let index = state.reviews.findIndex(
        (review) => review.reviewId === action.payload
      );
      state.reviews.splice(index, 1);
      return {
        ...state,
      };
    case POST_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    default:
      return state;
  }
}
