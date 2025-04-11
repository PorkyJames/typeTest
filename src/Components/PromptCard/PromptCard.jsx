import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import "./PromptCard.css";

import { faker } from "@faker-js/faker";
import { useState } from "react";


const PromptCard = () => {

    const [prompt, setPrompt] = useState(faker.word.words({ count: 150 }));
    const [typedInput, setTypedInput] = useState("");
    
    
    const refreshPrompt = () => {
        const newPrompt = faker.word.words({ count: 150 });
        setPrompt(newPrompt);
    }

    return (
        <>

            <div class="prompt-card">
                <p>
                    {prompt.split('').map((char, idx) => {
                        let className = '';
                        if (idx < typedInput.length) {
                            className = char === typedInput[idx] ? 'correct' : 'incorrect';
                        } else if (idx === typedInput.length) {
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
                        <p>Time: </p>
                    </div>

                    <div class="Mistakes">
                        <p>Mistakes: </p>
                    </div>
                </div>
            </div>

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
