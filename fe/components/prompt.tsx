'use client'
import { useState ,useEffect } from 'react';
import gemini from '@/components/gemini'
import ClientComponent from './ClientComponent';
import { collection, getDoc, doc, updateDoc, arrayUnion, addDoc } from "firebase/firestore";
import { firestore } from '@/firebase/firebase'
import { getAuth } from 'firebase/auth'



declare global {
    var word: string;
    var paragraph: string;
}

interface Props {
    proompt: string
    instruction: string
    token :string
    mode:string
    colors:string[]
}

const Prompt:React.FC<Props> = ({proompt = "", instruction = "", token = "", mode="easy", colors }) => {

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
            // setText(String(result));
            
            const allText = String(result).split("\n")
            console.log(allText)

            globalThis.word = String(result).split("\n")[0]

            const auth = getAuth();
            let userID = auth.currentUser?.uid

            if (userID) {
                const userRef = doc(firestore, "users", userID);
                await updateDoc(userRef, {
                    words: arrayUnion(globalThis.word)
                });
            } else {
                console.error('User ID is undefined');
            }

            globalThis.paragraph = String(result).split("\n")[2]
            console.log(globalThis.paragraph)

            setText(String(result));

        })
        .catch((error) => {
        console.error('Error fetching data:', error)
        })
        
        
    }, []); // Empty dependency array ensures this effect runs once when the component mounts
    
  return (
    <>
    <div className="mt-10 text-pretty text-2xl mb-5">
        {text}
    </div>
    {text ? (<ClientComponent accessToken={token} mode="easy" colors={colors} />) : ("")}
    </>
  );
};

export default Prompt;
