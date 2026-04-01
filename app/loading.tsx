"use client";
import { useState, useEffect } from "react";

// This acts as your "Zero-Lag" fallback
const INITIAL_HADITH = {
  text: "Patience is a pillar of light.",
  source: "Sahih Muslim"
};

export default function Loading() {
  const [data, setData] = useState(INITIAL_HADITH);

  useEffect(() => {
    const fetchIslamicWisdom = async () => {
      try {
        // We try to get a fresh one from the library
        const randomHadith = Math.floor(Math.random() * 500) + 1;
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari/${randomHadith}.json`
        );
        
        if (!res.ok) throw new Error("Network response was not ok");
        
        const json = await res.json();
        
        // Only update if we successfully got data
        setData({ 
          text: json.hadith, 
          source: "Sahih Bukhari" 
        });
      } catch (error) {
        // If the API fails or is slow, it just keeps the INITIAL_HADITH
        console.log("Using local fallback Hadith");
      }
    };

    fetchIslamicWisdom();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFF0F4] px-10 text-center">
      {/* Neumorphic Spinner */}
      <div className="relative w-24 h-24 flex items-center justify-center rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] mb-12">
        <div className="w-16 h-16 border-4 border-t-amber-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <p className="absolute text-[10px] font-bold text-amber-600 uppercase tracking-widest">
          Loading
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        <p className="text-xl md:text-2xl leading-relaxed text-[#555] font-medium animate-pulse transition-all duration-500">
          “{data.text}”
        </p>
        <p className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em]">
          — {data.source}
        </p>
      </div>

      <div className="mt-16">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-[0.4em]">
          Syncing latest data
        </p>
      </div>
    </div>
  );
}