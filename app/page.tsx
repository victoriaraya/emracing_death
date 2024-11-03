import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)]">
      <div className="flex w-full h-screen pt-10">
        <div className="pl-12 w-full">
          <Image
            src={"/images/flower3_cropped2.jpg"}
            alt="flower"
            width={550}
            height={400}
            quality={100}
            className="h-5/6 rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center md:text-6xl text-4xl text-[#45260C] pt-20 px-8 pb-32">
            Family and patient centered support for end-of-life transitions
          </h1>
          <p className="relative group text-3xl text-[#45260C]">
            <Link href={"/services"}>Learn more about our services</Link>
            <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#45260C] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </p>
        </div>
      </div>
      <div className=" h-full flex-col items-center justify-items-center text-left px-36 text-[#4F7641]">
        <h1 className="text-5xl pb-8 text-center">
          What is an End-of-Life Doula?
        </h1>
        <p className="text-xl leading-loose">
          A Death Doula, or End-of-Life Doula, is a trained, non-medical
          professional who supports individuals and families through the dying
          process, similar to how a birth doula assists during pregnancy and
          through the birthing process. They offer help with planning,
          organizing, and providing resources, including creating care plans,
          facilitating important conversations, and supporting legacy projects.{" "}
          <br />
          <br />
          While we can work alongside hospice and palliative care teams, our
          services are non-medical. We also provide emotional, spiritual, and
          social support before and just after death, helping families make
          decisions and ensuring a meaningful, peaceful end-of-life experience.{" "}
          <br />
          <br />
          By offering compassionate care that is tailored to the individual's
          values and preferences, death doulas can help individuals and their
          families navigate the complexities of the dying process with dignity
          and respect.
        </p>
      </div>
      <div className="relative h-full flex items-center justify-items-center text-left pl-14 pr-14 py-32 text-[#4F7641]">
        <div className="flex-col">
          <h1 className="text-5xl pb-10 pr-8 text-center">
            Benefits of an End-of-Life Planner
          </h1>
          <ul className="text-xl list-disc pr-16 pl-5 leading-loose">
            <li className="pb-6">
              Facilitating end-of-life planning to prepare practicalities, ease
              anxiety, enhance comfort, and promote a personalized passage{" "}
            </li>
            <li className="pb-6">
              {" "}
              Supporting patients and their loved ones with resources for
              end-of-life arrangements{" "}
            </li>
            <li className="pb-6">
              {" "}
              Providing resources to finalize end-of-life plans, ensuring any
              necessary tasks are completed for greater peace of mind and a
              smoother transition{" "}
            </li>
            <li className="pb-6">
              Serving as a supportive presence for clients and loved ones
              throughout the end-of-life process{" "}
            </li>
            <li className="pb-6">
              Enhancing quality-of-life moments for clients and loved ones by
              offering resources, support, and guidance throughout the
              end-of-life planning process{" "}
            </li>
          </ul>
        </div>
        <Image
          src={"/images/flower_hand.jpg"}
          alt="flower in hands"
          width={350}
          height={500}
          quality={100}
          className="rounded-lg mt-24"
        />
      </div>
      <h1 className="text-[#45260C] text-center text-4xl pb-4 pt-16">
        Contact us today to schedule a free 30 minute consultation
      </h1>
      <h2 className="text-[#45260C] text-center text-3xl pb-24">
        <a href="mailto:meaningfulendcare@gmail.com" className="relative group">
          meaningfulendcare@gmail.com
          <span className="absolute left-1/2 bottom-[-5px] w-0 h-[2px] bg-[#45260C] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
      </h2>
      <footer className="border-t-2 border-[#F4E9E1] text-[#2c393a] py-8 flex gap-20 justify-center text-2xl">
        <a
          href="https://doulagivers.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="doulagivers"
        >
          <Image
            src={"/images/doulagivers_logo.png"}
            alt="doulagivers logo"
            width={100}
            height={100}
            quality={100}
            className="rounded-lg"
          />
        </a>
        <a
          href="https://www.nedalliance.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="neda"
        >
          <Image
            src={"/images/neda_logo.png"}
            alt="neda logo"
            width={100}
            height={100}
            quality={100}
            className="rounded-lg"
          />
        </a>
      </footer>
    </div>
  );
}
