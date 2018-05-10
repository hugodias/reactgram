export const REQUEST_PHOTOS = 'photos/REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'photos/RECEIVE_PHOTOS';
const FETCH_PHOTOS_URL      = "https://demo3018944.mockable.io/photos";

const initialState = {
  photos: [],
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_PHOTOS:
      return {
        ...state,
        photos: action.photos,
        isFetching: false
      }

    default:
      return state;
  }
};

const receivePhotos = (json) => {
  return {
    type: RECEIVE_PHOTOS,
    photos: json.results
  }
}

const fetchPhotos = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_PHOTOS
    });

    return fetch(FETCH_PHOTOS_URL)
    .then(response => response.json())
    .then(json => dispatch(receivePhotos(json)))
  }
}

export const fetchPhotosIfNeeded = () => {

  return (dispatch, getState) => {
    if (shouldFetchPhotos(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchPhotos())
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

function shouldFetchPhotos(state) {
  if (!state.photos.photos.length) {
    return true
  } else if (state.isFetching) {
    return false
  }
}