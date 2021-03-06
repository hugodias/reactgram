export const REQUEST_PHOTOS = 'photos/REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'photos/RECEIVE_PHOTOS';
export const REQUEST_LIKE_PHOTO = 'photos/REQUEST_LIKE_PHOTO';
export const LIKE_PHOTO = 'photos/LIKE_PHOTO';
export const CREATE_COMMENT = 'comments/CREATE_COMMENT';
const FETCH_PHOTOS_URL = 'https://demo3018944.mockable.io/photos';

const initialState = {
  photos: [],
  isFetching: false,
  isLiking: false
};

const photo = (state, action) => {
  switch (action.type) {
    case REQUEST_LIKE_PHOTO:
      return {
        ...state,
        isLiking: true
      };

    case LIKE_PHOTO:
      if (state.id !== action.id) {
        return state;
      }

      const isLiked = state.liked ? false : true;

      return {
        ...state,
        liked: isLiked,
        likes: isLiked ? state.likes + 1 : state.likes - 1
      };

    case CREATE_COMMENT:
      if (state.id !== action.id) {
        return state;
      }

      let comment = action.comment;
      comment.id = Math.random().toString();

      return {
        ...state,
        comments: [...state.comments, comment]
      };
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_PHOTOS:
      return {
        ...state,
        photos: action.photos,
        isFetching: false
      };

    case LIKE_PHOTO:
    case CREATE_COMMENT:
      return {
        ...state,
        photos: state.photos.map(p => photo(p, action))
      };

    default:
      return state;
  }
};

const fetchPhotos = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_PHOTOS
    });

    return fetch(FETCH_PHOTOS_URL)
    .then(response => response.json())
    .then(json => 
      dispatch({
        type: RECEIVE_PHOTOS,
        photos: json.results
      })
    );
  };
};

export const likePhoto = id => {
  return dispatch => {
    dispatch({
      type: LIKE_PHOTO,
      id
    });
  };
};

export const commentOnPhoto = (id, comment) => {
  return dispatch => {
    dispatch({
      type: CREATE_COMMENT,
      id,
      comment
    });
  };
};

export const fetchPhotosIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchPhotos(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchPhotos());
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve();
    }
  };
};

function shouldFetchPhotos(state) {
  if (!state.photos.photos.length) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
}
