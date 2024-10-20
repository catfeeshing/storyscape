import { title } from "@/components/primitives";
import LevelCard from "@/components/levelCard";
import {Image} from "@nextui-org/image";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <h1 className={title()}>Choose a world:</h1>
      <div className="flex flex-col md:flex-row gap-5 mt-10 w-full justify-center z=50">
        <LevelCard name="Word Wonderland" description="Expand your diction by learning new words" link="/easy" src="https://pics.craiyon.com/2023-10-25/589e1ea0f8c54cd1b1d3eda60f394fd1.webp"></LevelCard>
        <LevelCard name="Varied Valleys" description="Learn a variety of new sentence structures" link="/medium" src="https://img.pikbest.com/ai/illus_our/20230424/5f14e94ae9dc62de5f6ceaded95b306f.jpg!sw800"></LevelCard>
        <LevelCard name="Intense Infernos" description="Become an expressive/emotional reader" link="/hard" src="https://www.shutterstock.com/image-vector/cave-lava-underground-hell-landscape-600nw-2023554989.jpg"></LevelCard>
      </div>
      <div className="block inset-0 bg-gradient-to-r from-violet-200 to-pink-200 z=0"/>
      <div className=" inset-0 justify-center align-middle items-end" >
        <Image
        alt="NextUI hero Image"
        src="https://media.discordapp.net/attachments/1296711558868762687/1297522562439450675/IMG_8107.png?ex=67163b8d&is=6714ea0d&hm=356f80633ec08abf3005e059c23ca809ce90d37629fa860e4a57e871718eb809&=&format=webp&quality=lossless&width=645&height=928"
        width={10000}
        className="origin-bottom-right rotate-[16] translate-x-[-30px] translate-y-[-500px] transform w-[500px]" 
      />
      </div>
    </div>
    
  );
}
