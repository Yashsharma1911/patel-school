import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 127px 79px 0px 79px;
    max-width: 1377px;

    @media(max-width: 1000px){
        margin: 80px 30px 0px 30px;
    }
    @media (min-width: 1500px){
        margin: 127px auto 0px auto;
    }
`
export const Div = styled.div`
    position: relative;
`
export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 33px;
    color: #000000;
    text-align: center;

    @media(max-width: 428px){
        font-size: 18px;
        text-align: left;
    }
`
export const HeadingDiv = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;

    ${Div}{
        margin: 0 auto;
        Img{
            position: absolute;
            top: -15px;
            right: -25px;
            z-index: -1;

            @media(max-width: 428px){
                width: 32px;
                height: 43px;
                right: -15px;
                top: -10px;
            }
        }
        @media(max-width: 428px){
            width: 159px;
            margin: 0 0;
        }
    }
    ${Text}{
        margin-top: 18px;
        @media(max-width: 428px){
            margin-top: 41px;
        }
    }
`
export const IconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 77px;
    flex-wrap: wrap;


    ${Div}{
        display: flex;
        flex-direction: column;
        margin-top: 53px;
        p{
            margin-top: 31px;
            text-align: center;
            font-weight: 600;
            @media(max-width: 587px){
                font-size: 18px;
                margin-top: 27px;
                width: 161px;
            }
        }
        &:hover{
            img{
                transform: TranslateY(-13px);
            }
        }
    }
    @media(max-width: 587px){
        div:nth-child(1){
            img{
                height: 58px;
                width: 58px;
            }
        }
        div:nth-child(2){
            img{
                height: 58px;
                width: 58px;
            }
        }
        div:nth-child(3){
            img{
                height: 53px;
                width: 59px;
            }
        }
        div:nth-child(4){
            img{
                height: 57px;
                width: 43px;
            }
        }
        margin-top: -4px;
    }
    @media(max-width: 380px){
        justify-content: center;
        align-items: center;
    }
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
    margin: 0 auto;
    transition: all 0.25s ease-in-out;
`
