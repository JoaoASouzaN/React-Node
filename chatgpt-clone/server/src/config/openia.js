//import OpenAI from "openai";

const { Configuration, OpenAIApi, OpenAI } = require("openai");

module.exports = class openai{

    static configuration(){
        return new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        // return new OpenAIApi(configuration)
    }
    
    static textCompletion(prompt){
        return{
            model: "gpt-3.5-turbo-instruct",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
    
    static getParams(prompt) {
        const params = OpenAI.Chat.ChatCompletionCreateParams = {
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        }
    }
}