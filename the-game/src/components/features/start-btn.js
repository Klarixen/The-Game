

const Startbtn = ({children, start}) => {
    return (
        <div className="container">
            <button className="start-btn" onClick={start}>{children} </button>

        </div>
    )
}

export default Startbtn;