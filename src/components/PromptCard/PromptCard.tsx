'use client'

//! Imports
import "./PromptCard.css"
import { Button } from "react-aria-components";
import { useState, useEffect } from "react";
import Timer from "../Timer/Timer";

type HomePageProps = {
    setTestComplete: (value: boolean) => void;
    setCharsTyped: (value: number) => void;
    setCorrectCount: (value: number) => void;
}

export default function PromptCard({setTestComplete, setCharsTyped, setCorrectCount} : HomePageProps) {

    const [prompt, setPrompt] = useState<string>("")
    const [userInput, setUserInput] = useState<string>("")
    const [startedTyping, setStartedTyping] = useState<boolean>(false)

    useEffect(() => {
        handlePromptRestart()
    }, [])

    const handlePromptRestart = async () => {
        const res = await fetch("/api/promptLLM")
        const data = await res.json()
        setPrompt(data.prompt)
        setUserInput("")
    }

    //! Grab our prompt, split it, and compare to an input that's invisible
    const promptSplit = (generatedPrompt: string) => {
        const adjustedLetters = generatedPrompt.split("").map((char, index) => {
            let className = ""
    
            if (index < userInput.length) {
                className = userInput[index] === char ? "correct" : "incorrect"
            } else if (index === userInput.length) {
                className = "current"
            }
            return <span key={index} className={className}>{char}</span>
        })

        return adjustedLetters
    }

    return (
        <>

            <div className="prompt-wrapper">

                {startedTyping ? <Timer setTestComplete={setTestComplete}/> : <></>}

                <div className="prompt-card">
                    <h2>
                        {promptSplit(prompt)}
                    </h2>
                </div>

                <div className="input-div">
                    <input 
                        className="input"
                        value={userInput}
                        onChange={(e) => {
                            setUserInput(e.target.value)
                            setCharsTyped(userInput.length)
                            let correct = 0;
                            for (let i = 0; i < userInput.length; i++) {
                                if (userInput[i] === prompt[i]) correct++;
                            }
                            setCorrectCount(correct);
                            if (!startedTyping) {
                                setStartedTyping(true)
                            }
                        }}
                        autoFocus
                    >
                    </input>
                </div>

                <div className="button-div">
                    <Button onClick={handlePromptRestart}>Restart</Button>
                </div>
            </div>
    
        </>
    );
}
