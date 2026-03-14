"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  className?: string
}

export default function TextReveal({ text, className }: TextRevealProps) {
  const textRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (!textRef.current) return

    const ctx = gsap.context(() => {
      const split = new SplitType(textRef.current!, { types: "words" })
      const words = split.words

      // Initial state: invisible and gray
      gsap.set(words, { color: "#6b7280", opacity: 0 })

      // Timeline: fade in + color change + fade out
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 40%",
          end: "bottom 40%",
          scrub: true,
        }
      })

      // Fade in and color change
      tl.to(words, {
        opacity: 1,
        color: "#000000",
        stagger: 0.1,
        ease: "none"
      })

      // Fade out at the end
      tl.to(words, {
        opacity: 0,
        stagger: 0.05,
        ease: "none"
      }, ">") // start immediately after previous animation

      return () => split.revert()
    }, textRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative">
    <div className="h-20"></div>
      <div className="sticky top-1/2 -translate-y-1/2 px-6">
        <p
          ref={textRef}
          className={cn(`text-4xl md:text-5xl leading-relaxed font-nunito-sans font-medium text-center`, `${className}`)}
        >
          {text}
        </p>
      </div>
    <div className="h-20"></div>
    </div>
  )
}