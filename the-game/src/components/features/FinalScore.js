//Final score
//
import React, {useState} from "react";


const FinalScore = () => {
  const [showScore, setScore] = useState(false);
  
    
    return (
       <div>
         {showScore ? (
            <div className="score-board">
                <h1>
                    Congratulations!
                </h1>
                <h2>
                Your Final Score is:
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