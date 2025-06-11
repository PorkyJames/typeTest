'use client'
//! Components
import PromptCard from "../components/PromptCard/PromptCard"
import Dashboard from "../components/Dashboard/Dashboard"
import TestResults from "../components/TestResults/TestResults"

import { useReducer } from "react"
import { typingReducer, initialTypingState } from "@/reducers/typingReducer"

export default function Home() {
  
  const [state, dispatch] = useReducer(typingReducer, initialTypingState)

  const handlePromptRestart = async () => {
        const res = await fetch("/api/promptLLM")
        const data = await res.json()
        dispatch({type: 'PROMPT_RESET', payload: {prompt: data.prompt}})
    }

  return (
    <>
        <h1>TypingTest Demo</h1>
        <Dashboard />
        {state.testComplete
          ? <TestResults state={state} dispatch={dispatch} testComplete={state.testComplete} />
          : <PromptCard state={state} dispatch={dispatch} handlePromptRestart = {handlePromptRestart}/>
        }
    </>
  );
}

