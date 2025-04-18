import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import "./PromptCard.css";

import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

import CountdownTimer from '../CountdownTimer/CountdownTimer';

const PromptCard = ({setCompleted}) => {

    const [prompt, setPrompt] = useState(faker.word.words({ count: 30 }));
    const [typedInput, setTypedInput] = useState("");
    const [startedTyping, setStartedTyping] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15);
    
    useEffect(() => {
        if (startedTyping && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        setCompleted(true);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [startedTyping, timeLeft, setCompleted]);

    const refreshPrompt = () => {
        const newPrompt = faker.word.words({ count: 30 });
        setPrompt(newPrompt);
        setTypedInput("");
        setTimeLeft(15);
        setStartedTyping(false);
    };

    return (
        <>
            <CountdownTimer timeLeft={timeLeft} />

            <div className="prompt-card">
                <p>
                    {prompt.split('').map((char, index) => {
                        let className = '';
                        if (index < typedInput.length) {
                            if (char === typedInput[index]) {
                                className = 'correct';
                            } else {
                                className = 'incorrect';
                            }
                        } else if (index === typedInput.length) {
                            className = 'cursor'; 
                        }
                        
                        return (
                            <span class={className}>
                                {char}
                            </span>
                        );
                    })}
                </p>
            </div>

            <Button variant="primary" onClick={refreshPrompt}>Restart</Button>

            <input
                autoFocus
                type='text'
                className="input"
                value={typedInput}
                onChange={(e) => {
                    setTypedInput(e.target.value);
                    if (!startedTyping) {
                        setStartedTyping(true); 
                    }
                }}
            />
        </>
    )
}

export default PromptCard;
