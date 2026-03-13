import Marquee from "@/app/ui/Marquee";

export default function Preview() {
    return (
      <section className="min-h-screen mx-auto max-w-4xl">
        <img src="/test-image-krishiv.JPG" alt="krishiv" className="h-[100vh] w-auto object-cover aspect-auto"/>
        <h1 className="text-white font-nunito-sans text-6xl">Krishiv Pathak</h1>
        <div className="absolute bottom-0 rounded-xl bg-white/20 shadow-xl ring-1 ring-black/90 backdrop-blur-md w-full">
          <h2>You have got a message</h2>
          <p>Hello labla labaascnasncaksnc</p>
          <button>Click me</button>
        </div>
      </section>
    )

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col mx-auto max-w-4xl">
     {/*  <video src="https://www.pexels.com/download/video/7946013/" autoPlay muted playsInline loop className="h-full w-full opacity-15"></video> */}
      <div className="absolute w-full h-full">
      <div className="flex-1 flex flex-col text-center py-10 md:px-10 px-4">
        <div className="font-nunito-sans font-medium text-5xl flex justify-center w-full"> 
          <span>You have a message</span>
        </div>
        <div className="flex items-center justify-center h-44 w-full">
            {/* <div className="animate-[spin_30s_linear_infinite] absolute w-44 h-44 bg-blue-secondary bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center] " />           
            <div className="animate-[spin_30s_linear_infinite] absolute w-42 h-42 bg-black bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center]" />
            <div className="animate-[spin_30s_linear_infinite] absolute w-40 h-40 bg-pink-secondary bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center]" />
            <div className="animate-[spin_30s_linear_infinite] absolute w-38 h-38 bg-black bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center]" />
            <div className="animate-[spin_30s_linear_infinite] absolute w-36 h-36 bg-blue-primary bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center]" />
            <div className="animate-[spin_30s_linear_infinite] absolute w-34 h-34 bg-black bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center]" />
            <div className="animate-[spin_30s_linear_infinite] absolute w-32 h-32 bg-pink-primary bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center]" />
            <div className="animate-[spin_30s_linear_infinite] absolute w-30 h-30 bg-[#000] bg-cover bg-center mask-[url('/stamp.png')] [-webkit-mask-image:url('/stamp.png')] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-contain [-webkit-mask-size:contain] mask-center [-webkit-mask-position:center]" /> */}
            <div className="absolute w-10 h-10 bg-[url('/test-image-krishiv.JPG')] bg-cover bg-center rounded-full" /> 
        </div>
        <div className="isolate w-full rounded-xl bg-black/5 shadow-xl drop-shadow-white ring-2 ring-white/10 backdrop-blur-md">Hello
        <p>hfascla</p>
        <p>hfascla</p>
        <p>hfascla</p>
        <p>hfascla</p>
        </div>
      </div>
        <div>
              <Marquee items={['This is confidential for you keep it within family']} />
        </div>
      </div>
    </section>
  );
}