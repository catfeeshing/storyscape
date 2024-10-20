'use client'
import { useState ,useEffect } from 'react';
import gemini from '@/components/gemini'
import ClientComponent from './ClientComponent';
import { collection, addDoc } from "firebase/firestore";
import { firestore } from '@/firebase/firebase'


declare global {
    var word: string;
    var paragraph: string;
}

interface Props {
    proompt: string
    instruction: string
    token :string
    mode:string
}

const Prompt:React.FC<Props> = ({proompt = "", instruction = "", token = "", mode="easy"}) => {

    const [text, setText] = useState('');
    
    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve, reject) => {
              // Simulate a fetch request
              gemini(proompt, instruction)
                .then((response) => response)
                .then((data) => resolve(data))
                .catch((error) => reject(error))
            })
          }
        fetchData()
        .then(async (result) => {
            // console.log(result)
            setText(String(result));
            
            const allText = String(result).split("\n")
            console.log(allText)

            globalThis.word = String(result).split("\n")[0]

            globalThis.paragraph = String(result).split("\n")[2]
            console.log(globalThis.paragraph)

        })
        .catch((error) => {
        console.error('Error fetching data:', error)
        })
        
        
    }, []); // Empty dependency array ensures this effect runs once when the component mounts
    
  return (
    <>
    <div className="mt-10 text-pretty text-xl">
        {text}
    </div>
    {text ? (<ClientComponent accessToken={token} mode="easy" />) : ("")}
    </>
  );
};

export default Prompt;
