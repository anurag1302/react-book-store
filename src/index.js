import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./data/data"; //named import
import Book from "./components/Book"; //default import

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />; //usage of spread operator
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
