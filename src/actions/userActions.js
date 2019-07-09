import { GET_USER} from '../actions/types';
import axios from 'axios';

const API_TOKEN = '558c74aa57054ae684f5c8db229a115b';

export const getUser = () => async dispatch => {
  const res = await axios.get('https://cavatica-api.sbgenomics.com/v2/user', {
    headers: {
      'X-SBG-Auth-Token': API_TOKEN
    }
  });
  dispatch({
    type: GET_USER,
    payload: res.data
  });
};
