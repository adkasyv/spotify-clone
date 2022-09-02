import { reducerCases } from "./Constants";

export const initailState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: "37i9dQZF1DWWQRwui0ExPn",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    default:
      return state;
  }
};

export default reducer;
