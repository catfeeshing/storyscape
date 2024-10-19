import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

interface cardProps {
    name: string
}

const LevelCard: React.FC<cardProps> = ({name}) => {
  return (
    <div>
        <Card
            isFooterBlurred
            radius="lg"
            isHoverable
            isPressable
            className="border-none hover:translate-y-[-5px]"
            >
            <Image
                alt="Woman listing to music"
                className="object-cover "
                height={200}
                src="https://www.pocketmindfulness.com/wp-content/uploads/2017/03/baby-steps-approach.jpg"
                width={200}
            />
            <CardFooter className=" justify-centerbefore:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{name}</p>
            </CardFooter>
        </Card>
        
    </div>
  )
}

export default LevelCard