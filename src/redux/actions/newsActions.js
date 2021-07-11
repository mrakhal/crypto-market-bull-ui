import axios from "axios";

export const getNews = (keyword, page) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `http://newsapi.org/v2/everything?q=${keyword}&apiKey=aa8f50d4640743efbcdb2c6b9641bf23`
      );
      dispatch({
        type: "GET_NEWS",
        payload: res.data.articles.splice(0, page),
      });
      // return res.data
    } catch (error) {
      console.log(error);
    }
  };
};
