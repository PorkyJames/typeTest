import "../TestResults/TestResults.css"
import KeyboardHeatmap from "@/components/TestResults/KeyboardHeatMap/KeyboardHeatmap"
import { useReducer } from "react"

import { useHomeContext } from "@/lib/useHomeContext"
import { usePromptCardContext } from "@/lib/usePromptCardContext"
import { initialTypingState } from "@/reducers/typingReducer"

interface TestResultsProps {
    state: typeof initialTypingState; 
    dispatch: React.Dispatch<any>;
    testComplete: boolean;
}

export default function TestResults({state, dispatch} : TestResultsProps) {

    const restartTest = () => {
        dispatch({type: 'RESET'})
        // console.log(state.testComplete, "<<<testComplete")
    }
    
    const calculateWPM = (charsTyped : number): number => {
        return (charsTyped / 5) / .25
        // console.log((charsTyped / 5) / .25,"<<<<wpm")
    }

    const calculateAcc = (correctCount : number, charsTyped: number): number => {
        return ((correctCount / charsTyped) * 100)
        // console.log(((correctCount / charsTyped) * 100), "<<<acc")
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
