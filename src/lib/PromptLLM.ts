//! API Call to our LLM
//! Import OpenAI
import OpenAI from "openai"

//! A function that calls the LLM to provide a prompt
export default async function PromptLLM(): Promise<string> {

    const openAI = new OpenAI()

    const promptGuide = "Generate a typing test prompt that is 50 words long using only the top 200 most commonly used English words. The prompt should be all lowercase with no punctuation, numbers, capitalization and should read naturally, even if it doesn't make perfect sense. Randomize the words on each generation. Only include the prompt, do not say anything else."

    const response = await openAI.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a typing test prompt generator that produces only lower case words" },
            { role: "user", content: promptGuide },
        ],

    })
    
    const resContent = response.choices[0].message.content
    // console.log(resContent)

    //! Edge Case cause sometimes the content returns null
    if (!resContent) {
        return "Please try again Later."
    }

    return resContent
}
