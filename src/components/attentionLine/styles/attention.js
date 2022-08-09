import styled from "styled-components";
export const SpanText = styled.span`
font-style: normal;
font-weight: bold;
font-size: 96px;
line-height: 116%;

text-align: center;
    color: #D43260;

    @media (min-width: 1899px) {
        font-size: 126px;
    }
    @media (max-width: 1420px) {
        font-size: 86px;
    }
    @media (max-width: 1270px) {
        font-size: 76px;
    }
    @media (max-width: 1120px) {
        font-size: 66px;
    }
    @media (max-width: 975px) {
        text-align: left;
    }
    @media (max-width: 368px) {
        font-size: 56px;
    }
`;

export const Text = styled.p`
display: inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 116%;
    color: #000000;
    text-align: center;
    transition: all 0.3s ease-in-out;

    @media (min-width: 1899px) {
        font-size: 126px;
    }
    @media (max-width: 1420px) {
        font-size: 86px;
    }
    @media (max-width: 1270px) {
        font-size: 76px;
    }
    @media (max-width: 1120px) {
        font-size: 66px;
    }
    @media (max-width: 975px) {
        text-align: left;
    }
    @media (max-width: 368px) {
        font-size: 56px;
    }
`;

export const Container = styled.div`
    margin-top: 75px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &:hover {
        ${Text}{
            opacity: 0.3;
        }
    }

    @media (max-width: 1000px) {
        margin-top: 30px;
    }
    @media (max-width: 550px) {
        justify-content: start;
    }
`

