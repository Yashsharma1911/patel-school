import styled, { keyframes } from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'
const fadeAnimation = keyframes`
    0% { opacity: 0; transform: translateY(120px);}
    100% { opacity: 1; transform: translateY(0px)}
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 145px;
    margin-bottom: 190px;
    @media (max-width: 428px) {
        margin-bottom: 145px;
    }
`
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    max-width: 878px;
    width: 80%;
`
export const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    justify-content: space-between;
    margin-top: 95px;
    max-width: 878px;
    width: 100%;
    @media (max-width: 950px) {
        flex-direction: column;
        margin-top: 50px;
    }
`
export const Text = styled.div`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 116%;
    text-align: center;
    color: #000000;
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
`
export const Img = styled.img`
    border-radius: 50%;
    &:hover, &:active {
        cursor: pointer;
        border: 1px solid #000000;
    }
    @media (max-width: 950px) {
        margin-top: 30px;
        width: 200px;
        height: 200px;
    }
`
export const Link = styled.a`
    text-decoration: none;
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: ${({ order }) => order * 0.2}s;
`

export const LinkTo = styled(ReactRouterLink)`
    text-decoration: none;
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: ${({ order }) => order * 0.2}s;
`