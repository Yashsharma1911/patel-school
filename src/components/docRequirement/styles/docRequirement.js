import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 73px auto;
    max-width: 647px;
    width: 80%;

    @media (max-width: 428px) {
        margin: 93px auto 40px auto;
        width: 85%;
    }
`
export const HeadLine = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    line-height: 116%;
    color: #000000;
    text-align: center;
    margin-bottom: 23px;

    @media (max-width: 748px) {
        font-size: 29px;
    }
`
export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 164%;
    color: #000000;
    text-align: center;

    @media (max-width: 428px) {
        font-size: 16px;
    }
`
export const Img = styled.img`
    margin: 18px 24px 18px 30px;
    width: 15.71px;
    height: 22px;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 23px;
    wdith: 100%;
    margin-top: 50px;

    @media(max-width: 428px) {
        margin-top: 43px;
    }
`
export const DocContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 591px;
    border: 1px solid ${({ color }) => color};
    border-radius: 17px 17px 0px 17px;
    transition: all 0.25s;
    margin-bottom: 14px;

    &:hover{
        background-color: ${({ color }) => color};
    }
    ${Text}{
        margin: 14px 0;
        text-align: left;
    }
    @media (max-width: 428px) {
        ${Text}{
            font-size: 16px;
            margin-top: 15.5px;
        }
        ${Img}{
            margin-left: 20px;
            margin-right: 15px;
            margin-top: 17px;
        }
}
`
export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 591px;
    width: 100%;
    margin-top: 23px;
    @media(max-width: 728px){
        flex-wrap: wrap-reverse;
    }
    @media(max-width: 728px){
        width: 100%;
        max-width: 1000px;
    }
`

export const BackButton = styled(ReactRouterLink)`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #939393;
    border-radius: 17px 17px 0px 17px;
    height: 53px;
    color: black;
    transition: all 0.25s;
    margin-right: 13px;

    img{
        margin: 3px 12px 0 0;
        height: 11.38px;
        width: 13px;
    }
    @media(max-width: 728px){
        width: 100%;
        margin-right: 0px;
        margin-top: 14px;
    }
    ${Img}{
        transition: all 0.25s ease-out;
    }
    &:hover{
        img{
            transform: TranslateX(-9px);
        }
    }
`
export const ContinueButton = styled(ReactRouterLink)`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    border-radius: 17px 17px 0px 17px;
    color: white;
    height: 53px;
    margin-left: 13px;
    img{
        margin: 3px 0 0 12px;
        height: 11.38px;
        width: 13px;
    }
    @media(max-width: 728px){
        width: 100%;
        margin-left: 0;
    }
    ${Img}{
        transition: all 0.25s ease-out;
    }
    &:hover{
        img{
            transform: TranslateX(9px);
        }
    }
`
