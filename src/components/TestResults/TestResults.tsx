import "../TestResults/TestResults.css"
import KeyboardHeatmap from "@/components/TestResults/KeyboardHeatMap/KeyboardHeatmap"

import { useHomeContext } from "@/lib/useHomeContext"
import { usePromptCardContext } from "@/lib/usePromptCardContext"

export default function TestResults() {

    const {setTestComplete, charsTyped, setCharsTyped, correctCount, setCorrectCount} = useHomeContext()

    const {setStartedTyping, setPrompt, setShouldRestartPrompt, setUserInput} = usePromptCardContext()

    const restartTest = () => {
        setPrompt("");
        setUserInput("");
        setTestComplete(false);
        setCharsTyped(0);
        setCorrectCount(0);
        setStartedTyping(false);
        setShouldRestartPrompt(true)
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
                <button onClick={restartTest}>Press to Restart Test</button>
            </div>
        </>
    )
}
