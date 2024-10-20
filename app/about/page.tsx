import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-14 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full px-6 pb-4">
      <div className="flex">
        <div className="flex-col">
          <h1 className="text-4xl text-left pt-4 pb-8">
            About Meaningful EndCare
          </h1>
          <div className="text-lg pb-32">
            <p>
              {" "}
              I've no doubt you've heard Antoine de Saint-Exupery's quote, 'A
              goal without a plan in just a wish.' The quote above empasizes the
              importance of having a clear plan to achieve a goal. By creating
              end of life plans ahead, ensures that your wishes are respected,
              providing clear guidance and reducing the potential for family
              conflicts and alleviates the burden on the loved ones during an
              emotionally challenging time. Making an end of life arrangement
              plan helps prevents unexpected financial burdens on the loved
              onesand knowing that you have a plan in place can bring peace of
              mind to you and your family.{" "}
            </p>
            <br />
            <p>
              Many people have not thought about the arrangement of end of life
              and feel overwhelmed about where to start the process. I hope to
              help ease some of the most common questions and unsurety while
              caring for a loved one who is going through the ding process.{" "}
            </p>
            <br />
            <p>
              My work starts when people are healthy, I help them start to think
              about wha t the end of their lives might look like and help them
              create a plan for doing so; when someone is looking at the end of
              their lives, meaning there's a terminal illness or they're getting
              very elderly, I help them develop a personalized plan about what
              would be a peaceful dying for them; after a death, I help families
              wrap up the affairs of a life.
            </p>{" "}
            <br />
            <p>
              The goal of Meaningful EndCare is to provide holistic,
              compassionate care that addresses the physical, emotional,
              spiritual and practical needs of the dying person and their loved
              ones.{" "}
            </p>
            <br />
            <p>
              As a certified End of Life Death Doula, as a hospice nurse, I do
              possess the personal strengths and skills that are valuable for
              being an end-of-life doula.{" "}
            </p>
          </div>
        </div>
        <Image
          src={"/images/couple.jpg"}
          alt="elderly couple"
          width={400}
          height={500}
          quality={100}
          className="pt-4 pl-4"
        />
      </div>
      <div className="grid grid-cols-2">
        <Image
          src={"/images/holding_hands.jpg"}
          alt="holding hands"
          width={500}
          height={600}
          quality={100}
          className="row-span-2 ml-4 mt-10"
        />
        <h1 className="text-4xl text-left mr-10">About Me</h1>
        <div className="text-lg">
          <p>
            I have always been deeply fascinated by the profound impact that
            compassionate end-of-life support can have on individuals and their
            loved ones. Through personal experiences of over 15 years as a
            hospice and palliative care nurse, I have come to understand the
            importance of hollistic care and the need for compassionate guidance
            during this significant transition.{" "}
          </p>
          <br />{" "}
          <p>
            When death happened, families were not mentally, emotionally and
            financially prepared. My own life experiences have led ME to an
            expanded curiosity about what is possible for end-of-life care.
            Making a formal plan to help the guess work out of what you want and
            communicating that with your loved ones may actually alleviate some
            of the stress that comes with death; like funeral plans, body
            disposition and even what outfit you want to wear.{" "}
          </p>{" "}
          <br />{" "}
          <p>
            Going through end-of-life arrangements is very emotional and the
            end-of-life death doula help the patient and their loved ones find
            peace and ease their anxiety and aid in comfort to promote a
            personalized passage.{" "}
          </p>{" "}
          <br />
          <p>
            I am a certified death doula and certified in advance healthcare
            planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
