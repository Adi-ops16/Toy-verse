import React from "react";

const faqs = [
    {
        question: "How do I create an account?",
        answer: "Click the 'Sign Up' button in the top right corner and follow the registration process.",
    },
    {
        question: "Is my information secure?",
        answer: "Yes! ToyVerse uses Firebase Authentication to keep your data safe and protected.",
    },
    {
        question: "Can I view toys without signing in?",
        answer: "Absolutely! You can browse toys freely. Logging in gives you access to more features.",
    },
    {
        question: "How do I add items to my cart?",
        answer: "Open any toy page and click the 'Add to Cart' button to save your favorite items.",
    },
];

const FAQ = () => {
    return (
        <div className="max-w-6xl mx-auto mb-5 md:mb-20 px-6 py-12 bg-linear-to-br from-[#FFFBEA] via-[#FFF7E0] to-[#E6DAA8] rounded-2xl shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6f4e37] mb-10">
                Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group bg-white/70 rounded-xl shadow border border-[#E1AD01]/20 p-4"
                    >
                        <summary className="cursor-pointer font-semibold text-[#6f4e37] group-open:text-[#E1AD01] text-lg">
                            {faq.question}
                        </summary>

                        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
