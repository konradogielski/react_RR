import React from "react";
import Article from "../components/article";
const articles = [
  {
    id: 1,
    title: "pierwszy tytul",
    author: "Janek",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem totam officia quasi distinctio et sit rerum cum reiciendis! Laborum aliquam fugit accusamus, voluptate rerum maxime numquam cum eaque quidem id maiores quaerat modi impedit facere velit eum animi architecto eligendi.",
  },
  {
    id: 2,
    title: "drugi tytul",
    author: "Janek",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem totam officia quasi distinctio et sit rerum cum reiciendis! Laborum aliquam fugit accusamus, voluptate rerum maxime numquam cum eaque quidem id maiores quaerat modi impedit facere velit eum animi architecto eligendi.",
  },
  {
    id: 3,
    title: "trzeci tytul",
    author: "Janek",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem totam officia quasi distinctio et sit rerum cum reiciendis! Laborum aliquam fugit accusamus, voluptate rerum maxime numquam cum eaque quidem id maiores quaerat modi impedit facere velit eum animi architecto eligendi.",
  },
];

const HomePage = () => {
  const article = articles.map((article) => (
    <Article
      key={article.id}
      {...article}
      // title={article.title}
      // author={article.author}
      // text={article.text}
    />
  ));
  return <div className="home">{article}</div>;
};

export default HomePage;
