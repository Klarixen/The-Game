//Final score
//
import React, {useState} from "react";


const FinalScore = () => {
  const [showScoreBoard, setScoreBoard] = useState(false);
  const [score, setScore] = useState(0);
  //integrate it in the timer that Tanya has created

  const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setColorWords(colorWords + 1);}

        if (colorWords + 1 < questions.length) {
            setColorWords(colorWords + 1);
        } else {
            setScoreBoard()
    }


    
    return (
       <div>
         {showScoreBoard ? (
            <div className="score-board">
                <h1>
                    Congratulations!
                </h1>
                <h2>
                Your Final Score is: {showFinalScore}
                </h2>
                <h3>
                    {score} out of {questions.length} correct - ({(score/questions.length) * 100}%)
                </h3>
                <button onClick={() => restartGame()}>Restart game</button>
                <div>//how to connect this button to the timer </div>
                
          
            </div>
             ) : (
            //show the rest of the questions (Tanya's code)
             )}
        </div>
     

   
    );
}
    
export default FinalScore;