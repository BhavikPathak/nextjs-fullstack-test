"use client";

import TextReveal from "@/app/ui/Text-Reveal";
import { Button } from "@/components/ui/button";
import { BabyIcon, ChevronsDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Preview() {
  const params = useParams();
  const revealAtBottomRef = useRef<HTMLDivElement | null>(null)
  const [textRevealList , setTextRevealList] = useState<string[]>([]);
  const [exceedLimit, setExceedLimit] = useState(false);

  useEffect(() => {
    if(!params?.slug) return;

    let slug = params?.slug as string;

    const skipViewCount = slug.endsWith('-trail');
    if(skipViewCount){
      slug = slug.replace('-trail','');
    }

    getDetailFromSlug(slug).then((data)=>{
      if(data){
        if(!skipViewCount){
        increaseViewCount(data,slug).then(()=>{
          setExceedLimit(data.views+1 > data.maxViews);
        });
        }
        setTextRevealList(data.description.split('\n').filter((text:string)=>text));
      }
    });

    if (!revealAtBottomRef.current) return;

    gsap.fromTo(
      revealAtBottomRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: document.body,   // track whole page scroll
          start: () => "bottom bottom", // when page bottom reaches viewport bottom
          toggleActions: "play none none none"
        }
      }
    )
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/9664631933','_blank');
  }

    if(exceedLimit){
     return (<div>
      <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="absolute w-75 h-75 rounded-full 
        bg-blue-primary blur-[120px]
        top-[20%] left-[20%]
        animate-float1">
      </div>

      <div className="absolute w-75 h-75 rounded-full
        bg-pink-primary blur-[120px]
        bottom-[20%] right-[20%]
        animate-float2">
      </div>
    </div>
    <div className="flex justify-center items-center min-h-screen">
      <p className=" font-inconsolata text-6xl font-medium text-center">You have exceeded view limit</p>
    </div>
     </div>)
    }

    return (
   <div className="">
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="absolute w-75 h-75 rounded-full 
        bg-blue-primary blur-[120px]
        top-[20%] left-[20%]
        animate-float1">
      </div>

      <div className="absolute w-75 h-75 rounded-full
        bg-pink-primary blur-[120px]
        bottom-[20%] right-[20%]
        animate-float2">
      </div>
    </div>

    <section className="md:mx-auto max-w-2xl my-10 mx-8">
      <h1 className="text-2xl font-inconsolata font-medium text-black fixed">Dear Krishiv,
        <br /><span ref={revealAtBottomRef} className="text-7xl font-dancing-script opacity-0">Bade Bhaiya</span>
      </h1>

      <div className="fixed left-[45%] bottom-20 text-gray-600 animate-bounce flex justify-center text-center">Scroll down
        <br /><ChevronsDown></ChevronsDown>
      </div>

      <div className="h-screen"></div>
      {textRevealList.map((text,idx)=><TextReveal text={text} key={idx}></TextReveal>)}            
      <div className="h-[60vh]"></div>

      <div className="p-10 w-full rounded-xl bg-black/5 shadow-xl ring-2 ring-white/80 backdrop-blur-3xl bg-linear-to-r from-blue-secondary/60 to-pink-secondary/60">
       <p className="font-inconsolata font-regular text-black text-3xl"> It's still early, so we're keeping it within the close family for now.</p>

        <p className="font-dancing-script text-4xl text-center font-extrabold text-white mt-10">#PyaarBhaRa</p>
      <div className="flex mt-20 gap-5">
        <Button className="w-full" size={'xl'} onClick={handleClick}> Bless us  <BabyIcon/> </Button>
      </div>
      </div>

    </section>

  </div>
    )
}

export async function getDetailFromSlug(slug: string) {
  const res = await fetch(`/api/list/${slug}`, {
    method: "GET",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json()
}

export async function increaseViewCount(data : any, slug:string) {
  const views = data.views+1;
  await fetch(`/api/list/${slug}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({views}),
})
}