import { useState } from "react";

export function useParallax() {
  /**Movimentar os elementos diante do mouse --- */
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;

    setPos({ x, y });
  };

  return { pos, handleMove };
}