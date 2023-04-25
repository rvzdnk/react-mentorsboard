import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const LogoMain = styled(motion.div)`
    font-size: 1.5rem;
    font-weight: bold;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 0 4px 0 4px;
    margin: 0 2px 0 0;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
`

export const LogoText = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
`
