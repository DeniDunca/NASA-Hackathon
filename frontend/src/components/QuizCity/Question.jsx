import { useState } from "react";


const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const clickedAnswer = (answer) => {
        if (selectedAnswer) return;
        
        setSelectedAnswer(answer);

        const execute = () => {
            answer === correct? props.updateQuestion(1) : props.updateQuestion(0);
            setSelectedAnswer('');
                }
        setTimeout(execute, 1000);
        
    }
    const { id, question, correct, ...answers } = props.question; 
    const classNameSelected = selectedAnswer === correct ? 'bg-green-500' : 'bg-red-500'

    const getClassForAnswer = (answer) => {
        if (!selectedAnswer)
            return '';

        if ((correct === answer) && (answer === selectedAnswer)) {
            return 'bg-green-500';
        } 

        if (answer === selectedAnswer) {
            return 'bg-red-500'
        }

        if (answer === correct) {
            return 'bg-green-500';
        }
    }


    return (
        <div>
            <div>
                <p>{question}</p>
            </div>
            <div>
                {Object.entries(answers).map(([key, value]) => (<div key={key} className={getClassForAnswer(key)} onClick={() => clickedAnswer(key)}>{ value }</div>))}
            </div>
        </div>
    );
}

export default Question;