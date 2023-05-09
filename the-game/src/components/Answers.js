import { useState } from "react";

const Answers = () => {
    const [colorWords, setColorWords] = useState(0);
    const optionClicked = (isCorrect) => {
        if (isCorrect);
        setColorWords(colorWords + 1);
    }



    const questions = [
        {
            text: <h3 className="no1">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },
        {
            text: <h3 className="no2">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: true },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no3">BLUE</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no4">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },
        {
            text: <h3 className="no5">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: true },
            ],
        },

        {
            text: <h3 className="no6">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: true },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no7">BLUE</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no8">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: true },
            ],
        },
        {
            text: <h3 className="no9">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no10">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no11">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: true },
            ],
        },

        {
            text: <h3 className="no12">BLUE</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: true },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no13">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no14">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no15">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
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
