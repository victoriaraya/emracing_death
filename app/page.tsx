import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#588448]">
      <div>
        <Image
          src={"/images/flower.jpg"}
          alt="flower"
          width={550}
          height={400}
          quality={100}
          className="relative top-0 left-0 w-full h-screen"
        />
        <h1 className="absolute inset-0 flex flex-col text-center items-center justify-center text-7xl">
          Family and patient centered support for end-of-life transitions
        </h1>
      </div>
      <div className="h-screen"> Why a death doula </div>
    </div>
  );
}
