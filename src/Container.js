import React, { Component } from "react";
import Question from "./Question";
import './Container.css'
export default class Container extends Component {
    render() {
        return (
            <div className="wrapper">
                <Question />
            </div>
        );
    }
}