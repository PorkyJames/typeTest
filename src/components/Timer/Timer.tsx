import { useState, useEffect } from "react"

type HomePageProps = {
    setTestComplete: (value: boolean) => void;
}

export default function Timer({setTestComplete } : HomePageProps) {

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
