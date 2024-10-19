'use client'
import { useState ,useEffect } from 'react';
import gemini from '@/components/gemini'


const Prompt = () => {

    const [text, setText] = useState('');
    
    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve, reject) => {
              // Simulate a fetch request
              gemini('cow')
                .then((response) => response)
                .then((data) => resolve(data))
                .catch((error) => reject(error))
            })
          }
        fetchData()
        .then((result) => {
            // console.log(result)
            setText(String(result));
        })
        .catch((error) => {
        console.error('Error fetching data:', error)
        })
        
        
    }, []); // Empty dependency array ensures this effect runs once when the component mounts
    
  return (
    <div>
        {text}
    </div>
  );
};

export default Prompt;
