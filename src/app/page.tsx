'use client'

//! Components
import PromptCard from "../components/PromptCard/PromptCard"
import Dashboard from "../components/Dashboard/Dashboard"
import TestResults from "../components/TestResults/TestResults"

import { useState } from "react"

export default function Home() {

  const [testComplete, setTestComplete] = useState<boolean>(false)
  const [charsTyped, setCharsTyped] = useState<number>(0)
  const [correctCount, setCorrectCount] = useState<number>(0)

  return (
    <>
      <h1>TypingTest Demo</h1>
      <Dashboard />
      { 
        testComplete 
        ? 
        <TestResults 
          setTestComplete={setTestComplete} 
          charsTyped={charsTyped} 
          setCharsTyped={setCharsTyped}
          correctCount={correctCount}
        /> 
        : 
        <PromptCard 
          setTestComplete={setTestComplete} 
          setCharsTyped={setCharsTyped}
          setCorrectCount={setCorrectCount}
        /> 
      }
    </>
  );
}

