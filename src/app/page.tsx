'use client'
//! Components
import PromptCard from "../components/PromptCard/PromptCard"
import Dashboard from "../components/Dashboard/Dashboard"
import TestResults from "../components/TestResults/TestResults"

import { useReducer } from "react"
import { typingReducer, initialTypingState } from "@/reducers/typingReducer"

//! PromptCardContext
import { PromptCardContext } from "@/context/PromptCardContext"
import { ReducerContext } from "@/context/ReducerContext"

import { usePromptCardContext } from "@/lib/usePromptCardContext"

export default function Home() {
  
  const [state, dispatch] = useReducer(typingReducer, initialTypingState)

  const handlePromptRestart = async () => {
        const res = await fetch("/api/promptLLM")
        const data = await res.json()
        dispatch({type: 'PROMPT_RESET', payload: {prompt: data.prompt}})
    }

  return (
      <ReducerContext.Provider value={{state, dispatch}}>
        <PromptCardContext.Provider value={{handlePromptRestart}}>
          <h1>TypingTest Demo</h1>
          <Dashboard />
          {state.testComplete
            ? <TestResults />
            : <PromptCard />
          }
        </PromptCardContext.Provider>
      </ReducerContext.Provider>
  );
}

