
import confetti from "https://esm.run/canvas-confetti@1";

export const confettiFunc = () => {
    confetti({
      particleCount: 150,
      spread: 60
    });
  };