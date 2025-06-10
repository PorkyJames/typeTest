'use client'

//! Imports
import "./PromptCard.css"
import { Button } from "react-aria-components";
import { useEffect, useRef, useReducer } from "react";
import { typingReducer, initialTypingState } from "@/reducers/typingReducer"

//! Context
import { useHomeContext } from "@/lib/useHomeContext"
import { usePromptCardContext } from "@/lib/usePromptCardContext"

//! Components
import Timer from "../Timer/Timer";

interface PromptCardProps {
    state: any;
    dispatch: React.Dispatch<any>;
}

export default function PromptCard({state, dispatch}: PromptCardProps) {

    const { handlePromptRestart } = usePromptCardContext();
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (!prompt && !state.testComplete) {
            handlePromptRestart()
        }
        handleFocus()
    }, [prompt, state.testComplete])

    const handleFocus = () => {
        dispatch({type: 'FOCUSED'})
        inputRef.current?.focus()
    }

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // console.log(value, "<<<<value")
        let correct = 0
        for (let i = 0; i < value.length; i++) {
            if (value[i] === state.prompt[i]) correct++
        }

        dispatch({
            type: 'TYPING',
            payload: {
                userInput: value,
                charsTyped: value.length,
                correctCount: correct,
                startedTyping: true,
            }
        })
        // console.log(state.startedTyping, startedTyping, "<<<startedTyping State")
    }

    //! Grab our prompt, split it, and compare to an input that's invisible
    const promptSplit = (generatedPrompt: string) => {
        const adjustedLetters = generatedPrompt.split("").map((char, index) => {
            let className = ""
    
            if (index < state.userInput.length) {
                className = state.userInput[index] === char ? "correct" : "incorrect"
            } else if (index === state.userInput.length) {
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

                {state.startedTyping ? 
                <Timer startedTyping={state.startedTyping} setTestComplete={setTestComplete}/> 
                : 
                <></>
                }

                <div className="prompt-card">
                    <h2 className={!state.isFocused ? "blurred" : ""}>
                        {promptSplit(state.prompt)}
                    </h2>

                    <div className="input-div">
                        <input 
                            className="input"
                            value={state.userInput}
                            onChange={handleInputChange}
                            ref={inputRef}
                            onBlur={() => dispatch({ type: 'IDLE' })}
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
