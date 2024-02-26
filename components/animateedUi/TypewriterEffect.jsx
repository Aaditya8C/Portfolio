"use client";

import { cn } from "@/utils/cn";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const containerRef = useRef();
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const renderWords = () => (
    <motion.div ref={containerRef} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-black opacity-0 hidden`,
                word.className
              )}
              initial={{}}
              animate={controls}
              transition={{
                duration: 0.3,
                delay: 0.1 * index,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(`dark:text-white text-black `, word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xl md:text-xl xl:text-3xl font-bold break-all"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px]  h-6 xl:h-10 bg-orange-300",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
