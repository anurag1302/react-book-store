import React from "react";

const Book = ({ img, title, author }) => {
  //Basic on click example
  const onClickHandler = () => {
    alert("Reference Event Example");
  };

  //Passing argument from the element
  //We need to create an arrow function on the element to achieve it.
  const h1OnClickHandler = (abc) => {
    console.log(abc);
  };

  return (
    <article
      onMouseOver={() => {
        console.log(author);
      }}
      className="book"
    >
      <img src={img} alt="book"></img>
      <h1 onClick={() => h1OnClickHandler(title)}>{title}</h1>
      <h4
        onClick={() => {
          console.log("Inline Event Example", author);
        }}
      >
        {author}
      </h4>
      <button onClick={onClickHandler}>Click Me - Reference Example</button>
    </article>
  );
};

//Default Export - particular name of Book is not required in the index.js
export default Book;
