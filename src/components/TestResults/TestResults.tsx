import "../TestResults/TestResults.css"
import KeyboardHeatmap from "@/components/TestResults/KeyboardHeatMap/KeyboardHeatmap"

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

            <div className="tr-top-wrapper">
                <div className="wpm-result">
                    WPM: {calculateWPM(charsTyped)}
                </div>

                <div className="acc-result">
                    Acc: {calculateAcc(correctCount).toFixed(1)}
                </div>
            </div>

            <KeyboardHeatmap />

            <div className="restart-btn">
                <button onClick={setFalse}>Press to Restart Test</button>
            </div>
        </>
    )
}
