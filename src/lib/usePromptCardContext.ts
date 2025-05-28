import { useContext } from "react"
import { PromptCardContext } from "@/context/PromptCardContext"

export const usePromptCardContext = () => {
    const context = useContext(PromptCardContext)
    if (!context) {
        throw new Error("Context is not provided. Please double check the Context.")
    }
    return context;
}
