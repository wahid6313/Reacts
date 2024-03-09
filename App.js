import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1' ,{id: "heading"} , 'hello world');
// console.log(heading);

//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(heading);

const parent = React.createElement('div' , {id: "parent"} , 
React.createElement('div' , {id: "child"}, [
    React.createElement('h1' , {} , 'wahid ali'),
    React.createElement('h2' , {} , 'i am in the h2 tag')
]));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);