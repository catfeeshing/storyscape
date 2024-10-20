'use client'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

interface cardProps {
    name: string
    src: string
    link:string
}

const LevelCard: React.FC<cardProps> = ({name, src, link}) => {
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
                        height={150}
                        src={src}
                        width={300}
                    />
                    <CardFooter className="justify-center">
                        <p className="text-2xl font-extrabold ">{name}</p>
                    </CardFooter>
                </a>
            </Card>
    </div>
  )
}

export default LevelCard