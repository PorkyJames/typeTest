import "./CountdownTimer.css"

const CountdownTimer = ({timeLeft}) => { 

    return (
        <>
            <div className="timer">
                <h1>{timeLeft}</h1>
            </div>
        </>
        

    );
}

export default CountdownTimer;
