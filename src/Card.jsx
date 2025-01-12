// Card.jsx
import React from "react";

const cardData = [
  {
    title: "Auto-Sync with Brokers",
    description:
      "Seamlessly fetch trading data from broker accounts to eliminate manual entry.",
  },
  {
    title: "Comprehensive Analytics Dashboard",
    description:
      "Gain a clear overview of key metrics like P&L, win rates, and drawdowns at a glance.",
  },
  {
    title: "Strategy Backtesting",
    description:
      "Test trading strategies on historical data to refine and optimize performance.",
  },
  {
    title: "Trade Insights",
    description:
      "Receive actionable insights to identify profitable patterns and areas for improvement.",
  },
  {
    title: "Community Forum",
    description:
      "Engage with a vibrant trader community to exchange strategies, tips, and learnings.",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage AI to analyze trades, detect patterns, and suggest smarter strategies.",
  },
  {
    title: "Daily and Hourly Performance Breakdown",
    description:
      "Track P&L by day and time to uncover when you perform best in the market.",
  },
  {
    title: "Risk Management Tools",
    description:
      "Monitor critical metrics like drawdowns and position sizes to stay in control of risks.",
  },
];

const Card = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-black min-h-screen py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-72 h-60 p-4 border border-gray-300 rounded-lg hover:border-[#7d12ff] hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-center text-center"
            >
              <h3 className="text-lg font-semibold mb-2 text-zinc-50">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
