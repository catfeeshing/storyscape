'use client'
import { subtitle, title } from "@/components/primitives";
import LevelCard from "@/components/levelCard";
import {Image} from "@nextui-org/image";
import {Textarea} from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import { collection, getDoc, doc, updateDoc, arrayUnion, addDoc } from "firebase/firestore";
import { auth, firestore } from '@/firebase/firebase'
import { getAuth } from 'firebase/auth'


export default function BlogPage() {
  const [value, setValue] = React.useState("");

  const auth = getAuth();

  const handleSubmit = async () => {
    let userID = auth.currentUser?.uid;

    if (userID && value) {
      const userRef = doc(firestore, "users", userID);
      try {
        await updateDoc(userRef, {
          theme: value
        });
        console.log("Theme updated successfully");
      } catch (error) {
        console.error("Error updating theme: ", error);
      }
    } else {
      console.error('User ID is undefined or the value is empty');
    }
  };
  
  if (auth.currentUser) {
    return (
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold ">Choose a world:</h1>
        <div className="flex flex-col md:flex-row gap-5 mt-10 w-full justify-center z=50">
          <LevelCard name="Word Wonderland" description="Expand your diction by learning new words" link="/easy" src="https://pics.craiyon.com/2023-10-25/589e1ea0f8c54cd1b1d3eda60f394fd1.webp"></LevelCard>
          <LevelCard name="Varied Valleys" description="Learn a variety of new sentence structures" link="/medium" src="https://img.pikbest.com/ai/illus_our/20230424/5f14e94ae9dc62de5f6ceaded95b306f.jpg!sw800"></LevelCard>
          <LevelCard name="Intense Infernos" description="Become an expressive/emotional reader" link="/hard" src="https://www.shutterstock.com/image-vector/cave-lava-underground-hell-landscape-600nw-2023554989.jpg"></LevelCard>
        </div>
        <div className="flex flex-row justify-center items-center">
            <div className=" inset-0 justify-center align-middle items-center" >
              <Image
              alt="NextUI hero Image"
              src="https://media.discordapp.net/attachments/1296711558868762687/1297522562439450675/IMG_8107.png?ex=67163b8d&is=6714ea0d&hm=356f80633ec08abf3005e059c23ca809ce90d37629fa860e4a57e871718eb809&=&format=webp&quality=lossless&width=645&height=928"
              width={360}
              className="origin-bottom-right  transform rotate-[16] w-[500px]" 
            />
            </div>
            <div className="flex flex-col max-w-md gap-3 text-start">
              <p className="font-extrabold text-3xl">Have an adventure in mind?</p>
              <p className="text-xl font-medium">Input a theme, idea, or topic you would like to focus on for today's lesson!</p>
              <div className="w-full flex flex-col gap-2 max-w-[240px] rounded">
                <Textarea
                  variant="underlined"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  value={value}
                  onValueChange={setValue}
                />
                <button className="bg-slate-500 text-white p-4 rounded-lg" onClick={handleSubmit}>Submit</button>
                <button className="bg-slate-500 text-white p-4 rounded-lg" onClick={() => setValue("")}>Reset Theme</button>
                <p className="text-default-500 text-small">{value ? "You got it! Choose what type of lesson you'd like!": ""}</p>
              </div>
            </div>
            
        </div>
        <div className="block inset-0 bg-gradient-to-r from-violet-200 to-pink-200 z=0"/>
        
        
      </div>
      
    );
  }
  else {
    return (
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold ">Choose a world:</h1>
        <div className="flex flex-col md:flex-row gap-5 mt-10 w-full justify-center z=50">
          <LevelCard name="Word Wonderland" description="Expand your diction by learning new words" link="/easy" src="https://pics.craiyon.com/2023-10-25/589e1ea0f8c54cd1b1d3eda60f394fd1.webp"></LevelCard>
          <LevelCard name="Varied Valleys" description="Learn a variety of new sentence structures" link="/medium" src="https://img.pikbest.com/ai/illus_our/20230424/5f14e94ae9dc62de5f6ceaded95b306f.jpg!sw800"></LevelCard>
          <LevelCard name="Intense Infernos" description="Become an expressive/emotional reader" link="/hard" src="https://www.shutterstock.com/image-vector/cave-lava-underground-hell-landscape-600nw-2023554989.jpg"></LevelCard>
        </div>
        <div className="flex flex-row justify-center items-center">
            <div className=" inset-0 justify-center align-middle items-center" >
              <Image
              alt="NextUI hero Image"
              src="https://media.discordapp.net/attachments/1296711558868762687/1297522562439450675/IMG_8107.png?ex=67163b8d&is=6714ea0d&hm=356f80633ec08abf3005e059c23ca809ce90d37629fa860e4a57e871718eb809&=&format=webp&quality=lossless&width=645&height=928"
              width={360}
              className="origin-bottom-right  transform rotate-[16] w-[500px]" 
            />
            </div>
            <div className="flex flex-col max-w-md gap-3 text-start">
              <p className="font-extrabold text-3xl">Have an adventure in mind?</p>
              <p className="text-xl font-medium">Sign in to customize the words and practice excerpts with a theme!</p>
            </div>
            
        </div>
        <div className="block inset-0 bg-gradient-to-r from-violet-200 to-pink-200 z=0"/>
      
      </div>
    )
  };
}