'use client'

//! Imports
import "./PromptCard.css"
import { Button } from "react-aria-components";
import { useState, useEffect, useRef } from "react";
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
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        handleFocus()
        handlePromptRestart()
        setIsFocused(true)
    }, [])

    const handlePromptRestart = async () => {
        const res = await fetch("/api/promptLLM")
        const data = await res.json()
        setPrompt(data.prompt)
        setUserInput("")
        setIsFocused(true)
    }

    const handleFocus = () => {
        setIsFocused(true);
        return inputRef.current?.focus()
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

            <div className="prompt-wrapper"
                onClick = { () => {
                        handleFocus()
                        setIsFocused(true)
                    }  
                }
            >

                {startedTyping ? 
                <Timer setTestComplete={setTestComplete}/> 
                : 
                <></>
                }

                <div className="prompt-card">
                    <h2 className={!isFocused ? "blurred" : ""}>
                        {promptSplit(prompt)}
                    </h2>

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
                            ref={inputRef}
                            onBlur={() => setIsFocused(false)}
                        >
                        </input>
                    </div>
                    
                </div>


                <div className="button-div">
                    <Button onClick={handlePromptRestart}>Restart</Button>
                </div>
            </div>
    
        </>
    );
}
