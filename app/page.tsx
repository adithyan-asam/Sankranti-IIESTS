import Image from "next/image";

export default function Page() {
  return (
    <div
      className="
      pt-14 min-h-screen 
      bg-black
      "
    >
      <div
        className="
    absolute top-0 md:top-[60px] left-0 
    w-full max-w-full 
    flex justify-center gap-0
    overflow-hidden pointer-events-none z-0
  "
      >
        <div className="flex w-full max-w-[1400px] justify-center ">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`
                flex-shrink justify-center
                ${i >= 3 ? "hidden md:flex" : "flex"}  
                basis-1/2 md:basis-[16%]             
              `}
            >
              <Image
                src="/decor/garland3.png"
                alt="garland"
                width={250}
                height={250}
                className="
                w-full h-auto 
                max-h-[200px] md:max-h-[200px]
                object-contain
              "
              />
            </div>
          ))}
        </div>
      </div>
      <main className="relative flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
       
      </main>
    </div>
  );
}