import React, { useEffect } from "react";
import Icon from "../atoms/Icon"

type Props = {
  children: React.ReactNode
}

export default function Slider({ children }: Props) {
  // const childrenArray = React.Children.toArray(children)
  const sliderRef = React.useRef<HTMLDivElement>(null);

  // Local state
  const [totalWidth, setTotalWidth] = React.useState(0);
  const [step, setStep] = React.useState(216);
  const [numberOfSlides, setNumberOfSldes] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    
    if (!slider) return;
    const sliderContent = slider.querySelector(".slider__content");

    // reset the scroll x to 0
    slider.scrollTo({
      behavior: "smooth",
      left: position
    })

    if (sliderContent) {
      // get the total width of the slider content
      setTotalWidth(sliderContent.clientWidth || 0);
      setNumberOfSldes(sliderContent.children.length);
    }
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    
    if (!slider) return;

    slider.scrollTo({
      behavior: "smooth",
      left: position
    })
  }, [position])

  // Handlers
  const handleSlide = (action: "next" | "prev") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const viewerWidth = slider.clientWidth;

    if (action === "next") {
      const newPosition = position + step;
      const isLastSlide = newPosition >= totalWidth - viewerWidth;

      if (!isLastSlide) {
        setPosition(newPosition);
      } else {
        setPosition(totalWidth - viewerWidth);
      }
    } else {
      const newPosition = position - step;
      const isFirstSlide = newPosition <= 0;

      if (!isFirstSlide) {
        setPosition(newPosition);
      } else {
        setPosition(0);
      }
    }
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