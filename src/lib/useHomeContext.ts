import { useContext } from "react"
import { HomeContext } from "../context/HomeContext"

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error("Context is not provided. Please double check the Context.")
    }
    return context;
}
