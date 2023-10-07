import Question from "./Question";
import { useState } from "react";

const QuizCity = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [correctlyAnswered, setCorrectlyAnswered] = useState(0);

    const questionList = [
        {
            'id':1,
            'question':"Cati baieti are Marius?",
            'answer1':'1',
            'answer2':'2',
            'answer3':'3',
            'answer4':'4',
            'correct':'answer2'
        },
        {
            'id':2,
            'question':"What does NASA's GPM mission study?",
            'answer1':'Plants and trees',
            'answer2':'Rainfall patterns and climate change effects',
            'answer3':'Outer space galaxies ',
            'answer4':'Ocean currents',
            'correct':'answer2'
        },
        {
            'id':3,
            'question':"What does SMAP stand for?",
            'answer1':'Space Mission Active Probe',
            'answer2':'Soil Moisture Active Passive ',
            'answer3':'Solar Mapping and Analysis Project',
            'answer4':'Spacecraft for Moisture and Agriculture Probe',
            'correct':'answer2'
        }
    ]

    const updateQuestion = (correctValue) => {
        console.log("test");
        setCorrectlyAnswered(correctlyAnswered + correctValue);
        setCurrentQuestion(currentQuestion + 1);
    }

    return(
        <div>
            {currentQuestion < questionList.length && 
            <div>
                Question: {currentQuestion+1}/{questionList.length}
            </div>}

            {currentQuestion < questionList.length?
            <Question question={questionList[currentQuestion]} updateQuestion = {updateQuestion}/>
            : <div> 
                You answered correctly {correctlyAnswered} out of {questionList.length} questions.
                {(4/5 * questionList.length) <= correctlyAnswered && <div> Congratulations!!! </div>}
            </div>}

        </div>
    );
}

export default QuizCity;