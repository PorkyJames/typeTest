type HomePageProps = {
    setTestComplete: (value: boolean) => void;
    charsTyped: number;
    setCharsTyped: (value: number) => void;
}

export default function TestResults({setTestComplete, charsTyped, setCharsTyped} : HomePageProps) {

    const setFalse = () => {
        setTestComplete(false)
        setCharsTyped(0)
    }
    
    //! Result is calculated by number of words by the number of minutes
    //! Can we calculate it by stating that every space is a word?
    // wpm = (characters typed / 5 ) / minutes

    const calculateWPM = (charsTyped : number): number => {
        return (charsTyped / 5) / .25
    }


    return (
        <>
            <h1>WPM: {calculateWPM(charsTyped)}</h1>
            <h1>Accuracy: {}</h1>
            <button onClick={setFalse}>Press to Restart Test</button>
        </>
    )
}
