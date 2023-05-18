import Startbtn from "../features/start-btn";
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (

        <div className="container">
            <div className="home_container">
            <h1>Color Quiz</h1>
            <h4>Only 1 in 5 people can pass this brainteaser that mismatches <br></br> the written name of a color and its actual color, can you?</h4>
                ,
            <Link to="/answerbuttons">
        <button className="start-btn">Start!</button>
            </Link>
                
            </div>  


        </div>

    )

}

export default Homepage;