import styled from "styled-components";

export const Container = styled.div`
    margin: 159px 0 0 0;
    width: 100%;
    padding: 61px 79px 79px 79px;
    background: #FEFAF4;
    
    @media (max-width: 1000px){
        padding: 61px 30px 79px 30px;
        margin-top: 80px;
    }
`
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 1500px){
        margin: 0 auto;
        width: 1377px;
    }
`
export const HeadingDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
`
export const ImgBg = styled.div`
    width: 60px;
    height: 60px;
    background: ${({ color }) => color};
    border-radius: 13px 0px 13px 13px;
    position: relative;
    margin: 35px 0 0 19px; 
    trasition: all 0.25s;
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
export const HeadingStyleDiv = styled.div`
    position: absolute;
    width: 55px;
    height: 55px;
    right: -15px;
    bottom: 10px;
    background: #FFC839;
    border-radius: 80.5px 80.5px 80.5px 0px;
    z-index: -1;

    @media(max-width: 428px){
        width: 34px;
        height: 34px;
        bottom: 5px;
        right: -10px;
    }
`
export const Img = styled.img`
    transition: all 0.25s;
`
export const Div = styled.div`
    position: relative;
    transition: all 0.25s ease-in-out;
    img{
        position: absolute;
        top: -6px;
        right: -9px;
        z-index: 2;
    }
    &:nth-child(2) {
        div{
            ${Img}{
                left: 18px;
                top: 16.30px;
            }
        }
    }
    &:nth-child(3) {
        div{
            ${Img}{
                left: 19px;
                top: 15px;
            }
        }
    }
    &:nth-child(4) {
        div{
            ${Img}{
                left: 16px;
                top: 19px;
            }
        }
    }
`
export const WrapCardsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 64px;
    width: 100%;
    flex-wrap: wrap;
    @media (max-width: 564px){
        margin-top: 63px;
        align-items: center;
        justify-content: center;
    }
    ${Div}{
        @media (max-width: 1160px){
            &:nth-child(4){
                margin-top: 51px;
            }
        }
        @media (max-width: 814px){
            &:nth-child(3){
                margin-top: 51px;
            }
        }
        @media (max-width: 564px){
            margin-top: 51px;
            align-items: center;
            justify-content: center;
            &:nth-child(1){
                margin-top: 0;
            }
        }
        &:hover{
            ${Img}:nth-child(2){
                transform: rotate(8deg);
            }
            transform: TranslateY(-18px);
        }
    }
`
export const CardHeading = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 116%;
    color: #000000;
    margin-left: 19px;
    margin-top: 25px;
`
export const CardText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 154.5%;
    color: #000000;
    margin-left: 19px;
    margin-top: 15px;
    margin-right: 23px;
`
export const Card = styled.div`
    width: 251px;
    height: 303px;
    background: ${({ color }) => color};
    box-shadow: 0px 4px 66px rgba(0, 0, 0, 0.12);
    border-radius: 20px 0px 20px 20px;
    display: flex;
    flex-direction: column;
    position: relative;

    ${Img}{
        position: absolute;
        left: 19px;
        top: 15px;
    }
  
`