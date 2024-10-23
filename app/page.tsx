import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)]">
      <div className="flex w-full h-screen pt-5 ">
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
      <div className=" h-full flex-col items-center justify-items-center text-left px-28 text-[#4F7641]">
        <h1 className="text-5xl pb-8 text-center">
          What is an End-of-Life Doula?
        </h1>
        <p className="text-xl">
          A Death Doula/End-of-Life Doula is a non-medical, trained professional
          who provides support via education, organization, planning and
          resources for end of life, similar to the aide a birth doula provides
          during pregnancy and through the birthing process. <br />
          <br />
          Their role is to assist families prior to, throughout and after the
          dying process. This assistance may include, but is not limited to,
          helping families create plans and have conversations prior to a person
          entering the end-of-life stages, creating a comfort and care plan for
          end-of-life, assigning a person to carry out healthcare decisions,
          estate planning and legacy projects. <br />
          <br />
          We can work alongside a hospice and palliative care team, but we offer
          a separate non-medical service. A few other things we can help with is
          providing spiritual, emotional and social support before and just
          after death. <br />
          <br />
          Death doulas provide emotional support, assist with decision-making
          and help create a peaceful and meaningful end-of-life experience. By
          offering compassionate care that is tailored to the individual's
          values and preferences, death doulas can help individuals and their
          families navigate the complexities of the dying process with dignity
          and respect.
        </p>
      </div>
      <div className="relative h-full flex items-center justify-items-center text-left pl-14 pr-14 py-32 text-[#4F7641]">
        {/* <Image
          src={"/images/border2.png"}
          alt="border"
          width={2000}
          height={100}
          quality={100}
          className="absolute top-0 left-0 w-full -mt-5"
        /> */}
        <div className="flex-col">
          <h1 className="text-5xl pb-10 pr-8 text-center">
            Benefits of an End-of-Life Planner
          </h1>
          <ul className="text-xl list-disc pr-16 pl-5">
            <li className="pb-6">
              Facilitating end-of-life planning to help prepare practicalities,
              ease anxiety, aid in comfort and promote a personalized passage{" "}
            </li>
            <li className="pb-6">
              {" "}
              Increasing quality of life moments for clients and loved ones by
              providing resources and support through the end-of-life journey{" "}
            </li>
            <li className="pb-6">
              {" "}
              Supporting the patient and their loved ones with resources
              regarding end-of-life arrangements{" "}
            </li>
            <li className="pb-6">
              {" "}
              Providing with resources to bring closure to end of life planning,
              ensure the support to have any tasks required performed for
              greater peace of mind and to ease the transition{" "}
            </li>
            <li className="pb-6">
              Serving as support to the client and loved ones through the
              end-of-life journey{" "}
            </li>
            <li className="pb-6">
              Increasing quality of life moments for clients and loved ones as
              the end-of-life planner serves as a resource to facilitate{" "}
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
        Contact us to schedule a free 30 minute consultation
      </h1>
      <h2 className="text-[#45260C] text-center text-3xl pb-24">
        kjskdsj@gmail.com
      </h2>
      <footer className="border-t-2 border-[#F4E9E1] text-[#2c393a] py-10 flex gap-20 justify-center text-2xl">
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
        {/* <p className="relative group">
          <Link href={"/services"}>See our services</Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#2c393a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </p>
        <p className="relative group">
          <Link href={"/contact"}>Contact us</Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#2c393a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </p> */}
      </footer>
    </div>
  );
}
