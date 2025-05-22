//! GET Method

import PromptLLM from "@/lib/PromptLLM"

export async function GET() {
    const prompt = await PromptLLM()
    return Response.json({ prompt })
}
