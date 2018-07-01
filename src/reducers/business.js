import { ADD_BUSINESS, GET_BUSINESSES, GET_BUSINESS, POST_REVIEWS, EDIT_BUSINESS, DELETE_BUSINESS, GET_REVIEWS } from '../actions/types';

const initialState = {
  business: [],
  businesses: [],
  page: [],
  message: [],
  reviews: []
};

const BusinessReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_BUSINESS:
    return [
      state, {
        businessName: action.businessName,
        category: action.category,
        location: action.location,
        description: action.description
      }
    ];

  case GET_BUSINESSES:
    return {
      state,
      businesses: action.payload.Businesses,
      page: action.page,
      ppage: action.ppage,
      npage: action.npage
    };

  case GET_BUSINESS:
    return {
      state,
      business: action.payloads,
    };

  case POST_REVIEWS:
    return {
      state,
      message: action.response
    };

  case EDIT_BUSINESS:
    return {
      state,
      message: action.message
    };
  case DELETE_BUSINESS:
    return {
      state,
      message: action.message
    };
  case GET_REVIEWS:
    return {
      state,
      reviews: action.payload
    };

  default:
    return state;
  }
};

export default BusinessReducer;
