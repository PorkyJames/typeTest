type HomePageProps = {
    setTestComplete: (value: boolean) => void;
    charsTyped: number;
    setCharsTyped: (value: number) => void;
    correctCount: number;
}

export default function TestResults({setTestComplete, charsTyped, setCharsTyped, correctCount} : HomePageProps) {

    const setFalse = () => {
        setTestComplete(false)
        setCharsTyped(0)
    }
    
    const calculateWPM = (charsTyped : number): number => {
        return (charsTyped / 5) / .25
    }

    const calculateAcc = (correctCount : number): number => {
        return ((correctCount / charsTyped) * 100)
    }
    

    return (
        <>
            <h1>WPM: {calculateWPM(charsTyped)}</h1>
            <h1>Accuracy: {calculateAcc(correctCount).toFixed(1)}</h1>
            <button onClick={setFalse}>Press to Restart Test</button>
        </>
    )
}
