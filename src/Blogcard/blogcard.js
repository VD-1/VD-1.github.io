import { React } from "react";
import "./blogcard.scss";

const Blogcard = (props) => {
  var array1 = props.book;
  console.log(array1?.comments.length);
  return (
    <div className="row">
      <div className="example-2 card">
        <div
          className="wrapper"
          style={{
            background: `url("https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cda12b505afa1beb06e49d89014cbd65&auto=format&fit=crop&w=634&q=80") 20% 1% / cover no-repeat`,
          }}
        >
          <div className="header">
            <div className="date">
              <span className="day">12</span>
              <span className="month">Aug</span>
              <span className="year">2016</span>
            </div>
            <ul className="menu-content">
              <li>
                <a href="#" className="fa fa-bookmark-o"></a>
              </li>
              <li>
                <a href="#" className="fa fa-heart-o">
                  <span>{array1?.likes}</span>
                </a>
              </li>
              <li>
                <a href="#" className="fa fa-comment-o">
                  <span>{array1?.comments.length}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="data">
            <div className="content">
              <span className="author">{array1?.author}</span>
              <h1 className="title">
                <a href="#">
                  <b>{array1?.bookname}</b>
                </a>
              </h1>
              <p className="text">{array1?.summary} </p>
              <a href="#" className="button">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
