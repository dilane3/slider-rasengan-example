import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge"
import Image from "@rasenganjs/image"

type SimpleCardProps = {
  data: {
    src: string | { uri: string }
    alt: string,
    title: string,
    description: string
  },
  className?: ComponentProps<"div">["className"]
}

export default function SimpleCard({ data, className }: SimpleCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div 
      className={twMerge("relative cursor-pointer", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}  
    >
      <div className="w-[200px] h-[200px] overflow-hidden rounded-lg">
        <Image 
          src={data.src} 
          alt={data.alt} 
          className={twMerge("transition-all  duration-300 object-cover ", hovered ? "scale-105":"scale-100")}
        />
      </div>

      <div className={twMerge("mt-4 flex flex-col justify-end w-full")}>
        <h1 className="text-black font-urbanist">{data.title}</h1>
        <p className="text-black text-sm font-latoRegular">{data.description}</p>
      </div>
    </div> 
  )
}