
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How long do I have access to the content?",
      answer: "You have lifetime access to all content after purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and other secure payment methods.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
