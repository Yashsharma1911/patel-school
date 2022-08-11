import styled, { keyframes } from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'

const fadeAnimation = keyframes`
    0% { opacity: 0; transform: translateY(80px);}
    100% { opacity: 1; transform: translateY(0px)}
`

const fadeAnimationButton = keyframes`
    0% { opacity: 0; transform: translateY(80px);}
    100% { opacity: 0.8; transform: translateY(0px)}
`

const thunderAnimation = keyframes`
    0% { opacity: 0; transform: translateX(80px);}
    100% { opacity: 1; transform: translateX(0px)}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 185px;
`;
export const SubContainer = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin-top: 140px;
    align-items: center;
    padding: 0px;
    gap: 31px;
    max-width: 402px;
    width: 100%;
`
export const Headline = styled.p`
    height: 30px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
    opacity: 0;

    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: ${({ order }) => order * 0.2}s;
`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 0px;
    width: 85%;
    max-width: 402px;
`;
export const Label = styled.label`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    opacity: 0;

    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: ${({ order }) => order * 0.2}s;
`;
export const Input = styled.input`
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #dde7f8;
    border-radius: 14px 14px 0px 14px;
    padding: 18px 18px;
    font-size: 15px;
    margin-top: 13px;

    &:hover {
    border: 1px solid black;
    }
    &:focus {
    border: 2px solid #2458b8;
    outline: none;
    }
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: ${({ order }) => order * 0.2}s;
`;
export const Button = styled.button`
    width: 85%;
    max-width: 402px;
    height: 45px;
    color: white;
    border: 0;
    background: ${({ disabled }) => disabled ? "#3A3A3A" : "#000000"};
    border-radius: 14px 14px 0px 14px;
    font-size: 15px;
    transition: all 0.25s;
    opacity: 0;

    animation-name: ${fadeAnimationButton};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: ${({ order }) => order * 0.2}s;

    &:hover {
        opacity: 0.8;
    }
`;
export const Forget = styled.a`
    width: 52px;
    height: 15px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
    opacity: 0;

    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: ${({ order }) => order * 0.2}s;

    &:hover {
        color: #000000;
        text-decoration: underline;
    }
`
export const Error = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 403px;
    width: 85%;
    height: 66px;
    background: #D43260;
    border-radius: 14px 14px 0px 14px;
`;
export const ErrorText = styled.div`
    text-align: center;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`;
export const Link = styled(ReactRouterLink)`
    width: 163px;
    height: 15px;
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
    animation-delay: ${({ order }) => order * 0.2}s;

    &:hover {
        text-decoration: underline;
    }
`;
export const Img = styled.img`
    position: absolute;
    width: 8%;
    top: 0;
    z-index: -1;
    right: 107px;
    opacity: 0;
    animation-name: ${thunderAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    animation-delay: ${({ order }) => order * 0.2}s;
`
