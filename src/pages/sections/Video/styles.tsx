import styled from "styled-components"

export const SectionVideo = styled.div`
    position: relative; 
    width: 100%;
    display: inline-block; 


    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3); 
    }

    img {
        width: 100%;
        height: auto;
        display: block; 
    }
`;

export const PlayButoon = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    border: none; 
    cursor: pointer; 

    z-index: 2;

    span {
        font-size: 0.7rem;
        color: #333;
        font-weight: bold;
        letter-spacing: 1px; 
    }

    transition: transform 0.3s ease;

    &:hover {
        transform: translate(-50%, -50%) scale(1.1); 
    }
`;