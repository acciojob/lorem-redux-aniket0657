import {
  FETCH_IPSUM_REQUEST,
  FETCH_IPSUM_SUCCESS,
  FETCH_IPSUM_FAILURE,
} from './actions';

const initialState = {
  loading: false,
  title: '',
  body: '',
  error: '',
};

const ipsumReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IPSUM_REQUEST:
      return { ...state, loading: true, error: '' };

    case FETCH_IPSUM_SUCCESS:
      return {
        ...state,
        loading: false,
        title: action.payload.title,
        body: action.payload.body,
        error: '',
      };

    case FETCH_IPSUM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ipsumReducer;

