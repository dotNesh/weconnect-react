import Axios from 'axios';
import { toast } from 'react-toastify';
import * as types from './types';
import authHeader from '../helpers/authHeader';

let path;


//Action Creators

export const addBusiness = res => ({
  type: types.ADD_BUSINESS,
  message: res
});

export const fetchBusinesses = (businesses) => ({
  type: types.GET_BUSINESSES,
  payload: businesses,
  page: businesses["Current Page"],
  npage: businesses["Next page"],
  ppage: businesses["Previous page"]
});

export const fetchBusiness = (business) => ({
  type: types.GET_BUSINESS,
  payloads: business,
});

export const postReviews = (response) => ({
  type: types.POST_REVIEWS,
  message: response
});

export const editBusiness = (response) => ({
  type: types.EDIT_BUSINESS,
  message: response
});

export const deleteBusiness = (response) => ({
  type: types.DELETE_BUSINESS,
  message: response
});

export const fetchReviews = (reviews) => ({
  type: types.GET_REVIEWS,
  payload: reviews
});

export const registerBusiness = (businessName, category, location, description) => (dispatch) => Axios({
  method: 'post',
  url: "https://weconnect02.herokuapp.com/api/v2/businesses",
  data: {
    business_name: businessName,
    category: category,
    location: location,
    description: description
  },
  headers: authHeader()
})
  .then(response => {
    dispatch(addBusiness(response.data));
    toast.success(response.data);
  })
  .catch(error => {
    if (error) {
      toast.error(error.response.data);
    }
    if (error.response.data.msg) {
      toast.error(`Please login to Edit Business`, {
        autoClose: 5000
      });
      window.location.assign("/login");
    }
  });

export const getBusinesses = (url) => {
  if (url) {
    path = url;
  } else {
    path = "https://weconnect02.herokuapp.com/api/v2/businesses/search?limit=6";
  }
  return (dispatch) => Axios({
    method: 'get',
    url: path,
  })
    .then(response => {
      dispatch(fetchBusinesses(response.data));
    })
    .catch(error => {
      if (error.response) {
        toast.error(error.response.data.Businesses.message);
      }
    });
};

export const getBusiness = (id) => {
  path = `https://weconnect02.herokuapp.com/api/v2/businesses/${id}`;

  return (dispatch) => Axios({
    method: 'get',
    url: path,
  })
    .then(response => {
      dispatch(fetchBusiness(response.data));
      console.log("dkkdkd", response.data);
      //window.location.assign("/catalog");
      //notify.show("not found", 'success', 4000);
    })
    .catch(error => {
      if (error.response.data) {
        console.log(error.response.data);
        //notify.show(error.response.data, 'error', 4000);
      }
    });
};

export const postReview = (id, title, description) => {
  path = `https://weconnect02.herokuapp.com/api/v2/businesses/${id}/reviews`;

  return (dispatch) => Axios({
    method: 'post',
    url: path,
    data: {
      title: title,
      description: description
    },
    headers: authHeader()
  })
    .then(response => {
      dispatch(postReviews(response.data));
      toast.success(response.data.message);
    })
    .catch(error => {
      if (error.response.data.msg) {
        toast.error(`Please login to post review`, {
          autoClose: 5000
        });
        window.location.assign("/login");
      }
      if (error.response.data.message) {
        toast.error(error.response.data.message, {
          autoClose: 5000
        });
      }
    });
};

export const editBusinesses = (id, category, location, description) => {
  path = `https://weconnect02.herokuapp.com/api/v2/businesses/${id}`;

  return (dispatch) => Axios({
    method: 'put',
    url: path,
    data: {
      category: category,
      location: location,
      description: description,
    },
    headers: authHeader()
  })
    .then(response => {
      dispatch(editBusiness(response.data));
      toast.success(`${response.data.message}`);
      window.location.reload();
    })
    .catch(error => {
      if (error.response.data) {
        console.log("data", error.response.data);
        toast.error(`Please login to Edit Business`, {
          autoClose: 5000
        });
        window.location.assign("/login");
      } else if (error.response.data.message) {
        toast.error(`${error.response.data.message}`, {
          autoClose: 5000
        });
      }
    });
};

export const deleteBusinesses = (id) => {
  path = `https://weconnect02.herokuapp.com/api/v2/businesses/${id}`;

  return (dispatch) => Axios({
    method: 'delete',
    url: path,
    headers: authHeader()
  })
    .then(response => {
      dispatch(deleteBusiness(response.data));
      toast.success(`${response.data.message}`);
      window.location.assign(`/catalog`);
      console.log("res", response);
      console.log("res.dat", response.data);
    })
    .catch(error => {
      if (error.response.msg) {
        console.log("data", error.response.data);
        toast.error(`Please login to Delete Business`, {
          autoClose: 5000
        });
        window.location.assign("/login");
      } else if (error.response.data.message) {
        console.log("error.response.message");
        console.log(error.response.message);
        console.log(error.response);
        toast.error(`${error.response.data.message}`, {
          autoClose: 5000
        });
      }
    });
};

export const getReviews = (id) => {
  path = `https://weconnect02.herokuapp.com/api/v2/businesses/${id}/reviews`;

  return (dispatch) => Axios({
    method: 'get',
    url: path,
  })
    .then(response => {
      dispatch(fetchReviews(response.data));
      //window.location.reload();
    })
    .catch(error => {
      if (error) {
        toast.error(error.response.data.message);
      }
    });
};
