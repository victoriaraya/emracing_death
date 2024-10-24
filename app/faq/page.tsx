"use client";
import { use, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full px-16">
      <h1 className="text-6xl text-center py-4 pb-8">
        Frequently Asked Questions
      </h1>
      <p className="pb-16 text-center text-2xl px-20">
        Cant find what you're looking for?{" "}
        <a href="mailto:sjsk@g.com" className="underline">
          Please email us!
        </a>
      </p>
      <h2 className="text-3xl pb-4 flex">
        Are there fees for your services? Do you take insurance?{" "}
        <button
          className="justify-self-end"
          openElement={0}
          onClick={toggleQuestion}
        >
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </h2>
      <p className={isOpen ? "text-xl pb-20" : "text-xl pb-20 hidden"}>
        Yes there is a charge. End-of-life doula services are not covered under
        insurance policies. Services are private pay, similar to other
        companion/caregiver type services. Fees are affordable and are charged
        hourly. There are discounts available if you choose multiple services.
        Payment plans are available as well. I can work with all budgets. Please
        contact me today to schedule a free consultation.
      </p>
      <h2 className="text-3xl pb-4">
        What is the difference between a hospice volunteer and an end-of-life
        doula?
        <button className="justify-self-end" onClick={toggleQuestion}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </h2>
      <p className={isOpen ? "text-xl pb-20" : "text-xl pb-20 hidden"}>
        The death doula's service do not take the place of hospice personnel;
        rather they complement other services that a dying person and their
        family may be receiving buy providing additional support and community
        resources for end of life care for the patient and their families. There
        are laws governing what death doulas can and cannot do. <br />
        Hospice volunteers are mandated by Medicare law and the hospice care
        providers' hours are regulated by Medicare. Medicare law requires that
        volunteer hours equal at least five percent of the hospice provider's
        total patient care hours. An End-of-life Doula can spend as much time
        with a patient or family as they choose. We can do almost everything to
        assist with the care of your loved ones except give medication or any
        form of medical care as doulas are not medical personnel.
      </p>
      <h2 className="text-3xl pb-4">
        How does Death Doula support differ from the support provided by
        hospice?
      </h2>
      <p className="text-xl pb-20">
        Death doulas are different from hospice or palliative care because they
        do not provide medical care or participate in physician-assisted death.
        Instead, death doulas work in conjunction with hospice programs to
        provide interpersonal, social, logistical and spiritual guidance that
        complements the care they receive in hospice. End-of-life Doula services
        can enhance traditional care by offering an additional layer of support
        and are available before, during and any time after death. We are here
        as long as the family needs us.
      </p>
      <h2 className="text-3xl pb-4">
        Can an End-of-Life Doula work with hospice, hospice staff, or Home
        Healthcare Aides in the care of a loved one?
      </h2>
      <p className="text-xl pb-20">
        Yes. Patients are their families often need greater support in the final
        days of life. End-of-life doulas are not employed by the hospice
        agencies and often do not face the same time constraints as hospice
        providers and can stay with the patient longer. An end-of-life doula can
        notify the hospice team of any changes in the patient so that hospice
        staff can assess and update the care plan for maximum daily comfort of
        the patient. They can help hospices' efforts to improve health equity in
        hard to reach settings while also improving quality in the last days of
        life by providing a layer of support and helping prepare people for
        death by opening up conversations about it, as well as providing comfort
        and resources. It is important to remember end-of-life doulas are not
        employed by hospice.
      </p>
      <h2 className="text-3xl pb-4">
        Who regulates or organizes regulating standards for the End-of-life
        Doula profession?
      </h2>
      <p className="text-xl pb-20">
        {`National End-of-life Doula Alliance (NEDA) has set a national
        practicum with Core Competencies for the practice of professional
        End-of-life Doulas. The end-of-life doulas who pass the proficiency exam receive the NEDA National Credential and will be listed as "NEDA Proficient" in the NEDA directory.`}
      </p>
      <h2 className="text-3xl pb-4">What is End-of-Life planning?</h2>
      <p className="text-xl pb-20">
        Plans made for you by you to help your loved ones at the end of your
        life. Going through the end-of-life arrangements is very emotional and
        as an end of life death doula helping the patient and their loved ones
        find peace and ease their anxiety and aid in comfort to promote a
        personalized passage.
      </p>
      <h2 className="text-3xl pb-4">
        What about funeral assistance, vigils and other arrangements?
      </h2>
      <p className="text-xl pb-20">
        An End-of-life Doula can help with many things from the beginning stages
        of the dying process to helping the patients and failies as death
        becomes more imminent. We can also help with vigils at time of death,
        after death care, understanding and honoring grief and finally recovery
        of life after loss. We are not funeral professionals, there are things
        we cannot do like grooming your loved one or officiate a funeral BUT we
        are able to provide resources for mortuary and burial service.
      </p>
    </div>
  );
};

export default Faq;
