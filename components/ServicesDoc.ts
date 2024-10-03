const ServicesList = [
  {
    name: "Companion",
    description:
      "Serving the dying and dying person's loved ones. The End-of-Live Doula lends a supportive presence and provides comforting space for the dying patient and their loved ones to decrease as much stress as possible during the end-of-life process. Listening: offering a non-judgemental ear for fears, hopes and memories and helping to facilitate unresolved issues. Guidance: helping navigate emotional responses to gyign and death, including grief and fear. A non-medical companion: A medical care liason's goal is to help a person understand the ever-changing and increasingly challenging medical care system and anticipate the need of the expected end-of-life signs/symptoms and education of interventions as appropriate.",
  },
  {
    name: "Practical Supports",
    description:
      "Care Planning: assisting in creating an end-of-life care plan that aligns with the person's wishes. Coordination: working with healthcare providers, hospice agencies and other care professionals to ensure cohesive care. Planning the vigil: helping plan for the last 24-48 hours of the person's life. End-of-Life Planning: organizing and coordinating the wake, funeral and eulogy. Eulogy: assisting with writing the eulogy and facilitating resources.",
  },
  {
    name: "Physical Comforts",
    description:
      "Comfort measures: suggesting ways to increase physical comfort such as arranging pillows, playing music, adjusting lights and coordinating visitors. Vigil sittings: beind present during the final hours or days to provide continuous support and care.",
  },
  {
    name: "Spiritual Support",
    description:
      "Rituals and ceremonies: assisting in the creation and facilitation of meaningful rituals or spiritual practices. Life Review: helping individuals reflect on their life, achievements and relationships by documenting their meaningful life stories in tangible mementos to leave behind for their loved ones. ",
  },
  {
    name: "Educational Support",
    description:
      "Information: educating the patient and fammily about what to expect during the dying process, identifying bothersome symptom issues for addressing with the hospice/healthcare team. Suggesting interventions for comfort and providing hands-on teaching. Resources: providing information on legal, financial and funeral planning.",
  },
  {
    name: "Advocacy",
    description:
      "Patient Advocacy: ensuring the individual's wishes are respected and followed by healthcare providers and family members. Advance Directives: assisting in the creation of advance directives for healthcare and refferals for other legal documents to ensure the person's end-of-life wishes are documented and honored.",
  },
  {
    name: "Post-Death Support",
    description:
      "Acting as a liaison with involved agencies and parties. Immediate Post-Death care: Guiding the family through immediate actions after death, including body care and disposition options. Grief support: Offering continued emotional support and connecting the family with grief counseling or a support group",
  },
  {
    name: "Continuity of Care",
    description:
      "Death doulas often work in collaboration with other healthcare providers, ensuring seamless transitions and continuity of care. They bridge the gap between medical professionals and the emotional needs of the dying person and their family.",
  },
];

const getService = (name) => {
  let service = ServicesList.find((service) => service.name === name);

  return service;
};

export { ServicesList, getService };
