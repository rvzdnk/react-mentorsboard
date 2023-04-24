import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const TextSpan = ({children}) => {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1,1,1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1,1,1)",
            ],
            transition: {
                times: [0, .4, .6, .7, .8, .9],
            },
            color: [
                "rgb(199, 210, 254)",
                "rgb(254, 202, 202)",
                "rgb(254, 249, 195)",
                "rgb(254, 249, 195)",
                "rgb(254, 249, 220)",
                "rgb(255,255,255)",
            ]
        })
        setIsPlaying(true);
    }

    return (
        <motion.span
            style={{display: "inline-block"}}
            animate={controls}
            onMouseOver={()=>{
                if(!isPlaying)
                    rubberBand();
            }}
            onAnimationComplete={()=> setIsPlaying(false)}
        >
            {children}
        </motion.span>
    )
}


const AnimatedTextCharacter = ({ children }) => {
  const words = children.split("");

  return (
    <>
        {words.map((letter, index) => {
            return (
                <TextSpan key={index}>
                        {letter === " " ? "\u00A0" : letter}
                </TextSpan>
            )}
        )}
    </>
  );
};

export default AnimatedTextCharacter;