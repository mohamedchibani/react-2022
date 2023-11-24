import { useReducer } from "react";

import ArticleContexte from "./ArticleContexte";
import articleReducer from "./ArticleReducer";

import { deleteArticle, getAllArticles } from "./ArticleActions";
import { DELETE_ARTICLE, GET_ARTICLES } from "./ArticleTypes";

const ArticleProvider = ({ children }) => {
  const initState = {
    articles: [],
  };

  const [state, dispatch] = useReducer(articleReducer, initState);

  const getArticles = async () => {
    const payload = await getAllArticles();
    dispatch({ type: GET_ARTICLES, payload: payload });
  };

  const deleteOneArticle = async (id) => {
    const status = await deleteArticle(id);

    if (status) {
      dispatch({ type: DELETE_ARTICLE, payload: id });
    }
  };

  return (
    <ArticleContexte.Provider
      value={{
        articles: state.articles,
        getArticles,
        deleteOneArticle,
      }}
    >
      {children}
    </ArticleContexte.Provider>
  );
};

export default ArticleProvider;
