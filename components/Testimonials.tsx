import React from 'react';
import { motion } from 'framer-motion';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Ten kurs to absolutny przełom. Zaczynałem od zera, a teraz pewnie zarządzam swoim portfelem. Wiedza podana w sposób prosty i konkretny.",
    name: "Anna Kowalska",
    title: "Grafik Komputerowy",
    avatarUrl: "https://picsum.photos/seed/anna/100/100"
  },
  {
    quote: "Myślałem, że inwestowanie jest tylko dla rekinów finansjery. Ten kurs udowodnił, że każdy może to robić skutecznie. Polecam w 100%!",
    name: "Piotr Nowak",
    title: "Programista",
    avatarUrl: "https://picsum.photos/seed/piotr/100/100"
  },
  {
    quote: "Najlepsza inwestycja, jaką zrobiłam. Wiedza z tego kursu zwróciła mi się już wielokrotnie. Moduł o psychologii to czyste złoto.",
    name: "Katarzyna Wiśniewska",
    title: "Właścicielka małej firmy",
    avatarUrl: "https://picsum.photos/seed/kasia/100/100"
  }
];

const Testimonials: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

  return (
    <section className="py-24 sm:py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Nie wierz nam na słowo.</h2>
          <p className="mt-4 text-lg text-gray-400">Zobacz, co mówią nasi kursanci.</p>
        </div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
                key={index} 
                className="bg-gray-800/50 p-8 rounded-2xl flex flex-col"
                variants={itemVariants}
            >
              <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full" src={testimonial.avatarUrl} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;