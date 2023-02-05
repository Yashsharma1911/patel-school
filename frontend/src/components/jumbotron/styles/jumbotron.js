import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1377px;
    margin: 152px 79px 0px 79px;

    @media(max-width: 1000px){
        margin: 80px 30px 0px 30px;
    }
    @media(max-width: 1252px){
        flex-direction: column;
    }
    @media (min-width: 1500px){
        margin: 152px auto 0px auto;
    }
`
export const Left = styled.div`
    margin-right: 102px;
`
export const Right = styled.div`
    @media(max-width: 1252px){
        margin-top: 63px;
        margin-right: 0px !important;
    }
`
export const Img = styled.img``
export const Div = styled.div`
    position: relative;
    
    ${Img}{
        position: absolute;
        right: -19px;
        top: -4px;
        z-index: -1;
        @media(max-width: 428px){
            width: 27px;
            height: 27px;
            top: -7px;
            right: -15px;
        }
    }
    &:first-of-type{
        display: inline-block;
    }
    &:nth-child(2){
        margin-top: 52px;
        width: 100%;
    }
`
export const ImageBackGround = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 86vw;
    height: 100vh;
    max-width: 585px;
    max-height: 524px;
    background: #EAF0FB;
    border-radius: 0px 30px 30px 30px;

    img{
        max-width: 549px;
        max-height: 488px;
        border-radius: 0px 30px 30px 30px;
        width: 93%;
        height: 93%;
        object-fit: cover;
        @media(max-width: 428px){
            max-width: 345px;
            max-height: 307px;
        }
        @media(max-width: 577px){
            max-width: 398px;
            max-height: 353px;
        }
    }
    @media(max-width: 577px){
        max-width: 424px;
        max-height: 379px;
    }
    @media(max-width: 428px){
        max-width: 368px;
        max-height: 329px;
    }
`

export const Heading = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 116%;
    color: #000000;

    @media(max-width: 428px){
        font-size: 24px;
    }
`
export const Text = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 33px;
    color: #000000;
    margin-top: 45px;
    width: 100%;
    transition: all 0.25s ease-in-out;

    @media(max-width: 1395px){
        font-size: 18px;
    }
    @media(max-width: 280px){
        font-size: 16px;
        margin-top: 35px;
    }
`
export const Button = styled(ReactRouterLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 175px;
    height: 42px;
    background: #000000;
    color: #FFFFFF;
    font-size: 16px;
    box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.09);
    border-radius: 21px 21px 0px 21px;
    margin-top: 37px;
    padding-bottom: 2px;
    transition: all 0.25s;
    &:hover{
        opacity: 0.8;
    }
`
export const SmallText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 164%;
    color: #000000;
    margin-top: 6px;

    @media(max-width: 428px){
        margin-top: 10px;
    }
`
export const FeatureDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 17px;
    ${Text}{
        margin-top: 0px;
    }
    &:first-of-type{
        margin-top: 52px;
    }
    &:hover{
        ${Text}{
            transform: translateX(10px);
        }
    }
`
export const IconImg = styled.img`
    margin-right: 20px;
    margin-left: 0;
    position: relative;
    height: 18px;
    top: 8px;

    @media(max-width: 428px){
        width: 15.02px;
        height: 15.02px;
        top: 9px;
    }
`
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
`