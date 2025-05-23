'use client'

//! Components
import PromptCard from "../components/PromptCard/PromptCard"
import Dashboard from "../components/Dashboard/Dashboard"
import TestResults from "../components/TestResults/TestResults"

import { useState } from "react"

export default function Home() {

  const [testComplete, setTestComplete] = useState<boolean>(false)

  return (
    <>
      <h1>TypingTest Demo</h1>
      { testComplete ? <TestResults /> : <PromptCard setTestComplete={setTestComplete}/> }
    </>
  );
}

