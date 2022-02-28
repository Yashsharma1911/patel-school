import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #EDF5D6;
    margin-top: 153px;
    padding-top: 102px;
    padding-bottom: 102px;

    @media(max-width: 1000px){
        margin-top: 80px;
    }
`
export const Text = styled.p`
    font-family: Libre Baskerville;
    font-style: italic;
    font-weight: normal;
    font-size: 20px;
    line-height: 164%;
    color: #000000;
    margin-bottom: 37px;
    text-align: center;
    
    @media (max-width: 428px) {
        font-size: 18px;
    }
`
export const TagText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 129%;
    color: #000000;
    text-align: center;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 589px;
    width: 86%;
`
export const Img = styled.img`
    margin-bottom: 47px;
    width: 83px;
    height: 63px;
`