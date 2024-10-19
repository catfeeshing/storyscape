'use client'
import { useState ,useEffect } from 'react';
import gemini from '@/components/gemini'

declare global {
    var word: string;
}

interface Props {
    proompt: string
    instruction: string
}

const Prompt:React.FC<Props> = ({proompt = "", instruction = ""}) => {

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
        .then((result) => {
            // console.log(result)
            setText(String(result));
            // var word: string
            // first string in result
            // var word: string
            // let word = String(result).split(" ")[0]
            globalThis.word = String(result).split(" ")[0]
        })
        .catch((error) => {
        console.error('Error fetching data:', error)
        })
        
        
    }, []); // Empty dependency array ensures this effect runs once when the component mounts
    
  return (
    <div className="mt-10 text-pretty text-xl">
        {text}
    </div>
  );
};

export default Prompt;
