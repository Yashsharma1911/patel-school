import styled from "styled-components";
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 110px 79px 0px 79px;

    @media(max-width: 1000px){
        margin: 130px 30px 0px 30px;
    }

    @media(max-width: 428px){
        margin-top: 105px;
    }

    @media (min-width: 1500px){
        margin: 40px auto 0px auto;
        width: 1377px;
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`
export const Heading = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 116%;
    color: #000000;

    @media(max-width: 428px){
        font-size: 22px;
    }
`
export const Img = styled.img`
    position: absolute;
    top: 45px;
    right: 45px;
`
export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 92vw;
    max-width: 362px;
    height: 435px;
    background: ${({ bg }) => bg};
    border-radius: 0px 45px 45px 45px;
    overflow: hidden;
    margin-top: 43px;
    margin-right: 5px;
    margin-bottom: 19px;
    transition: all 0.2s;

    &:last-of-type {
        margin-right: 0;
    }

    &:nth-child(1) {
        ${Img} {
            left: 45px;
            top: 44px;
            width: 67px;
            height: 66px;
        }
    }
    &:nth-child(2) {
        ${Img} {
            left: 32px;
            top: 39px;
            width: 87.73px;
            height: 68.51px;
        }
    }
    &:nth-child(3) {
        ${Img} {
            left: 48px;
            top: 42px;
            width: 66px;
            height: 72px;
        }
    }
    &:hover{
        transform: scale(1.07);
        z-index: 2;
    }
`
export const CardHeadLine = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 116%;
    color: #000000;
    margin-top: 185px;
    margin-left: 32px;

    @media(max-width: 428px){
        font-size: 22px;
    }
`
export const CardText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 149.5%;
    color: #000000;
    margin-top: 28px;
    margin-left: 32px;
    margin-right: 32px;

    @media(max-width: 280px){
        font-size: 15px;
        margin-right: 10px;
    }

`
export const Circle = styled.div`
    position: absolute;
    width: 157px;
    height: 157px;
    left: 0px;
    top: 0px;
    background: ${({ bg }) => bg};
    border-radius: 0px 80.5px 80.5px 80.5px;
`
export const CardButtonLink = styled(ReactRouterLink)`
    height: 23px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 129%;
    color: #2458B8;
    margin-top: 16px;
    margin-left: 32px;
    display: inline;

    &:hover{
        text-decoration: underline;
    }
`
