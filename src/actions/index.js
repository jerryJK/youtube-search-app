import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCNjbqUuRqiR1BVF1giIRZE1NZ4IPnFWDc';


export function getDataDone(videos) {
  return {
    type: 'GET_DATA_DONE',
    videos
  };
}


export function getData(term) {
  return dispatch => {

    YTSearch({key: API_KEY, term: term}, (videos) => {
      dispatch(getDataDone(videos));
    })

  }
}
