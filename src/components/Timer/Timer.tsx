import { useState, useEffect } from "react"
import { useHomeContext } from "@/lib/useHomeContext"

export default function Timer() {

    const { setTestComplete } = useHomeContext()

    const [time, setTime] = useState<number>(15)

    useEffect(() => {
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
    }, [setTestComplete])


    return (
        <>
            <h1>Timer: {time}</h1>
        </>
    )
}
