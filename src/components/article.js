import React from "react";
const Article = (props) => {
  return (
    <article style={{ marginTop: 30 }}>
      <h3 style={{ marginBottom: 10 }}>{props.title}</h3>
      <small style={{ fontSize: 12 }}>{props.author}</small>
      <p style={{ marginTop: 5 }}>{props.text}</p>
    </article>
  );
};

export default Article;
