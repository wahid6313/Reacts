import React from "react";
import ReactDOM from "react-dom/client";



// JSX ---------------looks like html and xml  syntax----------
//jsx-----transpiled before it reaches the js engine--parcel -- (babel) transpiled the code.
//babel is the js compiler amd it is converting the code in reacts.


//in html we use in class for given name but in jsx here is className we write.
// const jsxHeading = <h1 className="head" tabIndex="5" > my name is wahid ali</h1>;
// cconsole.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);



//reacts components-------
//class base components--old way of writing code.
//function components--new way of writing code.



//reacts function components-- 
// ( a function that return in to a jfx code(reacts elements)).


const number = 1000;


// const Greet = ()=>{
//     return <h2>Namaste</h2>
// }

// const HeadingComponents = () => {
//    return (
//       <div>
//         {number}
//         {Greet()}
//       </div>
//    )
// }

const Baaz = () => {
    return <h1>raza</h1>
};


const Eagle = () => {
    return (
    <div>
            {<Baaz />}
    <h1>wahid ali</h1>
    
    </div>
    )
};
const numbers = 1000;

const HeadingComponents= () => {
    return (
        <div>
            {Eagle()}
            {numbers}
            {2000}
            {<h2>300</h2>}
            <h1>my name is wahid ali</h1>
        </div>

    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponents />);
