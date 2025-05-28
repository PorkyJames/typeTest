import { useHomeContext } from "@/lib/useHomeContext"

export default function TestResults() {

    const {setTestComplete, charsTyped, setCharsTyped, correctCount} = useHomeContext()

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
