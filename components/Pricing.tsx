import React from 'react';
import { motion } from 'framer-motion';
import { CheckmarkIcon } from './IconComponents';

const includedFeatures = [
  '6 kompleksowych modułów wideo',
  'Dostęp do kursu na zawsze',
  'Praktyczne zadania i arkusze',
  'Dostęp do zamkniętej społeczności',
  'Regularne aktualizacje treści',
  'Certyfikat ukończenia',
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-500/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Jedna inwestycja. Wiedza na całe życie.</h2>
            <p className="mt-4 text-lg text-gray-400">Zdobądź wszystkie narzędzia potrzebne do osiągnięcia wolności finansowej w jednej, prostej ofercie.</p>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
                <ul role="list" className="space-y-4 text-left">
                    {includedFeatures.map((feature) => (
                        <li key={feature} className="flex items-center">
                        <CheckmarkIcon className="h-6 w-6 text-blue-500 mr-3" aria-hidden="true" />
                        <span className="text-gray-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
                <p className="text-6xl font-extrabold text-white">1999 zł</p>
                <p className="mt-2 text-base text-gray-400">Jednorazowa opłata</p>
                <a
                    href="#"
                    className="mt-8 inline-block w-full md:w-auto px-10 py-5 text-xl font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                >
                    Zacznij Inwestować
                </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;