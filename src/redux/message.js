import axios from 'axios';

const getMessage = (payload) => ({ type: 'GET_MESSAGE', payload });
const initialState = [];

const fetchMessage = () => async (dispatch) => {
  const res = await axios.get('http://localhost:8000/api/v1/messages');
  dispatch(getMessage(res.data));
};

const updateMessage = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return action.payload;
    default:
      return state;
  }
};

export default updateMessage;
export { fetchMessage };
