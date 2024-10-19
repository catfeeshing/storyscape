'use client'
import { title } from "@/components/primitives";
import LevelCard from "@/components/levelCard";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>levels</h1>
      <div className="flex flex-row gap-5 mt-10">
        <LevelCard name="easy"></LevelCard>
        <LevelCard name="medium"></LevelCard>
        <LevelCard name="hard"></LevelCard>
      </div>
      
    </div>
  );
}
