import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import "./PromptCard.css";

import { faker } from "@faker-js/faker";
import { useState } from "react";


const PromptCard = () => {

    const [prompt, setPrompt] = useState(faker.word.words({ count: 200 }));
    
    const refreshPrompt = () => {
        const newPrompt = faker.word.words({ count: 200 });
        setPrompt(newPrompt);
    }

    return (
        <>
            <div class="prompt">
                <p>{prompt}</p>
            </div>

            <Button variant="primary" onClick={refreshPrompt}>Restart</Button>
        </>
    )
}

export default PromptCard;
