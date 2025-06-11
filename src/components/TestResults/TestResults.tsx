import "../TestResults/TestResults.css"
import KeyboardHeatmap from "@/components/TestResults/KeyboardHeatMap/KeyboardHeatmap"

import { usePromptCardContext } from "@/lib/usePromptCardContext"
import { useReducerContext } from "@/lib/useReducerContext"

export default function TestResults() {

    const {handlePromptRestart} = usePromptCardContext()
    const {state, dispatch } = useReducerContext()

    const restartTest = () => {
        dispatch({type: 'RESET'})
        handlePromptRestart()
    }
    
    const calculateWPM = (charsTyped : number): number => {
        return (charsTyped / 5) / .25
    }

    const calculateAcc = (correctCount : number, charsTyped: number): number => {
        return ((correctCount / charsTyped) * 100)
    }
    
    return (
        <>

            <div className="tr-top-wrapper">
                <div className="wpm-result">
                    WPM: {calculateWPM(state.charsTyped)}
                </div>

                <div className="acc-result">
                    Acc: {calculateAcc(state.correctCount, state.charsTyped).toFixed(1)}
                </div>
            </div>

            <KeyboardHeatmap />

            <div className="restart-btn">
                <button onClick={restartTest}>Press to Restart Test</button>
            </div>
        </>
    )
}
