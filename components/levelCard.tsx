'use client'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

interface cardProps {
    name: string
    src: string
    link:string
    description:string
}

const LevelCard: React.FC<cardProps> = ({name, src, link,description}) => {
  return (
    <div>
        
            <Card
                isFooterBlurred
                radius="lg"
                isHoverable
                isPressable
                className="border-none hover:translate-y-[-5px] h-[270px] w-[300px] pb-3"
                >
                <a href={link}>
                    <Image
                        alt={name}
                        className="object-cover"
                        height={150}
                        src={src}
                        width={300}
                    />
                    <CardFooter className="flex flex-col flex-start">
                        <p className="text-2xl font-extrabold ">{name}</p>
                        <p className="text-xl font-medium ">{description}</p>
                    </CardFooter>
                </a>
            </Card>
    </div>
  )
}

export default LevelCard