
import { useState } from 'react';

const questions = [
  {
    question: 'How can I place an order?',
    answer: 'You can browse our products, select your favorite item, and add it to your shopping bag.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes, CozyCart offers delivery for orders placed through our store.',
  },
  {
    question: 'Can I return a product?',
    answer: 'Return requests can be made according to our return policy.',
  },
  {
    question: 'How can I contact CozyCart?',
    answer: 'You can contact us through the Contact Us form on our website.',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-[7%] py-20 max-md:px-[5%]">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold tracking-[2px] text-[#7898a5]">
            NEED HELP?
          </p>

          <h2 className="text-4xl font-semibold text-[#252a30]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                className="flex w-full items-center justify-between gap-4 text-left font-medium text-[#252a30]"
              >
                {item.question}

                <span className="text-xl text-[#7898a5]">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-sm leading-7 text-[#73777b]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
