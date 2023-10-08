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
            return 'bg-green-800';
        } 

        if (answer === selectedAnswer) {
            return 'bg-red-600'
        }

        if (answer === correct) {
            return 'bg-green-800';
        }
    }


    return (
        <div>
            <div className='text-white p-4 text-xl'>
                <p>{question}</p>
            </div>
            <br></br>
            <div className='text-white'>
                {Object.entries(answers).map(([key, value]) => (<div style={{ borderRadius: '8px', padding: '4px' ,marginBottom: '20px' }} key={key} className={getClassForAnswer(key) + ' w-fit'} onClick={() => clickedAnswer(key)}>{ value }</div>))}
            </div>
        </div>
    );
}

export default Question;