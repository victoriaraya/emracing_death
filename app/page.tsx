import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#4F7641]">
      <div className="relative w-full h-screen">
        <Image
          src={"/images/flower_cropped2.jpg"}
          alt="flower"
          width={550}
          height={400}
          quality={100}
          className="absolute top-0 left-0 w-full h-screen"
        />
        <h1 className="absolute inset-0 flex flex-col text-center items-center justify-center px-3 md:text-7xl text-4xl text-[#341C09]">
          Family and patient centered support for end-of-life transitions
        </h1>
      </div>
      <div className="h-full flex-col items-center justify-items-center text-left px-28 py-16 text-[#CDBA9D]">
        <h1 className="text-4xl pb-2">What is an End-of-Life Doula?</h1>
        <p className="text-xl">
          A Death Doula/End-of-Life Doula is a non-medical, trained professional
          who provides support via education, organization, planning and
          resources for end of life similar to the aide a birth doula provides
          during pregnancy and through the birthing process. <br />
          The role of a Death Doula is t oassist families prior to, throughout
          and after the dying process. This assistance may include, but is not
          limited to, helping families create plans and have conversations prior
          to a person entering the end-of-life stages, creating a cofort and
          care plan for end-of-life, assigning a person to carry out healthcare
          decisions, estate planning and legacy projects. <br />
          We can work alongside a hospice and palliative care team, but we offer
          a separate non medical service. <br />
          A few other things death doulas can help with is providing spiritual,
          emotional and social support before and just after death. <br />
          Death doulas provide emotional support, assist with decision-making
          and help create a peaceful and meaningful end-of-life experience. By
          offering compassionate care that is tailored to the individual's
          values and preferences, death doulas can help individuals and their
          families navigate the complexities of the dying process with dignity
          and respect.
        </p>
      </div>
      <div className="h-full flex-col items-center justify-items-center text-left px-28 py-16 bg-[#CDBA9D] text-[#4F7641]">
        <h1 className="text-4xl pb-2">Benefits of an End-of-Life Planner:</h1>
        <ul className="text-xl list-disc">
          <li>
            Facilitating end-of-life planning to help prepare practicalities,
            ease anxiety, aid in comfort and promote a personalized passage.{" "}
          </li>
          <li>
            {" "}
            Increasing quuality of life moments for clients and loved ones by
            providing resources and support to client and loved ones through the
            end-of-life journey.{" "}
          </li>
          <li>
            {" "}
            Supporting the patient and their loved ones with resources regarding
            end-of-life arrangements.{" "}
          </li>
          <li>
            {" "}
            Providing with resources to bring closure to end of life planning,
            ensure the support to have any tasks required performed for greater
            peace of mind and to ease the transition.{" "}
          </li>
          <li>
            Serving as support to the client and loved ones through the
            end-of-life journey.{" "}
          </li>
          <li>
            Increasing quality of life moments for clients and loved ones as the
            end-of-life planner serves as a resource to facilitate.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
