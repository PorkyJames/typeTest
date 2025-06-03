'use client'

//! Imports
import "./PromptCard.css"
import { Button } from "react-aria-components";
import { useEffect, useRef } from "react";

//! Context
import { useHomeContext } from "@/lib/useHomeContext"
import { usePromptCardContext } from "@/lib/usePromptCardContext"

//! Components
import Timer from "../Timer/Timer";

export default function PromptCard() {

    const { setCharsTyped, setCorrectCount, testComplete } = useHomeContext();

    const {
        prompt,
        setPrompt,
        userInput,
        setUserInput,
        startedTyping,
        setStartedTyping,
        isFocused,
        setIsFocused,
        handlePromptRestart,
    } = usePromptCardContext();

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (!prompt && !testComplete) {
            handlePromptRestart()
        }
        handleFocus()
    }, [prompt, testComplete])

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
                    }  
                }
            >

                {startedTyping ? 
                <Timer /> 
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
                    <Button onClick={handlePromptRestart}>Refresh Prompt</Button>
                </div>
            </div>
    
        </>
    );
}
