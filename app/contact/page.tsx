import Image from "next/image";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-screen w-full">
      <p className="px-14 text-3xl text-center pt-32">
        Let's work together! Contact me at meaningfulendcare@gmail.com to
        schedule a free 30 minute consultation.
      </p>
      <div className="pr-8 justify-self-center">
        <Image
          src={"/images/walking.jpg"}
          alt="two ladys walking in the park"
          width={400}
          height={500}
          quality={100}
          className="rounded-sm"
        />
      </div>
    </div>
  );
};

export default Contact;
