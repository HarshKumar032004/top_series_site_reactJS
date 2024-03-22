import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import Sdata from "./Sdata";
import "./index.css";


ReactDOM.render(
    <>
    <h1 className='heading'> TOP WEB SERIES ON NETFLIX</h1>
          {Sdata.map((val) => {
          return (
        <Card
          imgsrc = {val.imgsrc}
          title = {val.title}
          sname = {val.sname}
          link = {val.link} 
          />
    );
   })}
    </>,
document.getElementById("root"));

