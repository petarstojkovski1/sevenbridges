import {
  GET_TASKS,
  GET_TASK,
  DELETE_TASK,
  ERROR,
  GET_TASKS_LIMIT,
  GET_TASKS_STATUS,
  GET_TASKS_LIMIT_STATUS,
  DISMISS_ERROR
} from '../actions/types';
import axios from 'axios';

const API_TOKEN = '558c74aa57054ae684f5c8db229a115b';

export const getTasks = () => async dispatch => {
  const res = await axios.get('https://cavatica-api.sbgenomics.com/v2/tasks', {
    headers: {
      'X-SBG-Auth-Token': API_TOKEN
    }
  });
  dispatch({
    type: GET_TASKS,
    payload: res.data
  });
};

export const getTasksLimit = limit => async dispatch => {
  const res = await axios.get(
    `https://cavatica-api.sbgenomics.com/v2/tasks?limit=${limit}`,
    {
      headers: {
        'X-SBG-Auth-Token': API_TOKEN
      }
    }
  );
  dispatch({
    type: GET_TASKS_LIMIT,
    payload: res.data
  });
};
export const getTasksStatus = status => async dispatch => {
  const res = await axios.get(
    `https://cavatica-api.sbgenomics.com/v2/tasks?status=${status}`,
    {
      headers: {
        'X-SBG-Auth-Token': API_TOKEN
      }
    }
  );
  dispatch({
    type: GET_TASKS_STATUS,
    payload: res.data
  });
};
export const getTasksLimitStatus = (limit, status) => async dispatch => {
  const res = await axios.get(
    `https://cavatica-api.sbgenomics.com/v2/tasks?limit=${limit}&status=${status}`,
    {
      headers: {
        'X-SBG-Auth-Token': API_TOKEN
      }
    }
  );
  dispatch({
    type: GET_TASKS_LIMIT_STATUS,
    payload: res.data
  });
};

export const getTask = id => async dispatch => {
  const res = await axios.get(
    `https://cavatica-api.sbgenomics.com/v2/tasks/${id}`,
    {
      headers: {
        'X-SBG-Auth-Token': API_TOKEN
      }
    }
  );
  dispatch({
    type: GET_TASK,
    payload: res.data
  });
};

export const deleteTask = id => async dispatch => {
  try {
    await axios.delete(`https://cavatica-api.sbgenomics.com/v2/tasks/${id}`, {
      headers: {
        'X-SBG-Auth-Token': API_TOKEN
      }
    });
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.response.data
    });
  }
};

export const dismissError = () => dispatch => {
  dispatch({
    type: DISMISS_ERROR
  });
};
