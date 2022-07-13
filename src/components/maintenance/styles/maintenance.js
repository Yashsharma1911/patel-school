import styled, { keyframes } from 'styled-components'
import { Link as ReactRouterLink } from "react-router-dom";

const fadeAnimation = keyframes`
    0% { opacity: 0; transform: translateY(300px);}
    100% { opacity: 1; transform: translateY(0px)}
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    max-width: 433px;
    width: 90%;
`
export const Img = styled.img`
    width: 400px;
    height: 400px;
    opcaity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;

    @media (max-width: 428px) {
        width: 270px;
        height: 270px;
    }
`
export const TextBig = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 116%;
width: 100%;
margin-bottom: 25px;
margin-top: -13px;
text-align: center;
opacity: 0;

    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.2s;


color: #000000;
`
export const TextSmall = styled.p`
    max-width: 378px;
    width: 80%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 116%;
    text-align: center;
    margin-bottom: 25px;


    color: #616161;
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.4s;

`
export const Link = styled(ReactRouterLink)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #2458B8;
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.6s;

    &:hover{
        text-decoration: underline;
    }
`