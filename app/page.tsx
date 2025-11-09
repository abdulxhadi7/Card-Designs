"use client";

import Image from "next/image";
import { Star, DollarSign, Clock, Bookmark, Mail } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const controlsA = useAnimation();
  const controlsB = useAnimation();

  // Card pop-up variants
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 260, damping: 20, when: "beforeChildren", staggerChildren: 0.15 } 
    },
  };

  // Image fade-in
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Text fade-up
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Start shine animation after cards appear
  useEffect(() => {
    const sequence = async () => {
      await controlsA.start("visible");
      await controlsB.start("visible");
    };
    sequence();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#e2e2e2] p-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Card A */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controlsA}
          className="p-3 rounded-[30px] bg-[#ffffff] relative overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-[320px] h-[480px] bg-white rounded-[28px] overflow-hidden group"
          >
            <motion.div variants={imageVariants} className="relative h-[260px] rounded-2xl w-full overflow-hidden">
              <Image
                src="/img.png"
                alt="Profile"
                fill
                className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110"
              />
              <motion.div
                variants={textVariants}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <Bookmark className="w-4 h-4 text-zinc-800" />
              </motion.div>
            </motion.div>

            <motion.div variants={textVariants} className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
              <div>
                <motion.h3 variants={textVariants} className="text-lg font-semibold text-zinc-900 flex items-center gap-1">
                  Natasha Romanoff <span className="text-sky-500 text-lg">✔️</span>
                </motion.h3>
                <motion.p variants={textVariants} className="text-sm text-zinc-500 mt-1 leading-snug">
                  I’m a Brand Designer who focuses on clarity & emotional connection.
                </motion.p>

                <motion.div variants={textVariants} className="flex justify-between items-center mt-5 text-sm text-zinc-700">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" /> 4.8
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-green-500" /> $45k+
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-500" /> $50/hr
                  </div>
                </motion.div>
              </div>

              {/* Button with synced shine */}
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white font-medium overflow-hidden"
              >
                <Mail className="w-4 h-4" /> Get In Touch
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: 0.6 }} // starts after card appears
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 pointer-events-none"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Card B */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controlsB}
          transition={{ delay: 0.2 }}
          className="p-3 rounded-[30px] bg-[#ffffff] relative overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-[320px] h-[480px] bg-white rounded-[28px] shadow-[0_10px_25px_rgba(0,0,0,0.06)] overflow-hidden border border-[#e9e7e4] group"
          >
            <motion.div variants={imageVariants} className="relative w-full h-full">
              <Image
                src="/img.png"
                alt="Profile"
                fill
                className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110"
              />
              <motion.div variants={textVariants} className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-[2px] p-6 transition-all duration-500 group-hover:backdrop-blur-[1px]">
                <h3 className="text-white text-lg font-semibold flex items-center gap-1">
                  Natasha Romanoff <span className="text-sky-400 text-lg">✔️</span>
                </h3>
                <p className="text-sm text-gray-200 mt-1 leading-snug">
                  I’m a Brand Designer who focuses on clarity & emotional connection.
                </p>
                <div className="flex justify-between items-center mt-5 text-sm text-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" /> 4.8
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-green-400" /> $45k+
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-400" /> $50/hr
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-zinc-900 font-medium shadow-md overflow-hidden"
                  >
                    <Mail className="w-4 h-4" /> Get In Touch
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: 0.6 }}
                      className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 pointer-events-none"
                    />
                  </motion.button>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-3 p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 shadow-sm cursor-pointer hover:bg-white/30 transition-all"
                  >
                    <Bookmark className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}
