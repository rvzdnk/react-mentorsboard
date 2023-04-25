import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 30px 20px 30px 20px;
`;

export const MenuWrapper = styled.div`
    display: flex;
`;

export const Link = styled(motion.div)`
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.05em;
    position: relative;
    margin: 0 0 0 15px;
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
`;
