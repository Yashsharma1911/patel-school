import styled, { keyframes } from 'styled-components'
import { Link as ReactRouterLink } from "react-router-dom";

const fadeAnimation = keyframes`
    0% { opacity: 0; transform: translateY(120px);}
    100% { opacity: 1; transform: translateY(0px)}
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 87vh;
    align-items: center;
    justify-content: center;
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
    width: 236.03px;
    height: 236px;
    margin-bottom: 43px;
    opcaity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
`
export const TextBig = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 116%;
    width: 100%;
    margin-bottom: 25px;
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
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.4s;

    color: #616161;

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