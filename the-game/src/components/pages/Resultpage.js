import Startbtn from "../features/start-btn";
import FinalScore from "../features/FinalScore";
import { useState } from "react";



const Resultpage = () => {
   
    return (

        <div>
        <FinalScore></FinalScore>
        <Startbtn>Restart game</Startbtn>
        </div>

    )

}

export default Resultpage;