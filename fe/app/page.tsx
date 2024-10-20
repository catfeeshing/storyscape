import {Image} from "@nextui-org/image";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <h1>welcome to storyscape!</h1> */}
      {/* <div style={{backgroundImage: "url('htty-40 bg-center fixed inset-0 "></div> */}
     <div className="fixed inset-0 justify-center align-middle items-end opacity-50" >
      <Image
      alt="NextUI hero Image"
      src="https://images-ext-1.discordapp.net/external/wEQRfhDXRyLu5HGFlLBBK_9tY3qFY7gKZbrTHrKlNeg/https/cdn.vectorstock.com/i/500p/07/91/fantasy-land-horizontal-background-grass-hills-vector-52000791.jpg?format=webp&width=1226&height=730"
      width={10000}
      className="" 
    />
    </div>
    <div className=" inset-0 justify-center align-middle items-end" >
      <Image
      alt="NextUI hero Image"
      src="https://media.discordapp.net/attachments/1296711558868762687/1297499568552022017/Untitled_3.PNG?ex=67162623&is=6714d4a3&hm=17dca45ed24c1b96c4b7c2e247704fc5bd6e98b5b98af88b5c3cbd62bd233a75&=&format=webp&quality=lossless&width=645&height=928"
      width={10000}
      className="origin-bottom-right rotate-6 translate-x-64 translate-y-10 transform w-[500px]" 
    />
    </div>
      
    </section>
  );
}
