import React, { createContext } from "react"
import { initialTypingState } from "@/reducers/typingReducer";


type ReducerContextType = {
    state: typeof initialTypingState;
    dispatch: React.Dispatch<any>
}

export const ReducerContext = createContext<ReducerContextType | null>(null);
