import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IPremiumImage{
src : string,  
 alt : string
}

export function PremiumImage({ src  , alt } :IPremiumImage) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
      
      {/* Skeleton */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ scale: 1.1, filter: "blur(20px)" }}
        animate={{
          scale: loaded ? 1 : 1.1,
          filter: loaded ? "blur(0px)" : "blur(20px)",
        }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}