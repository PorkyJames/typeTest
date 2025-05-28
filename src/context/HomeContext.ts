import { createContext } from "react"

type HomeContextType = {
    testComplete: boolean;
    setTestComplete: React.Dispatch<React.SetStateAction<boolean>>;
    charsTyped: number;
    setCharsTyped: React.Dispatch<React.SetStateAction<number>>;
    correctCount: number;
    setCorrectCount: React.Dispatch<React.SetStateAction<number>>;

}

export const HomeContext = createContext<HomeContextType | null>(null)
