import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    max-width: 417px;
    width: 100%;
    margin: 61px auto 0 auto;

    @media(max-width: 600px){
        width: 220px;
        margin-top: 116px;
    }
`
export const Text = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    line-height: 116%;
    color: #000000;

    @media (max-width: 600px){
        font-size: 29px;
    }
`
export const Div = styled.div`
    position: absolute;
    width: 65px;
    height: 65px;
    top: -13px;
    right: 0px;
    background: #FFC839;
    border-radius: 80.5px 80.5px 80.5px 0px;
    z-index: -1;
    @media(max-width: 600px){
        width: 39px;
        height: 39px;
    }
`