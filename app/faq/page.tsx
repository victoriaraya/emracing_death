import FAQItem from "@/components/FAQItem";
import { FAQList } from "@/components/FAQDoc";

const Faq = () => {
  return (
    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full px-5 sm:px-24 pb-20">
      <h1 className="text-4xl sm:text-6xl text-center py-8 pb-8">
        Frequently Asked Questions
      </h1>
      <p className="pb-3 sm:pb-16 text-center text-xl sm:text-2xl sm:px-20">
        Can't find what you're looking for?{" "}
        <a
          href="mailto:meaningfulendcare@gmail.com"
          className="underline underline-offset-4"
        >
          Please email us!
        </a>
      </p>
      <div className="space-y-4">
        {FAQList.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
