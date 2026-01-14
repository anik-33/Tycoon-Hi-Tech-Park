import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const slides = [
  "/1.jpeg",
  "/6.jpeg",
  "/8.jpeg",
];

const Sliders = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={current}
          src={slides[current]}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Sliders;
