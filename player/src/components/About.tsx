import { useState } from "react";
import AnimatedDiv from "./styles/AnimatiedDiv";
function Left() {
  const [rotate, setRotate] = useState(false);
  return (
    <AnimatedDiv
      initial={{ x: "100vw" }}
      whileHover={{
        scale: 1.2,
        transition: {
          duration: 0.5,
          yoyo: Infinity,
        },
      }}
      animate={{ x: 0, rotate: rotate ? 360 : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: "100vw" }}
      onClick={() => {
        setRotate(!rotate);
      }}
    />
  );
}

export default Left;
