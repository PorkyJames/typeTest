//! Initial State
export const initialTypingState = {
    userInput: '',
    charsTyped: 0,
    correctCount: 0,
    isFocused: true,
    startedTyping: false,
    testComplete: false
}

//! Reducer Function
export function typingReducer(state: typeof initialTypingState, action: any) {
    switch (action.type) {
        case 'IDLE':
            return {...state, startedTyping: false }
        case 'TYPING':
            return {...state, startedTyping: true}
        case 'COMPLETE':
            return {...state, testComplete: true}
        case 'FOCUS':
            return {...state, isFocused: true}
        case 'BLUR':
            return {...state, isFocused: false}
        case 'RESET':
            return initialTypingState
        default:
            return state
    }
}

