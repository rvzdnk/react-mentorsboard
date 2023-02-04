import styled from "styled-components";

export const Link = styled.span`
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 0.05em;
    position: relative;
    margin: 0 0 0 10px;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            background-color: #18272F;
            bottom: 0;
            left: 0;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform .3s ease-in-out;
        },
        &:hover::before {
            transform-origin: left;
            transform: scaleX(1);
        },
`;