import { useContext } from "react"
import { ReducerContext } from "@/context/ReducerContext"

export const useReducerContext = () => {
    const context = useContext(ReducerContext)
    if (!context) {
        throw new Error("Context is not provided. Please double check the Context.")
    }
    return context;
}
