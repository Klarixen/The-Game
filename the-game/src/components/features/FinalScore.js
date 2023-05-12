//Final score
//
import React, {useState} from "react";


const FinalScore = () => {
  const [showScoreBoard, setScoreBoard] = useState(false);

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
                    1 out of 15 correct
                </h3>
          
            </div>
             ) : (
            //show the rest of the questions (Tanya's code)
             )}
        </div>
     

   
    );
}
    
export default FinalScore;