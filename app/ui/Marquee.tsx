type MarqueeProps = {
  items: React.ReactNode[]
  speed?: number
}

export default function Marquee({ items, speed = 20 }: MarqueeProps) {
  const track = [...items, ...items]

  return (
    <>
    <div className="overflow-hidden w-full bg-blue-secondary rotate-10 -mb-5">
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, i) => (
          <span key={i} className="shrink-0 px-6 font-inconsolata text-2xl text-black">
            {item}
          </span>
        ))}
      </div>
    </div>

        <div className="overflow-hidden w-full bg-pink-secondary -rotate-8">
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, i) => (
          <span key={i} className="shrink-0 px-6 font-inconsolata text-2xl text-black">
            {item}
          </span>
        ))}
      </div>
    </div>
    </>
  )
}