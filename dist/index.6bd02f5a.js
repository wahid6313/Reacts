// const heading = React.createElement('h1' ,{id: "heading"} , 'hello world');
// console.log(heading);
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "i am in the h1 tag"),
    React.createElement("h2", {}, "i am in the h2 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
