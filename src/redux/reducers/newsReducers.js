const INITIAL_STATE = {
  news: [],
};

export const newsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log("Get News Reducer", action.payload);
      return { ...state, news: action.payload };
    default:
      return state;
  }
};
