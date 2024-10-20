import {Image} from "@nextui-org/image";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <h1>welcome to storyscape!</h1> */}
      {/* <div style={{backgroundImage: "url('htty-40 bg-center fixed inset-0 "></div> */}
     <div className="fixed inset-0 justify-center align-middle items-end opacity-50 z-[0]" >
      <Image
      alt="NextUI hero Image"
      src="https://images-ext-1.discordapp.net/external/wEQRfhDXRyLu5HGFlLBBK_9tY3qFY7gKZbrTHrKlNeg/https/cdn.vectorstock.com/i/500p/07/91/fantasy-land-horizontal-background-grass-hills-vector-52000791.jpg?format=webp&width=1226&height=730"
      width={10000}
      className="" 
    />
    </div>

    {/* <div className="flex items-left justify-left"> */}
      {/* left rectangle */}
      <div className="absolute inset-20 w-1/2 h-300 bg-gradient-to-r from-slate-200 to-white-200 opacity-70 p-40 rounded-3xl">
      <h1 className="text-6xl font-bold text-slate z+5">welcome to storyscape!</h1>
      <br></br>
      <p className="text-2xl font-medium text-slate z+5">exploring your words and your world through text. <br></br> learn the english you want, however you want!</p>
      <br></br>
      <button className="bg-slate-500 text-white p-4 rounded-lg z+5"><a href="/levels">begin your adventure</a></button>
      <br></br>
      <br></br>
      <p><b>featuring:</b></p>
      <ul>
        <li> - three different levels of difficulty </li>
        <li> - personal glossary to track your adventures </li>
        <li> - customize your text adventures </li>
      </ul>
    </div>

    {/* hero image */}
    <div className=" inset-0 justify-center align-middle items-end" >
      <Image
      alt="NextUI hero Image"
      src="https://media.discordapp.net/attachments/1296711558868762687/1297524375914020986/IMG_8108.png?ex=67163d3e&is=6714ebbe&hm=892d5283d1220cdc05d2b3454b18f522ebb2ee9200b7b5b1f9ae6b68eb6ce133&=&format=webp&quality=lossless&width=541&height=778"
      width={10000}
      className="origin-bottom-right rotate-6 translate-x-64 translate-y-10 transform w-[500px]" 
    />
    </div>
      
    </section>
    
  );
}
