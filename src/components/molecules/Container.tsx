import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: ComponentProps<"section">["className"]
  title: string 
  description?: string
}

export default function Container({ children, className = "", title, description }: Props) {
  return (
    <section className={twMerge("max-w-[1500px] min-w-[300px] mx-auto w-full flex flex-col", className)}>
      <div className="flex flex-col my-5 items-center px-8">
        <h1 className="text-2xl md:text-[30px] font-urbanist text-center">{title}</h1>
        {description && <p className="text-md font-latoRegular text-center mt-2">{description}</p>}
      </div>

      <div className="relative w-full py-8 px-4 md:px-10 lg:px-20 flex flex-col">
        {children}
      </div>
    </section>
  )
}