
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Por quanto tempo tenho acesso ao conteúdo?",
      answer: "Você tem acesso vitalício a todo o conteúdo após a compra.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos todos os cartões de crédito principais, PIX e outras formas de pagamento seguras.",
    },
    {
      question: "Posso pedir reembolso se não ficar satisfeito?",
      answer: "Sim, oferecemos garantia de devolução do dinheiro em 30 dias se você não ficar completamente satisfeito.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h3>
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
