const initialState = {
    list: [],
    loading: false,
    err: false,
  };
  
  const listNewSongReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_DATA": {
        return {
          ...state,
          list : action.payload,
          loading: true,
        };
      }
      default:
        return state;
    }
  };
  export default listNewSongReducer;
  