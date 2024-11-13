import React from "react";
import Header from './components/Header';
import Button from "./components/Button";

const Main = () => {
    const btnClicked = () =>{
        alert("Button clicked");
    }

    return (
        <div>
            <Header headerText="Hello World" />
            <Button btnText="Click me" onClick={btnClicked} />
        </div>
    )
}

export default Main;