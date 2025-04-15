import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import "./PromptCard.css";

import { faker } from "@faker-js/faker";
import { useState } from "react";


const PromptCard = () => {

    const [prompt, setPrompt] = useState(faker.word.words({ count: 150 }));
    const [typedInput, setTypedInput] = useState("");
    const [timeLeft, setTimeLeft] = useState(30);
    
    const refreshPrompt = () => {
        const newPrompt = faker.word.words({ count: 150 });
        setPrompt(newPrompt);
    }

    //! Need to create a countdown timer from 30 seconds down to 0 
    //! as soon as the user starts typing. Need to use the useState above

    const countdown = () => {
        if (timeLeft > 0) {
            setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
    }

    return (
        <>

            <div class="prompt-card">
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
                            <span className={className}>
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
                        <p>Time: {typingTimer}</p>
                    </div>

                    <div class="Mistakes">
                        <p>Mistakes: </p>
                    </div>
                </div>
            </div>

            {/* There is an issue with autoFocus not working */}
            <input
                type='text'
                class="input"
                value={typedInput}
                onChange={(e) => setTypedInput(e.target.value)}
                autoFocus
            />
        </>
    )
}

export default PromptCard;
