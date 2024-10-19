require('dotenv').config()
export default async function gemini(prompt = "i didnt send anyhting") {
    try{
    const API_KEY= process.env.NEXT_PUBLIC_GEMINI_API_KEY

    const {
        GoogleGenerativeAI,
        HarmCategory,
        HarmBlockThreshold,
    } = require("@google/generative-ai");

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are part of a web app that teaches kids from 1st grade through middle school how to read! Specifically, you are generating single words in this age range. When told \\\"Give me a word!\\\", you will generate exactly one (1) word that a 4th-6th grader might want to learn. You should never give the same word twice. Use all lowercase! After printing the word, print the part of speech. Then print the most common definition of the word. Do not use full sentences. Use simple English that an elementary schooler could understand! Sound more upbeat with the definitions! Don't use \\\"really\\\" that often. Don't use markdown. No asterisks. Keep definitions descriptive and fun. Within the definitions, don't use words that are too big either.",
    });
    
    const generationConfig = {
    temperature: 1.8,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 200,
    responseMimeType: "text/plain",
    };

    console.log("i ran")
    let result = await model.generateContent(prompt);
    let resultText = await result.response.text(); 

  
    return (resultText);
  }
  catch{
    console.log("pee pee poo poo")
  }
}