import React, { Component } from "react";
import './Question.css'


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
// async function demo() {



//   await sleep(2000);


// }



export default class Question extends Component {

    constructor() {
        super();
        this.state = {
            quiz: [
                {
                    question: "Where were the IAAF World Indoor Championships first held?",
                    choices: ["Paris", " Amsterdam"],
                    answer: "Paris"
                },
                {
                    question: "what is the capital city of Kenya?",
                    choices: ["Nairobi", "Kisumu"],
                    answer: "Nairobi"
                },
                {
                    question: "Who what the first president of Kenya?",
                    choices: ["Jomo Kenyatta", "Daniel Moi"],
                    answer: "Jomo Kenyatta"
                },
                {
                    question: "what is the name of a female dog?",
                    choices: ["Bitch", "Cunt"],
                    answer: "Bitch"
                },
                {
                    question: "A game called ” Mokshapat” was created by the 13th century poet saint Gyandev, It is the original version of which of the following games of today?",
                    choices: ["Ludo", "Snakes & Ladders"],
                    answer: "Snakes & Ladders"
                },
                {
                    question: "Rovers Cup is related to which of the following sports?",
                    choices: ["Tennis", "Football"],
                    answer: "Football"
                },
                {
                    question: "What election year did president Trump lose to Biden?",
                    choices: [2020, 2014],
                    answer: "2020"
                }
            ],
            score: 0,
            currentQuestionIndex: 0

        };

    }



    generateQuestion = () => {



        let quiz = this.state.quiz;
        let index = this.state.currentQuestionIndex;
        let currentQuestion = quiz[index].question;
        let currentChoice1 = quiz[index].choices[0];
        let currentChoice2 = quiz[index].choices[1];
        const handleAddUser = e => {
            const answer1 = currentChoice1.current.value;
            const answer2 = currentChoice2.current.value;
            const correctAnsweris = { answer1, answer2 }
            fetch('http://localhost:3000/quiz', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(correctAnsweris)
            })
                .then()
            e.preventDefault()
        }
        let btn1 = (
            <button className="btn gradient-button gradient-button-3" value={currentChoice1} onClick={this.validateAnswer}>
                {currentChoice1}
            </button>
        );
        let btn2 = (
            <button className="btn gradient-button gradient-button-3" value={currentChoice2} onClick={this.validateAnswer}>
                {currentChoice2}
            </button>
        );

        return (
            <div className="question" id="myDIV">
                <div className="currentQuestion" id="questioncolor" onclick="myFunction()">
                    {currentQuestion}</div>

                {btn1}

                <div id="or"><b>or</b></div>

                {btn2}
                <br />
                <p className="gradient-button gradient-button-1" >Score : {this.state.score}</p>
            </div>
        );

    };



    validateAnswer = (e) => {

        let index = this.state.currentQuestionIndex;
        let value = 10;
        if (e.target.value === this.state.quiz[index].answer) {
            document.getElementsByTagName("body")[0].style.color = "green";
            setTimeout(() => {
                document.getElementsByTagName("body")[0].style.color = "black";
                this.setState({

                    score: this.state.score + value,
                    currentQuestionIndex:
                        (this.state.currentQuestionIndex + value) % this.state.quiz.length
                });

            }, 1000);

        } else {

            document.getElementsByTagName("body")[0].style.color = "red";

            setTimeout(() => {

                document.getElementsByTagName("body")[0].style.color = "black";
                this.setState({

                    score: this.state.score - value,

                    currentQuestionIndex:
                        (this.state.currentQuestionIndex + value) % this.state.quiz.length

                });

            }, 1000);
        }
        e.preventDefault();
    };

    render() {
        return <div>{this.generateQuestion()}</div>;
    }


}
