'use client'
//! Components
import PromptCard from "../components/PromptCard/PromptCard"
import Dashboard from "../components/Dashboard/Dashboard"
import TestResults from "../components/TestResults/TestResults"

import { HomeContext } from "@/context/HomeContext"
import { PromptCardContext } from "@/context/PromptCardContext"
import { useState } from "react"

export default function Home() {

  //! HomeContext
  const [testComplete, setTestComplete] = useState<boolean>(false)
  const [charsTyped, setCharsTyped] = useState<number>(0)
  const [correctCount, setCorrectCount] = useState<number>(0)

  //! PromptCardContext
  const [prompt, setPrompt] = useState<string>("")
  const [userInput, setUserInput] = useState<string>("")
  const [startedTyping, setStartedTyping] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [shouldRestartPrompt, setShouldRestartPrompt] = useState<boolean>(false);

  const handlePromptRestart = async () => {
        const res = await fetch("/api/promptLLM")
        const data = await res.json()
        setPrompt(data.prompt)
        setUserInput("")
        setIsFocused(true)
        
    }

  return (
    <>
      <HomeContext.Provider value={{ testComplete, setTestComplete, charsTyped, setCharsTyped, correctCount, setCorrectCount }}>
        <PromptCardContext value={{prompt, setPrompt, userInput, setUserInput, startedTyping, setStartedTyping, isFocused, setIsFocused, handlePromptRestart, shouldRestartPrompt, setShouldRestartPrompt}}>
          <h1>TypingTest Demo</h1>
          <Dashboard />
          { 
            testComplete 
            ? 
            <TestResults /> 
            : 
            <PromptCard /> 
          }
        </PromptCardContext>
      </HomeContext.Provider>
    </>
  );
}

