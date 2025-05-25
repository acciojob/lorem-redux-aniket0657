export const FETCH_IPSUM_REQUEST = 'FETCH_IPSUM_REQUEST';
export const FETCH_IPSUM_SUCCESS = 'FETCH_IPSUM_SUCCESS';
export const FETCH_IPSUM_FAILURE = 'FETCH_IPSUM_FAILURE';

export const fetchIpsum = () => async (dispatch) => {
  dispatch({ type: FETCH_IPSUM_REQUEST });

  try {
    const response = await fetch('https://api.lorem.com/ipsum');
    const data = await response.json();

    dispatch({
      type: FETCH_IPSUM_SUCCESS,
      payload: {
        title: data.title,
        body: data.body,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_IPSUM_FAILURE,
      payload: error.message,
    });
  }
};

