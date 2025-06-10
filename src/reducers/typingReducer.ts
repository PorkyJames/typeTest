//! State Type
export type TypingState ={
    userInput: string;
    charsTyped: number;
    correctCount: number;
    isFocused: boolean;
    startedTyping: boolean;
    testComplete: boolean;
    prompt: string;
}

//! Initial State
export const initialTypingState = {
    userInput: '',
    charsTyped: 0,
    correctCount: 0,
    isFocused: true,
    startedTyping: false,
    testComplete: false,
    prompt: '',
}

//! Reducer Function
export function typingReducer(state: typeof initialTypingState, action: any) {
    switch (action.type) {
        case 'IDLE':
            return {...state, isFocused: false }
        case 'FOCUSED':
            return {...state, isFocused: true }
        case 'TYPING':
            return {
                ...state, 
                userInput: action.payload.userInput,
                charsTyped: action.payload.userInput.length,
                correctCount: action.payload.correctCount,
                startedTyping: true,
            }
        case 'COMPLETE':
            return {...state, testComplete: true}
        case 'RESET':
            return {...initialTypingState, testComplete: false}
        case 'PROMPT_RESET':
            return {
                ...state,
                prompt: action.payload.prompt,
                userInput: '',
                charsTyped: 0,
                correctCount: 0,
                isFocused: true,
                startedTyping: false,
                testComplete: false,
            };
        default:
            return state
    }
}

