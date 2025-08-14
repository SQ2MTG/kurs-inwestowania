import React from 'react';
import { motion } from 'framer-motion';
import { GrowthIcon, BookOpenIcon, CommunityIcon, CheckmarkIcon } from './IconComponents';

const featuresData = [
  {
    icon: <BookOpenIcon className="h-10 w-10 text-blue-500" />,
    title: 'Dla Początkujących',
    description: 'Zbudowany od podstaw, idealny dla osób bez doświadczenia. Prowadzimy Cię za rękę przez każdy etap.'
  },
  {
    icon: <GrowthIcon className="h-10 w-10 text-blue-500" />,
    title: 'Praktyczna Wiedza',
    description: 'Konkretne strategie i analizy, a nie sucha teoria. Uczysz się przez działanie na realnych przykładach.'
  },
  {
    icon: <CheckmarkIcon className="h-10 w-10 text-blue-500" />,
    title: 'Dostęp na Zawsze',
    description: 'Ucz się we własnym tempie. Wracaj do materiałów i aktualizacji kiedykolwiek zechcesz, bez ograniczeń.'
  },
  {
    icon: <CommunityIcon className="h-10 w-10 text-blue-500" />,
    title: 'Wsparcie Społeczności',
    description: 'Dołącz do ekskluzywnej grupy kursantów i ekspertów. Wymieniaj się doświadczeniami i zdobywaj nową wiedzę.'
  }
];

const Features: React.FC = () => {
    
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };


  return (
    <section className="py-24 sm:py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Wszystko, czego potrzebujesz.</h2>
            <p className="mt-4 text-lg text-gray-400">Zaprojektowany, by dać Ci kompletną przewagę na rynku.</p>
        </div>
        <motion.div 
            className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-gray-800 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;