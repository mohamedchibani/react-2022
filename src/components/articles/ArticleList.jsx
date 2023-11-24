import { useEffect, useContext } from "react";

import ArticleContexte from "../../contexts/article/ArticleContexte";

const ArticleList = () => {
  const { articles, getArticles, deleteOneArticle } =
    useContext(ArticleContexte);

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h1>List of articles</h1>

      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button
              className='btn btn-danger btn-sm'
              onClick={() => deleteOneArticle(article.id)}
            >
              Delete
            </button>
          </div>
        ))}
      <div></div>
    </div>
  );
};

export default ArticleList;
