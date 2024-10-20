const ServicesList = [
  {
    name: "Companion Services",
    description: [
      "Emotional Support: Offering a non-judgmental ear for fears, hopes, and memories, helping resolve emotional issues.",
      "Guidance: Assisting with grief, fear, and other emotional responses to dying.",
      "Medical Liaison: Helping patients and families navigate medical systems and end-of-life care.",
    ],
    imageName: "",
  },
  {
    name: "Practical Supports",
    description: [
      "Care Planning: Creating an end-of-life plan aligned with personal wishes.",
      "Coordination: Collaborating with healthcare providers and hospice services for cohesive care.",
      "Vigil Planning: Organizing the final 24-48 hours of life.",
      "End-of-Life Planning: Arranging for the wake, funeral, and writing eulogies.",
    ],
    imageName: "",
  },
  {
    name: "Physical Comforts",
    description: [
      "Comfort Measures: Providing suggestions to increase physical comfort, such as adjusting lights and music.",
      "Vigil Sittings: Being present during the final hours for continuous support.",
    ],
    imageName: "physical_comfort.jpg",
  },
  {
    name: "Spiritual Support",
    description: [
      "Rituals and Ceremonies: Facilitating meaningful rituals or spiritual practices.",
      "Life Review: Helping document life stories for loved ones.",
    ],
    imageName: "",
  },
  {
    name: "Educational Support",
    description: [
      "Information: Educating on the dying process, symptoms, and comfort interventions.",
      "Resources: Providing guidance on legal, financial, and funeral planning.",
    ],
    imageName: "",
  },
  {
    name: "Advocacy",
    description: [
      "Patient Advocacy: Ensuring the individual's wishes are respected.",
      "Advance Directives: Assisting with healthcare directives and legal documents.",
    ],
    imageName: "",
  },
  {
    name: "Post-Death Support",
    description: [
      "Immediate Guidance: Assisting families with immediate actions after death.",
      "Grief Support: Providing emotional support and referrals to grief counseling.",
    ],
    imageName: "",
  },
  {
    name: "Continuity of Care",
    description: [
      "Collaborative Care: Working with other healthcare providers to ensure seamless transitions and ongoing emotional support.",
    ],
    imageName: "",
  },
];

const getService = (name) => {
  let service = ServicesList.find((service) => service.name === name);

  return service;
};

export { ServicesList, getService };
