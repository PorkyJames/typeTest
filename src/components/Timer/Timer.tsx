import { useState, useEffect } from "react"
import { useHomeContext } from "@/lib/useHomeContext"
import { usePromptCardContext } from "@/lib/usePromptCardContext"

export default function Timer() {

    const { setTestComplete } = useHomeContext()
    const { startedTyping } = usePromptCardContext()

    const [time, setTime] = useState<number>(15)

    useEffect(() => {
        if (startedTyping) {
            const countDown = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime < 1) {
                        clearInterval(countDown)
                        return 0;
                    }
                    return prevTime - 1;
                })
            }, 1000)
    
            return () => clearInterval(countDown);
        }
    }, [])


    useEffect(() => {
        if (time < 1) {
            setTestComplete(true)
        }
    }, [time])

    return (
        <>
            <h1>Timer: {time}</h1>
        </>
    )
}
