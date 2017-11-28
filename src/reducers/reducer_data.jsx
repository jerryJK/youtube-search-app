import { GET_DATA_DONE } from '../constants';


const initialState = {
                       videos: [],
                       actualVideo: null
                     };


export default (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_DONE:
      return { ...state, videos: action.videos, actualVideo: action.videos[0]};
    default:
      return state;
  }
}
