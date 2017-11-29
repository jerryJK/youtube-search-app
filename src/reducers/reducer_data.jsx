import { GET_DATA_DONE, SELECT_VIDEO } from '../constants';


const initialState = {
                       videos: [],
                       actualVideo: null
                     };


export default (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_DONE:
      return { ...state, videos: action.videos, actualVideo: action.videos[0] };
    case SELECT_VIDEO:
      return { ...state, actualVideo: action.actualVideo }
    default:
      return state;
  }
}
