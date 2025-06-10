import React, { useState, useEffect, useReducer } from "react"
import { typingReducer, initialTypingState } from "@/reducers/typingReducer"

type TimerProps = {
    startedTyping: boolean;
    setTestComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Timer({startedTyping, setTestComplete} : TimerProps) {

    const [state, dispatch] = useReducer(typingReducer, initialTypingState)
    const [time, setTime] = useState<number>(15)

    useEffect(() => {
        // console.log(state.startedTyping, "<<<startedTyping")
        if (startedTyping) {
            const countDown = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime < 1) {
                        clearInterval(countDown)
                        setTestComplete(true)
                        return 0;
                    }
                    return prevTime - 1;
                })
            }, 1000)
    
            return () => clearInterval(countDown);
        }
    }, [startedTyping])


    useEffect(() => {
        if (time < 1) {
            setTestComplete(true)
            // console.log(state.testComplete, "<<<testComplete")
        }
    }, [time])

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}
