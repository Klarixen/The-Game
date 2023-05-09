import { useState } from "react";

const Answers = () => {
    const [colorWords, setColorWords] = useState(0);
    const optionClicked = (isCorrect) => {
        console.log(isCorrect);
    }


    const questions = [
        {
            text: <h3 className="no1">YELLOW</h3>,
            options: [
                { id: 0, text: <p className="q1">GREEN</p>, isCorrect: false },
                { id: 1, text: <p className="q2">YELLOW</p>, isCorrect: false },
                { id: 2, text: <p className="q3">RED</p>, isCorrect: true },
                { id: 3, text: <p className="q4">BLUE</p>, isCorrect: false },
            ],
        },
        {
            text: <h3 className="no2">RED</h3>,
            options: [
                { id: 0, text: <p className="q1">GREEN</p>, isCorrect: false },
                { id: 1, text: <p className="q2">YELLOW</p>, isCorrect: true },
                { id: 2, text: <p className="q3">RED</p>, isCorrect: false },
                { id: 3, text: <p className="q4">BLUE</p>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no3">BLUE</h3>,
            options: [
                { id: 0, text: <p className="q1">GREEN</p>, isCorrect: true },
                { id: 1, text: <p className="q2">YELLOW</p>, isCorrect: false },
                { id: 2, text: <p className="q3">RED</p>, isCorrect: false },
                { id: 3, text: <p className="q4">BLUE</p>, isCorrect: false },
            ],
        },

    ];




    return (
        <>
            <div className="question-card">
                <h3 className="no1">{questions[colorWords].text}</h3>
                <ul>
                    {questions[colorWords].options.map((option) => {
                        return (
                            <li
                                key={option.id}
                                onClick={() => optionClicked(option.isCorrect)}
                            >
                                {option.text}
                            </li>
                        );
                    })}

                </ul>






            </div>


        </>

    )
};

export default Answers;
