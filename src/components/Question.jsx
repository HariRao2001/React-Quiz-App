import { useState } from 'react';

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "./questions.js";

export default function Question({
    index,
    onSkipAnswer,
    onSelectedAnswer
 }){
    const [ answer, setAnswer ] = useState({
        selectedAnswer: "",
        isCorrect: null
    })

    let timer = 10000;

    if(answer.isSelected){
        timer = 1000;
    }

    if(answer.isCorrect !== null){
        timer = 2000;
    }

    function handleSelectAnswer(answer){
        console.log(answer);
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null});
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            });
            setTimeout(()=>{
                onSelectedAnswer(answer)
            },2000);
        },1000);
    }



    let answerState = "";

    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : "wrong";
    }

    return <div id="question">
    <QuestionTimer key={timer} timeout={ timer } onTimeout = { answer.selectedAnswer === "" ? onSkipAnswer : ""} mode={answerState}></QuestionTimer>
     <h2>{ QUESTIONS[index].text}</h2>
     <Answers 
     answers = { QUESTIONS[index].answers }
     selectedAnswer = { answer.selectedAnswer }
     answerState = { answerState }
     onSelect = { handleSelectAnswer }
     />
    </div>
}