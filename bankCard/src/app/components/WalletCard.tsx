"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Card {
  id: number;
  title: string;
  color: string;
}

const WalletCard = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const cards: Card[] = [
    { id: 1, title: "Credit Card", color: "bg-blue-100" },
    { id: 2, title: "Debit Card", color: "bg-green-100" },
    { id: 3, title: "Membership Card", color: "bg-purple-100" },
  ];

  return (
    <div className="relative mt-10 h-72 w-[350px] rounded-xl bg-gradient-to-br from-orange-200 to-orange-100 p-5 shadow-xl">
      <h2 className="text-lg font-bold text-orange-900 mb-4">My Wallet</h2>

      {/* Wallet mouth */}
      <div className="relative h-16 w-full overflow-hidden rounded-lg bg-orange-400 shadow-inner">
        {/* Animated cards inside */}
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            layout
            initial={{ x: 0, rotate: 0 }}
            animate={{
              x: selectedCardId === card.id ? 150 : 0,
              rotate: selectedCardId === card.id ? 5 : 0,
              scale: selectedCardId === card.id ? 1.05 : 1,
              zIndex: selectedCardId === card.id ? 10 : 1,
              opacity:
                selectedCardId === null || selectedCardId === card.id ? 1 : 0.3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: index * 0.1,
            }}
            className={`absolute top-0 left-1/2 -translate-x-1/2 h-44 w-[300px] cursor-pointer rounded-xl ${card.color} shadow-lg ring-1 ring-orange-300 flex items-center justify-center`}
            onClick={() =>
              setSelectedCardId(selectedCardId === card.id ? null : card.id)
            }
            style={{
              transformOrigin: "center left",
              pointerEvents:
                selectedCardId === null || selectedCardId === card.id
                  ? "auto"
                  : "none",
            }}
          >
            <p className="text-lg font-medium text-gray-700 px-4 text-center">
              {selectedCardId === card.id
                ? "Click to return card"
                : `Click to pull out ${card.title}`}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WalletCard;
