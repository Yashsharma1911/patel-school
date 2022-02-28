import styled from "styled-components";

export const Container = styled.div`
    margin-top: 75px;
    width: 100%;
    @media (max-width: 1000px) {
        margin-top: 30px;
    }
`
export const Text = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 116%;
    color: #000000;
    text-align: center;

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
export const SpanText = styled.span`
    font-style: normal;
    font-weight: bold;
    line-height: 116%;
    color: #D43260;
`;