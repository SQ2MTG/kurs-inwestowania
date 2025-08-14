import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Module } from '../types';
import { CheckmarkIcon, ChevronDownIcon } from './IconComponents';

const modulesData: Module[] = [
  {
    title: "Moduł 1: Fundamenty Inwestowania",
    description: "Zrozum kluczowe pojęcia, które stanowią podstawę inteligentnego inwestowania.",
    points: ["Czym jest inwestowanie, a czym spekulacja?", "Rodzaje aktywów: akcje, obligacje, ETFy", "Zasada procentu składanego w praktyce", "Określanie celów i horyzontu inwestycyjnego"]
  },
  {
    title: "Moduł 2: Analiza Rynku i Aktywów",
    description: "Naucz się, jak oceniać potencjalne inwestycje i podejmować świadome decyzje.",
    points: ["Analiza fundamentalna vs. techniczna", "Czytanie sprawozdań finansowych spółek", "Kluczowe wskaźniki (P/E, P/B, ROE)", "Identyfikacja trendów rynkowych"]
  },
  {
    title: "Moduł 3: Budowa i Zarządzanie Portfelem",
    description: "Skonstruuj zdywersyfikowany portfel dopasowany do Twojego profilu ryzyka.",
    points: ["Alokacja i dywersyfikacja aktywów", "Rebalancing portfela", "Wybór odpowiedniego brokera", "Optymalizacja podatkowa inwestycji"]
  },
  {
    title: "Moduł 4: Psychologia Inwestora",
    description: "Opanuj emocje, które są największym wrogiem Twoich zysków.",
    points: ["Pułapki behawioralne: FOMO i FUD", "Budowanie dyscypliny i cierpliwości", "Jak reagować na kryzysy i hossy?", "Tworzenie własnego planu inwestycyjnego"]
  },
  {
    title: "Moduł 5: Strategie Zaawansowane",
    description: "Poznaj techniki, które pomogą Ci zmaksymalizować zwroty.",
    points: ["Inwestowanie w wartość (Value Investing)", "Inwestowanie we wzrost (Growth Investing)", "Strategie pasywne i aktywne", "Wykorzystanie opcji i instrumentów pochodnych (wprowadzenie)"]
  },
  {
    title: "Moduł 6: Twoje Pierwsze 100 000 zł",
    description: "Praktyczny plan działania krok po kroku, aby osiągnąć swój pierwszy duży cel finansowy.",
    points: ["Mapowanie drogi do celu", "Monitorowanie postępów i kamienie milowe", "Skalowanie portfela po osiągnięciu celu", "Co dalej? Plan na pierwszy milion"]
  }
];

const AccordionItem: React.FC<{ module: Module; isOpen: boolean; onClick: () => void }> = ({ module, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button onClick={onClick} className="w-full text-left py-6 flex justify-between items-center">
        <span className="text-xl md:text-2xl font-semibold text-gray-200">{module.title}</span>
        <ChevronDownIcon className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-6 pr-6">
            <p className="text-gray-400 mb-4">{module.description}</p>
            <ul className="space-y-2">
                {module.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                        <CheckmarkIcon className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
      </motion.div>
    </div>
  );
};


const Modules: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Program Kursu</h2>
          <p className="mt-4 text-lg text-gray-400">Kompleksowa ścieżka od podstaw do zaawansowanych strategii.</p>
        </div>
        <div>
          {modulesData.map((module, index) => (
            <AccordionItem 
              key={index}
              module={module}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;