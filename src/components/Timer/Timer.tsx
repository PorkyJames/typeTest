import React, { useState, useEffect, useReducer } from "react"
import { typingReducer, initialTypingState } from "@/reducers/typingReducer"

type TimerProps = {
    startedTyping: boolean;
    dispatch: React.Dispatch<any>
}

export default function Timer({startedTyping, dispatch} : TimerProps) {

    const [time, setTime] = useState<number>(15)

    useEffect(() => {
        // console.log(state.startedTyping, "<<<startedTyping")
        if (startedTyping) {
            const countDown = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime < 1) {
                        clearInterval(countDown)
                        dispatch({ type:'COMPLETE' })
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
            dispatch({type:'COMPLETE'})
        }
    }, [time])

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}
