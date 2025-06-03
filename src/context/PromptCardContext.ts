import React, { createContext } from "react"

type PromptCardType = {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    userInput: string;
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
    startedTyping: boolean;
    setStartedTyping: React.Dispatch<React.SetStateAction<boolean>>;
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
    shouldRestartPrompt: boolean;
    setShouldRestartPrompt: React.Dispatch<React.SetStateAction<boolean>>
    handlePromptRestart: () => void;
}

export const PromptCardContext = createContext<PromptCardType | null>(null);
