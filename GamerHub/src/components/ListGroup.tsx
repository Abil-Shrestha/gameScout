import React from "react";

const ListGroup = () => {
  const items = ["New York", "London", "Paris", "Tokyo", "Hong Kong"];

  return (
    <>
      <h1>Lists</h1>
      <ul className="list-group">
        {items.map((i,id) => (
          <li key={id}>{i}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
