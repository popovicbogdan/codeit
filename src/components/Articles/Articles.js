import React, { useState, useEffect } from "react";
import "./Articles.scss";
import axios from "axios";
import Card from "./Card/Card";

const Articles = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=6")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);
  console.log(items);

  const itemsList = items.map(item => <Card item={item} key={item.id} />);

  //add grid view to the container
  return (
    <div className="articles-wrapper">
      <h2 className="title">ARTICLES</h2>
      <div className="container">{itemsList}</div>
    </div>
  );
};

export default Articles;
