import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import "./PromptCard.css";

import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

import CountdownTimer from '../CountdownTimer/CountdownTimer';

const PromptCard = () => {

    const [prompt, setPrompt] = useState(faker.word.words({ count: 150 }));
    const [typedInput, setTypedInput] = useState("");
    const [startedTyping, setStartedTyping] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15);
    
    useEffect(() => {
        if (startedTyping && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        //! Show results modal here later
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [startedTyping, timeLeft]);

    const refreshPrompt = () => {
        const newPrompt = faker.word.words({ count: 150 });
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

                <div class="typing-info">
                    <Button variant="primary" onClick={refreshPrompt}>Restart</Button>

                    <div class="wpm">
                        <p>WPM: </p>
                    </div>

                    <div class="timeLeft">
                        <p>Time: {CountdownTimer}</p>
                    </div>

                    <div class="Mistakes">
                        <p>Mistakes: </p>
                    </div>
                </div>
            </div>

            <input
                autoFocus
                type='text'
                className="input"
                value={typedInput}
                onChange={(e) => {
                    setTypedInput(e.target.value);
                    if (!startedTyping) setStartedTyping(true); 
                }}
            />
        </>
    )
}

export default PromptCard;
