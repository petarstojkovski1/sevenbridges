import {
  ADD_PROJECT,
  PROJECT_ERROR,
  DISMISS_PROJECT_ERROR,
  DISMISS_PROJECT_SUCCESS
} from '../actions/types';

const initialState = {
  projects: null,
  projectError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: action.payload
      };

    case PROJECT_ERROR:
      return {
        ...state,
        projectError: action.payload
      };

    case DISMISS_PROJECT_ERROR:
      return {
        ...state,
        projectError: null
      };

    case DISMISS_PROJECT_SUCCESS:
      return {
        ...state,
        projects: null
      };
    default:
      return state;
  }
}
