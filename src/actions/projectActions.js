import {
  ADD_PROJECT,
  PROJECT_ERROR,
  DISMISS_PROJECT_ERROR,
  DISMISS_PROJECT_SUCCESS
} from '../actions/types';
import axios from 'axios';

const API_TOKEN = '558c74aa57054ae684f5c8db229a115b';

export const addProject = project => async dispatch => {
  try {
    const res = await axios.post(
      'https://cavatica-api.sbgenomics.com/v2/projects',
      project,
      {
        headers: {
          'X-SBG-Auth-Token': API_TOKEN
        }
      }
    );
    dispatch({
      type: ADD_PROJECT,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: PROJECT_ERROR,
      payload: e.response.data
    });
  }
};

export const dismissProjectError = () => dispatch => {
  dispatch({
    type: DISMISS_PROJECT_ERROR
  });
};

export const dismissProjectSuccess = () => dispatch => {
  dispatch({
    type: DISMISS_PROJECT_SUCCESS
  });
};
