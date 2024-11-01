import FAQItem from "@/components/FAQItem";
import { FAQList } from "@/components/FAQDoc";

const Faq = () => {
  return (
    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full px-24 pb-20">
      <h1 className="text-6xl text-center py-4 pb-8">
        Frequently Asked Questions
      </h1>
      <p className="pb-16 text-center text-2xl px-20">
        Cant find what you're looking for?{" "}
        <a href="mailto:meaningfulendcare@gmail.com" className="underline">
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
