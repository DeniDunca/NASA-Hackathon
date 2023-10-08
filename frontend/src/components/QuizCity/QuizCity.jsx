import Question from "./Question";
import { useState } from "react";

const QuizCity = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [correctlyAnswered, setCorrectlyAnswered] = useState(0);

    const questionList = [
        {
            'id':1,
            'question':"What does NASA's GPM mission study?",
            'answer1':'Plants and trees',
            'answer2':'Rainfall patterns and climate change effects',
            'answer3':'Outer space galaxies ',
            'answer4':'Ocean currents',
            'correct':'answer2'
        },
        {
            'id':2,
            'question':"What does SMAP stand for?",
            'answer1':'Space Mission Active Probe',
            'answer2':'Soil Moisture Active Passive ',
            'answer3':'Solar Mapping and Analysis Project',
            'answer4':'Spacecraft for Moisture and Agriculture Probe',
            'correct':'answer2'
        },
        {
            'id':3,
            'question':"What percentage of Earth's surface is covered by oceans?",
            'answer1':'50%',
            'answer2':'71%',
            'answer3':'30%',
            'answer4':'90%',
            'correct':'answer2'
        },
        {
            'id':4,
            'question':"How does climate change affect oceans?",
            'answer1':'By making ocean water fresher',
            'answer2':'By cooling down ocean temperatures',
            'answer3':'By causing sea levels to rise and warming ocean waters',
            'answer4':'By reducing the size of oceans',
            'correct':'answer3'
        },
        {
            'id':5,
            'question':"What is the main greenhouse gas responsible for climate change?",
            'answer1':'Nitrogen',
            'answer2':'Oxygen',
            'answer3':'Carbon Dioxide (CO2)',
            'answer4':'Hydrogen',
            'correct':'answer3'
        },
        {
            'id':6,
            'question':"Why is soil moisture important in agriculture?",
            'answer1':'It determines the color of the soil',
            'answer2':'It affects the taste of crops',
            'answer3':'Farmers need to know when to water their crops',
            'answer4':'It attracts beneficial insects to farms',
            'correct':'answer3'
        },
        {
            'id':7,
            'question':"What can individuals do to help combat climate change according to the text?",
            'answer1':'Ignore the issue as it\'s too big to solve',
            'answer2':'Plant trees and conserve energy and water',
            'answer3':'Increase their energy consumption',
            'answer4':'Use more plastic products',
            'correct':'answer2'
        },
        {
            'id':8,
            'question':"What is the main difference between the Arctic and the Antarctic?",
            'answer1':'The Arctic is an ocean surrounded by continents; the Antarctic is a continent surrounded by an ocean.',
            'answer2':'The Arctic is hotter than the Antarctic.',
            'answer3':'The Arctic is a desert, and the Antarctic is a rainforest.',
            'answer4':'There is no difference between the two.',
            'correct':'answer1'
        },
        {
            'id':9,
            'question':"What does the GPM mission help scientists understand?",
            'answer1':'Earth\'s tectonic plate movements',
            'answer2':'Rainfall patterns and weather changes',
            'answer3':'Solar flares and space weather',
            'answer4':'The behavior of black holes',
            'correct':'answer2'
        },
        {
            'id':10,
            'question':"What is the Greenhouse Effect?",
            'answer1':'A gardening technique',
            'answer2':'A natural process that warms the Earth\'s surface',
            'answer3':'A technique to make ice cream',
            'answer4':'A method to purify water',
            'correct':'answer2'
        }
    ]

    const updateQuestion = (correctValue) => {
        console.log("test");
        setCorrectlyAnswered(correctlyAnswered + correctValue);
        setCurrentQuestion(currentQuestion + 1);
    }

    return(
        <div className='flex justify-center items-center h-screen w-screen p-7'>
            <div className='bg-blue-900 rounded-2xl w-[70%] p-12'>
            {currentQuestion < questionList.length && 
            <div className='text-2xl text-white'>
                Question: {currentQuestion+1}/{questionList.length}
            </div>}

            {currentQuestion < questionList.length?
            <Question question={questionList[currentQuestion]} updateQuestion = {updateQuestion}/>
            : <div className='text-white'> 
                You answered correctly {correctlyAnswered} out of {questionList.length} questions.
                {(4/5 * questionList.length) <= correctlyAnswered && <div> Congratulations!!! </div>}
            </div>}

        </div>
        </div>
        
    );
}

export default QuizCity;