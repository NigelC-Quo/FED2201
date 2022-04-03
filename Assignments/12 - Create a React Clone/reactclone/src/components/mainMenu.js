import React, { useState } from "react";
import IndList from "./IndList";

function HelloWorld(props) {
    const numbers = [1, 2, 3, 4, 5];
    const [randomNumber, setRandomNumber] = useState(
        getRandomNumber(props.maxNumber)
      );

    function getRandomNumber(max) {
        let randomNum = Math.ceil(Math.random() * max);
        return randomNum;
    }

    function Add() {
        let num2 = getRandomNumber(props.maxNumber)
        let num1 = getRandomNumber(props.maxNumber)
        let sum = num1 + num2;
       return `${num1} + ${num2} = ${sum}`
    }
    

    return ( 
        <div>
        <h1> Hello World! {randomNumber}</h1>
        <p id="numList">{<IndList listContent={numbers}/>}</p>
        <h2>{Add()}</h2>
        <button onClick={() => setRandomNumber(getRandomNumber(props.maxNumber))}>Random addition</button>
        </div>
    );
}

export default HelloWorld;