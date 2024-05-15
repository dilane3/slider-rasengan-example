import React, { useEffect } from "react";
import Icon from "../atoms/Icon"

type Props = {
  children: React.ReactNode
}

const step = 216;

export default function Slider({ children }: Props) {
  // const childrenArray = React.Children.toArray(children)
  const sliderRef = React.useRef<HTMLDivElement>(null);

  // Local state
  const [totalWidth, setTotalWidth] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  useEffect(() => {
    // TODO: Get the total width of the slider and set it to local state
  }, []);

  useEffect(() => {
    // TODO: Add animation on scroll
  }, [position])

  // Handlers
  const handleSlide = (action: "next" | "prev") => {
    // TODO: Implement the navigation logic
  }

  return (
    <div ref={sliderRef} className="overflow-x-hidden w-full flex">
      {children}

      <div onClick={() => handleSlide("prev")} className="absolute top-1/2 left-6 sm:left-18 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-all flex justify-center items-center cursor-pointer">
        <Icon name="chevron-left" size={16} />
      </div>

      <div onClick={() => handleSlide("next")} className="absolute top-1/2 right-6 sm:right-18 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-all flex justify-center items-center cursor-pointer" >
        <Icon name="chevron-right" size={16} />
      </div>
    </div>
  )
}