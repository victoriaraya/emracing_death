import Image from "next/image";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-6 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full w-full px-14 pb-20">
      <p className="text-3xl text-center leading-loose self-center">
        Let's work together! Contact me at{" "}
        <a href="mailto:meaningfulendcare@gmail.com" className="relative group">
          meaningfulendcare@gmail.com
          <span className="absolute left-1/2 bottom-[-5px] w-0 h-[2px] bg-[#4F7641] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
        <br />
        to answer any questions you may have or to schedule a free 15 minute
        consultation.
      </p>
      <Image
        src={"/images/walking.jpg"}
        alt="two ladys walking in the park"
        width={450}
        height={500}
        quality={100}
        className="justify-self-center self-center rounded-sm mt-10"
      />
    </div>
  );
};

export default Contact;
