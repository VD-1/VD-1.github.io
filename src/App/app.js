import React from "react";
import "./app.css";
import Blogcard from "../Blogcard/blogcard";
import bookData from "../data.json";

function App(props) {
  var array1 = bookData;

  return (
    <section className="container">
      {array1.map((bookdetail) => {
        return (
          <div>
            <Blogcard key={bookdetail.id} book={bookdetail}></Blogcard>
            {/* {console.log(bookdetail)} */}
          </div>
        );
      })}
      <Blogcard></Blogcard>
    </section>
  );
}
export default App;
