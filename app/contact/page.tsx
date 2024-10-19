import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full">
      <h1 className="text-6xl text-center py-4 pb-16">Contact</h1>
      <p>
        Let's work together! Contact me at .... to schedule a free 30 minute
        consultation.
      </p>
      <Image
        src={"/images/walking.jpg"}
        alt="two ladys walking in the park"
        width={400}
        height={500}
        quality={100}
      />
    </div>
  );
};

export default Contact;
