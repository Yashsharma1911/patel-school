import styled from "styled-components";
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 88px;
    max-width: 1377px;

    @media (min-width: 1500px){
        margin: 88px auto;
        width: 1377px;
    }

`
export const Div = styled.div`
    position: relative;

    img{
        width: 45px;
        height: 45px;
        z-index: -1;
        position: absolute;
        top: 10px;
        right: 25px;
        display: block;

        //making more responsive

        @media(max-width: 1147px){
            width: 35px;
            height: 35px;
        }

        @media(max-width: 540px){
            right: 70px;
        }

        @media(max-width: 509px){
            right: 25px;
        }

        @media(max-width: 412px){
            right: -5px;
            top: 5px;
        }

        @media(width: 1024px){
            right: -8px;
            top: 8px;
        }
    }
`
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 611px;
    margin-top: 55px;

    @media(max-width: 1000px){
        margin-top: 35px;
    }
`
export const Right = styled.div``
export const HeadLine = styled.p`
    max-width: 611px;
    font-style: normal;
    font-weight: 600;
    font-size: 80px;
    line-height: 116%;

    @media(max-width: 1311px){
        font-size: 65px;
    }
    @media(max-width: 1147px){
        font-size: 55px; 
    }
    @media(max-width: 428px){
        font-size: 48px; 
    }
`
export const SubHeadLine = styled.p`
    width: 100%;
    max-width: 480px;
    height: 66px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 33px;
    margin-top: 35px;

    @media(max-width: 1311px){
        font-size: 17px;
        width: 80%;
    }
    @media(max-width: 1147px){
        font-size: 16px; 
        width: 100%;
    }
    @media(max-width: 428px){
        font-size: 16px; 
        line-height: 164%;
        width: 100%;
    }
`

export const Img = styled.img`

    @media(max-width: 1311px){
        width: 494.23px;
        height: 462px;  
    }
    @media(max-width: 1147px){
        width: 470.7px;
        height: 440px;  
    }
    
    @media(max-width: 1000px){
        display: none;
    }
`

export const Button = styled(ReactRouterLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3px;
    width: 140px;
    height: 42px;
    color: white;
    margin-top: 35px;
    text-decoration: none;
    background: #000000;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.09);
    border-radius: 21px 21px 0px 21px;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }

    @media(max-width: 428px){
        margin-top: 43px;
    }

    @media(max-width: 298px){
        margin-top: 70px;
    }
`

