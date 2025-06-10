import { useState, useEffect, useReducer } from "react"
import { useHomeContext } from "@/lib/useHomeContext"
import { usePromptCardContext } from "@/lib/usePromptCardContext"
import { typingReducer, initialTypingState } from "@/reducers/typingReducer"

export default function Timer() {

    const { setTestComplete } = useHomeContext()
    const { startedTyping } = usePromptCardContext()
    const [state, dispatch] = useReducer(typingReducer, initialTypingState)

    const [time, setTime] = useState<number>(15)

    useEffect(() => {
        if (state.startedTyping) {
            const countDown = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime < 1) {
                        clearInterval(countDown)
                        dispatch({type: 'COMPLETE'})
                        return 0;
                    }
                    return prevTime - 1;
                })
            }, 1000)
    
            return () => clearInterval(countDown);
        }
    }, [state.startedTyping, dispatch])


    useEffect(() => {
        if (time < 1) {
            dispatch({type: 'COMPLETE'})
        }
    }, [time])

    return (
        <>
            <h1>Timer: {time}</h1>
        </>
    )
}
