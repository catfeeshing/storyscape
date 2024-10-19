import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

interface cardProps {
    name: string
    src: string
}

const LevelCard: React.FC<cardProps> = ({name, src}) => {
    const link:string = "/" + name
  return (
    <div>
        
            <Card
                isFooterBlurred
                radius="lg"
                isHoverable
                isPressable
                className="border-none hover:translate-y-[-5px] h-[200px] w-[300px]"
                >
                <a href={link}>
                    <Image
                        alt={name}
                        className="object-cover"
                        height={200}
                        src={src}
                        width={300}
                    />
                    <CardFooter className=" justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-xl font-extrabold text-white/80">{name}</p>
                    </CardFooter>
                </a>
            </Card>
    </div>
  )
}

export default LevelCard